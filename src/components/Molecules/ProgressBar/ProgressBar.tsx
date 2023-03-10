import styled from 'styled-components';
import { Progress } from './ProgressBar.types';

// eslint-disable-next-line import/prefer-default-export
export const ProgressBar = styled.span<Progress>`
  width: 330px;
  height: 11px;
  display: block;
  position: relative;
  padding-bottom: 12px;
  &::after {
    content: '';
    display: block;
    background-color: #4e9c04;
    width: ${({ progressValue }) => progressValue}%;
    height: 11px;
    position: absolute;
    transition: 1s linear;
    border-radius: 35px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    @media screen and (min-width: 1280px) {
      height: 10px;
    }
    @media screen and (min-width: 1920px) {
      height: 11px;
    }
  }
  &::before {
    display: block;
    position: absolute;
    content: '${({ progressValue }) => (progressValue === 100 ? 'file uploaded' : `${progressValue}%`)}';
    font-size: 12px;
    width: 330px;
    height: 11px;
    z-index: 10;
    line-height: 11px;
    text-align: center;
    color: black;
    font-weight: 700;
  }
`;
