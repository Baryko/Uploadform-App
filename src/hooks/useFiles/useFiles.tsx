import { useState } from 'react';
import { useError } from '../useError/useError';
import { UploadedFiles } from './useFiles.types';

const useFiles = () => {
  const { dispatchError } = useError();
  const [files, setFiles] = useState<UploadedFiles>([]);

  const validateAddedFiles = (previousFiles: UploadedFiles, newFiles: UploadedFiles): boolean => {
    const allFiles = [...previousFiles, ...newFiles];

    const validateAllFiles = allFiles.reduce((filesAdded: File[], file) => {
      const quantityOfFiles = [...filesAdded, file].length;
      const totalWeight: number = filesAdded
        ? filesAdded.reduce((total: number, value: File) => total + value.size, 0) + file.size
        : file.size;

      const isFileAlready = filesAdded.some((prevFile) => prevFile.name === file.name);
      const fileType = file.name.split('.').pop();

      switch (fileType) {
        case 'jpg':
          break;
        case 'png':
          break;
        case 'mp4':
          break;
        case 'jpeg':
          break;
        default:
          dispatchError((prevState) => ({
            ...prevState,
            isError: true,
            fileTypeError: `You can not upload other file type than MP4 | JPG | JPEG | PNG. `,
          }));
          return [...filesAdded];
      }

      if (isFileAlready) {
        dispatchError((prevState) => ({
          ...prevState,
          isError: true,
          fileAlreadyExistError: `You can not upload the same files twice! `,
        }));
        return [...filesAdded];
      }

      if (totalWeight < 10000000 && quantityOfFiles <= 5) {
        return [...filesAdded, file];
      }

      if (totalWeight > 10000000) {
        dispatchError((prevState) => ({
          ...prevState,
          isError: true,
          filesSizeError: `Uploaded files can not exceed 10 MB!`,
        }));
        return [...filesAdded];
      }
      if (quantityOfFiles > 5) {
        dispatchError((prevState) => ({
          ...prevState,
          isError: true,
          filesQuantityError: `You can not upload more than 5 files!`,
        }));
        return [...filesAdded];
      }
      return [...filesAdded];
    }, []);

    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    if (validateAllFiles) {
      setFiles(validateAllFiles);
      return true;
    }
    return false;
  };

  const handleAddFile = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const uploadedFiles: UploadedFiles = Array.from(e.target.files || []);
    validateAddedFiles(files, uploadedFiles);
  };
  const handleDeleteFile = (fileName: string): void => {
    setFiles(files.filter((file) => file.name !== fileName));
  };

  return {
    handleAddFile,
    handleDeleteFile,
    validateAddedFiles,
    files,
    setFiles,
  };
};

export default useFiles;
