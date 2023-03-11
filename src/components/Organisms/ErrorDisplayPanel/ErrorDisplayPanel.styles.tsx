import styled from 'styled-components';
import { Button } from '../../Atoms/Button/Button';

// eslint-disable-next-line import/prefer-default-export
export const Wrapper = styled.div`
  width: 450px;
  border-radius: 25px;
  min-height: 250px;
  grid-row: 5 /5;
  grid-column: 5/ 5;
  background-color: rgba(243, 241, 241, 0.9);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: relative;
  align-items: center;
  padding-top: 5px;
  text-align: center;
  @media screen and (min-width: 1280px) {
    width: 400px;
  }
  @media screen and (min-width: 1920px) {
    width: 550px;
  }
  ${Button} {
    position: absolute;
    top: 85%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  img {
    width: 100px;
    height: 100px;
    align-self: center;
    transform-origin: 50% 0%;
    animation: image-rotate 1s ease-in;
  }
  span {
    display: block;
    font-size: 14px;
    width: 100%;
    height: auto;
    margin-bottom: 1px;
    color: red;
    box-sizing: border-box;
  }
  p {
    display: block;
    color: black;
    align-self: center;
    margin: 0;
    font-size: 22px;
    margin-bottom: 10px;
    margin-top: 5px;
    font-weight: 500;
  }
  @keyframes image-rotate {
    0% {
      transform: rotate(8deg);
    }
    55% {
      transform: rotate(0deg);
    }
    70% {
      transform: rotate(-2deg);
    }
    100% {
      transform: rotate(0);
    }
  }
`;
