import styled from 'styled-components';

const Label = styled.label`
  font-weight: bold;
  font-size: 12px;
  color: black;
  @media (min-width: 1280px) {
    font-size: 11px;
  }
  @media screen and (min-width: 1536px) {
    font-size: 11px;
  }
  @media screen and (min-width: 1920px) {
    font-size: 12px;
  }
`;

export default Label;
