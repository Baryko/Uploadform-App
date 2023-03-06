/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import backgroundImage from '../../assets/images/background.jpg';

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  grid-template-columns: repeat(12, minmax(150px, 1fr));
  grid-template-rows: repeat(12, minmax(50px, 1fr));
  overflow: hidden;
`;
