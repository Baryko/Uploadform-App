import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const Wrapper = styled.div`
  font-size: 12px;
  display: flex;
  width: 330px;
  color: black;
  font-weight: bold;
  justify-content: space-between;
  @media screen and (min-width: 1280px) {
    font-size: 11px;
  }
  @media screen and (min-width: 1920px) {
    font-size: 12px;
  }
  span {
    display: block;
    padding-bottom: 3px;
  }
`;
