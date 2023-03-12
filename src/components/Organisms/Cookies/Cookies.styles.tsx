import styled from 'styled-components';
import { Button } from '../../Atoms/Button/Button';

// eslint-disable-next-line import/prefer-default-export
export const Wrapper = styled.div`
  width: 35%;
  background-color: #e6d3d3;
  height: 30%;
  z-index: 7;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0.5px solid black;
  border-radius: 25px;
  color: black;
  position: relative;
  flex-direction: column;
  @media screen and (min-width: 1280px) {
    width: 45%;
    height: 50%;
  }

  @media screen and (min-width: 1536px) {
    width: 41%;
    height: 40%;
  }
  @media screen and (min-width: 1920px) {
    height: 30%;
    width: 35%;
  }
  img {
    width: 8%;
    height: 20%;
    align-self: center;
    margin-bottom: 2%;
    @media screen and (min-width: 1280px) {
      width: 11%;
    }
    @media screen and (min-width: 1920px) {
      width: 8%;
    }
  }
  span {
    display: block;
    width: 69%;
    height: 35%;
    font-size: 18px;
    text-align: justify;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  width: 30%;
  justify-content: space-evenly;
  @media screen and (min-width: 1280px) {
    width: 40%;
  }
  @media screen and (min-width: 1920px) {
    width: 30%;
  }
  ${Button} {
    z-index: 10;
    position: static;
    transform: translate(0, 0);
  }
`;

export const RejectButton = styled.button`
  appearance: none;
  min-width: 90px;
  height: 40px;
  background-color: blueviolet;
  color: white;
  font-size: 18px;
  border-radius: 8px;
  font-family: 'Montserrat', sans-serif;
  outline: 0.5 px solid black;
  &:disabled {
    background-color: grey;
  }
  &:hover {
    cursor: pointer;
    box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.3);
  }
`;

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(4px);
  display: flex;
  justify-content: center;
  align-items: center;
`;
