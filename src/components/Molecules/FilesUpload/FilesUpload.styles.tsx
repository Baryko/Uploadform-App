/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

import Label from '../../Atoms/Label/Label';

export const UploadField = styled.div`
  border: 0px dashed black;
  background-color: #846d9c36;
  margin-bottom: 0px;
  position: relative;
  border-radius: 15px;

  @media screen and (min-width: 1280px) {
    height: 55px;
  }
  @media screen and (min-width: 1536px) {
    height: 75px;
  }
  @media screen and (min-width: 1920px) {
    height: 120px;
  }
  &.dragover {
    opacity: 0.6;
  }

  SVG {
    position: absolute;
    top: 40px;
    @media screen and (min-width: 1280px) {
      font-size: 16px;
      top: 20px;
    }
    @media screen and (min-width: 1536px) {
      font-size: 18px;
      top: 30px;
    }
    @media screen and (min-width: 1920px) {
      font-size: 20px;
      top: 40px;
    }
  }
`;
