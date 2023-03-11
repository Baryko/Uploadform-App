import React from 'react';
import { StyledImage, Wrapper } from './PreviewPanel.styles';
import Video from '../../Atoms/Video/Video';
import { Props } from './PreviewPanel.types';

// eslint-disable-next-line react/function-component-definition
const PreviewPanel: React.FC<Props> = ({ link, setIsPreview, fileType }) => {
  return (
    <Wrapper>
      {fileType === 'mp4' ? <Video link={link} /> : <StyledImage src={link} alt="" />}
      <button type="button" onClick={() => setIsPreview({ displayFile: false, link: '', fileType: '' })}>
        X
      </button>
    </Wrapper>
  );
};

export default PreviewPanel;
