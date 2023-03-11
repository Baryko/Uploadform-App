import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 1200px;
  height: 680px;
  border-radius: 15px;
  box-shadow: 0px -5px 25px -10px rgba(0, 0, 0, 0.3);
  opacity: 1;
  display: flex;
  justify-content: center;
  z-index: 5;
  background-color: black;
  @media screen and (min-width: 1280px) {
    width: 1200px;
    height: 600px;
  }
  @media screen and (min-width: 1920px) {
    width: 1200px;
    height: 680px;
  }
  button {
    position: absolute;
    background-color: #fcfcfc;
    color: #000000;
    border-radius: 25px;
    width: 40px;
    height: 40px;
    border: none;
    cursor: pointer;
    top: 90%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const StyledImage = styled.img`
  width: 100%;
  height: 100%;
`;
