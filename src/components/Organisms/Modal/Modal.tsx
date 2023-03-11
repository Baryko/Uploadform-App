import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { DataFromFb, ModalTypes } from './Modal.types';
import {
  DataWrapper,
  TitleContainer,
  FileData,
  FormValueContainer,
  LinkContainer,
  ModalWrapper,
  MessageContainer,
  StyledLinkInput,
  Title,
  TitleContent,
  MessageContent,
  Message,
} from './Modal.styles';
import { Button } from '../../Atoms/Button/Button';

function Modal({ isOpen, handleClose, filesFromFirebase, setfilesFromFirebase }: ModalTypes) {
  const [copiedLink, setCopiedLink] = useState({
    link: '',
    copied: false,
  });

  return (
    <ModalWrapper
      isOpen={isOpen}
      onRequestClose={() => {
        handleClose();
        setfilesFromFirebase([]);
      }}
      appElement={document.getElementById('root') || undefined}
    >
      {filesFromFirebase.map((files: DataFromFb) => (
        <DataWrapper key={Math.random()}>
          <FormValueContainer>
            <TitleContainer>
              <Title>Title:</Title>
              <TitleContent>{files.Title}</TitleContent>
            </TitleContainer>
            <MessageContainer>
              <Message>Message:</Message>
              <MessageContent>{files.Message}</MessageContent>
            </MessageContainer>
          </FormValueContainer>
          <div>
            <p>Files</p>
            {files.File.map((file) => (
              <FileData key={Math.random()}>
                <div>
                  <span>{file.name}</span>
                </div>
                <div>
                  <span>{file.size} MB</span>
                  <span>{file.fileType}</span>
                </div>

                <LinkContainer>
                  <StyledLinkInput type="text" value={file.link} readOnly />
                  <CopyToClipboard text={file.link} onCopy={(e) => setCopiedLink({ link: e, copied: true })}>
                    <button type="button">{copiedLink.link === file.link ? 'Copied' : 'Copy'}</button>
                  </CopyToClipboard>
                </LinkContainer>
              </FileData>
            ))}
          </div>
        </DataWrapper>
      ))}
      <Button
        onClick={() => {
          handleClose();
          setfilesFromFirebase([]);
        }}
      >
        Close
      </Button>
    </ModalWrapper>
  );
}

export default Modal;
