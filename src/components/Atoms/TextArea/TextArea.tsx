import styled from 'styled-components';

const TextArea = styled.textarea`
  padding: 10px 12px;
  border: none;
  min-width: 330px;
  box-sizing: border-box;
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
  font-size: 12px;
  background-color: inherit;
  resize: none;
  border-bottom: 0.5px solid rgb(185, 172, 172);
  background-color: transparent;
  font-family: 'Montserrat', sans-serif;
  &:focus {
    outline: none;
    box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.3);
  }
  @media screen and (min-width: 375px) {
    height: 35px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 10px;
    height: 35px;
  }

  @media screen and (min-width: 1536px) {
    font-size: 11px;
    height: 65px;
  }
  @media screen and (min-width: 1920px) {
    font-size: 12px;
    height: 110px;
  }
`;

export default TextArea;
