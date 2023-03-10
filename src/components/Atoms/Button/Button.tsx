import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const Button = styled.button`
  appearance: none;
  min-width: 90px;
  height: 40px;
  background-color: blueviolet;
  color: white;
  font-size: 18px;
  border-radius: 8px;
  font-family: 'Montserrat', sans-serif;
  position: absolute;
  outline: 0.5 px solid black;
  &:disabled {
    background-color: grey;
  }
  &:hover {
    cursor: pointer;
    box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.3);
  }
`;
