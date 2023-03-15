import styled from 'styled-components';
import ReactModal from 'react-modal';
import { Button } from '../../Atoms/Button/Button';

export const TitleContainer = styled.div``;
export const MessageContainer = styled.div``;
export const Title = styled.span``;
export const TitleContent = styled.span``;
export const Message = styled.span``;
export const MessageContent = styled.span``;

// eslint-disable-next-line import/prefer-default-export
export const ModalWrapper = styled(ReactModal)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 1100px;
  min-height: auto;
  background-color: white;
  border-radius: 15px;
  box-shadow: 0px -5px 25px -10px rgba(0, 0, 0, 0.3);
  opacity: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 20px;

  @media screen and (min-width: 1280px) {
    width: 1100px;
    height: auto;
  }
  @media screen and (min-width: 1920px) {
    width: 1100px;
    height: auto;
    justify-content: center;
  }
  &:focus {
    outline: none;
  }
  ${Button} {
    position: static;
    width: 90px;
    height: 40px;
    margin: 10px;
    @media screen and (min-width: 1280px) {
      font-size: 13px;
    }
    @media screen and (min-width: 1920px) {
      font-size: 18px;
    }
  }
`;

export const DataWrapper = styled.div`
  display: flex;
  width: 90%;
  border-bottom: 1px solid rgba(28, 110, 164, 0.39);
  @media screen and (min-width: 1280px) {
    width: 95%;
  }
  span {
    font-size: 12px;
  }
  div:nth-of-type(2) {
    flex-grow: 1;
    p {
      font-size: 12px;
      height: 20px;
      margin: 0;
      font-weight: 700;
      border-bottom: 1px solid rgba(28, 110, 164, 0.39);
      padding-left: 5px;
    }
  }
`;

export const FormValueContainer = styled.div`
  font-size: 12px;
  display: flex;
  width: 35%;
  border-right: 1px solid rgba(28, 110, 164, 0.39);
  @media screen and (min-width: 1280px) {
    width: 35%;
    display: flex;
  }
  ${TitleContainer} {
    display: flex;
    flex-direction: column;
    width: 30%;
    border-right: 1px solid rgba(28, 110, 164, 0.39);
    @media screen and (min-width: 1280px) {
      display: flex;
    }
    @media screen and (min-width: 1920px) {
      display: flex;
    }
    ${Title} {
      width: 100%;
      height: 20px;
      padding-left: 5px;
      font-weight: bold;
      border-bottom: 1px solid rgba(28, 110, 164, 0.39);
    }
    ${TitleContent} {
      width: 100%;
      max-height: 300px;
      padding-top: 10px;
      padding-left: 7px;
      overflow-wrap: break-word;
      word-wrap: break-word;
      overflow-y: auto;
      &::-webkit-scrollbar {
        width: 10px;
      }
      &::-webkit-scrollbar-track {
        background: #ffffff;
      }
      &::-webkit-scrollbar-thumb {
        background-color: #884ac6;
        border-radius: 9px;
        border: 2px solid #ffffff;
      }
    }
  }
  ${MessageContainer} {
    display: flex;
    flex-direction: column;
    width: 70%;
    @media screen and (min-width: 1280px) {
      display: flex;
    }
    ${Message} {
      width: 100%;
      height: 20px;
      font-weight: bold;
      padding-left: 5px;
      border-bottom: 1px solid rgba(28, 110, 164, 0.39);
    }
    ${MessageContent} {
      width: 100%;
      padding-left: 7px;
      padding-top: 10px;
      overflow-wrap: break-word;
      word-wrap: break-word;
      overflow-y: auto;
      max-height: 300px;
      &::-webkit-scrollbar {
        width: 10px;
      }
      &::-webkit-scrollbar-track {
        background: #ffffff;
      }
      &::-webkit-scrollbar-thumb {
        background-color: #884ac6;
        border-radius: 9px;
        border: 2px solid #ffffff;
      }
    }
  }
`;

export const FileData = styled.div`
  display: flex;
  font-size: 12px;
  width: 100%;
  margin-top: 5px;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 1280px) {
    width: 100%;
  }
  div:nth-child(1) {
    text-overflow: ellipsis;
    overflow: hidden;
    width: 210px;
    margin-right: 20px;
    white-space: nowrap;
    @media screen and (min-width: 1280px) {
      width: 210px;
    }
    span {
      padding-left: 5px;
    }
  }
  div:nth-child(2) {
    display: flex;
    justify-content: space-between;
    font-weight: 500;
    font-size: 11px;
    align-items: center;
    align-content: center;
    div {
      width: 80px;
      padding: 0;
      margin: 0;
      position: relative;
      @media screen and (min-width: 1280px) {
        width: 60px;
      }
      @media screen and (min-width: 1920px) {
        width: 80px;
      }
      span {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: none;
        font-size: 14px;
        color: black;
        background-color: whitesmoke;
        border-radius: 25px;
        width: 47px;
      }
      span:hover {
        display: block;
        cursor: pointer;
      }
    }
    img {
      width: 80px;
      height: 80px;
      transition: 0.2s linear;
      cursor: pointer;
      @media screen and (min-width: 1280px) {
        width: 60px;
        height: 60px;
      }
      @media screen and (min-width: 1920px) {
        height: 80px;
        width: 80px;
      }
    }
    img:hover + span {
      display: block;
      cursor: pointer;
    }
  }
`;

export const LinkContainer = styled.div`
  @media screen and (min-width: 1280px) {
    display: block;
  }
  @media screen and (min-width: 1920px) {
    display: block;
  }
  button {
    appearance: none;
    width: 60px;
    height: 20px;
    background-color: blueviolet;
    color: white;
    font-size: 12px;
    border-radius: 8px;
    font-family: 'Montserrat', sans-serif;
    outline: 0.5 px solid black;
    margin-left: 5px;
  }
  button:hover {
    cursor: pointer;
  }
`;

export const StyledLinkInput = styled.input`
  width: 200px;
  height: inherit;
  border-radius: 5px;
  margin-left: 15px;
  border: 1px solid rgba(28, 110, 164, 0.39);
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  @media screen and (min-width: 1280px) {
    width: 200px;
  }
`;
