/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import Input from '../../Atoms/Input/Input';
import Label from '../../Atoms/Label/Label';

export const StyledForm = styled.form`
  grid-row: 3/ 4;
  grid-column: 2 / 3;
  width: 400px;
  height: 700px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(243, 241, 241, 0.932);
  overflow: hidden;
  position: relative;
  @media screen and (min-width: 1280px) {
    grid-row: 2/ 2;
    grid-column: 2/3;
    height: 600px;
  }
  @media screen and (min-width: 1920px) {
    grid-row: 2/ 2;
    grid-column: 2/3;
    width: 400px;
    height: 750px;
  }

  button {
    top: 650px;
    left: 200px;
    transform: translate(-50%, -50%);
    @media screen and (min-width: 1280px) {
      top: 565px;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 13px;
    }
    @media screen and (min-width: 1920px) {
      top: 710px;
      left: 200px;
      font-size: 18px;
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
