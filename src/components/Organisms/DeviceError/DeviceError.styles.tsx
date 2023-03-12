import styled from 'styled-components';

import error from '../../../assets/images/error.jpg';

// eslint-disable-next-line import/prefer-default-export
export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  z-index: 10;
  font-size: 120px;
  display: none;
  background-image: url(${error});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  @media screen and (max-width: 1279px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const ErrorContainer = styled.div`
  width: 25%;
  height: 25%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  background-color: rgba(243, 241, 241, 0.678);
  @media screen and (min-width: 360px) {
    width: 80%;
    height: 23%;
  }
  @media screen and (min-width: 360px) and (orientation: landscape) {
    width: 60%;
    height: 50%;
  }
  @media screen and (min-width: 1280px) {
    width: 25%;
    height: 25%;
  }
  img {
    width: 15%;
    height: 35%;
  }
  span {
    padding-top: 3%;
    font-size: 12%;
    font-size: 26px;
    font-family: Arial, Helvetica, sans-serif;
  }
  span:nth-child(3) {
    font-size: 16px;
  }
`;
