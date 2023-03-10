const useDragAndDrop = (reference: React.RefObject<HTMLDivElement>) => {
  const onDragEnter = (e: React.DragEvent): void => {
    e.stopPropagation();
    e.preventDefault();
    reference.current?.classList.add('dragover');
  };
  const onDragLeave = (e: React.DragEvent): void => {
    e.stopPropagation();
    e.preventDefault();
    reference.current?.classList.remove('dragover');
  };

  const onDragOver = (e: React.DragEvent): void => {
    e.stopPropagation();
  };

  const onDrop = (): void => {
    reference.current?.classList.remove('dragover');
  };

  return {
    onDragEnter,
    onDragLeave,
    onDragOver,
    onDrop,
  };
};

export default useDragAndDrop;
