/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import Input from '../../Atoms/Input/Input';
import Label from '../../Atoms/Label/Label';

export const UploadField = styled.div`
  border: 0px dashed black;
  background-color: #846d9c36;
  margin-bottom: 0px;
  position: relative;
  border-radius: 15px;
  @media screen and (min-width: 1280px) {
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
      font-size: 18px;
      top: 30px;
    }
    @media screen and (min-width: 1920px) {
      font-size: 20px;
      top: 40px;
    }
  }
`;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 10px;
  margin-top: 5px;
  width: 330px;
  height: 350px;
  margin-top: 10px;
  ${Input} {
    margin-bottom: 20px;
    display: block;
    width: 200px;
    height: 80px;
    opacity: 0;
    cursor: pointer;
    /* z-index: 10; */
    @media screen and (min-width: 1280px) {
      height: 75px;
    }
    @media screen and (min-width: 1920px) {
      height: 120px;
    }
  }
  ${Input}::file-selector-button {
    display: none;
  }
  ${Label} {
    color: black;
    height: 20px;
    width: 330px;
    display: flex;
    text-align: center;
    font-size: 12px;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    position: absolute;
    top: 15px;
    @media screen and (min-width: 1280px) {
      font-size: 10px;
    }
    @media screen and (min-width: 1920px) {
      font-size: 12px;
    }
  }
`;
