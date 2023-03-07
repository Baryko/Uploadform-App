/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

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
`;
