import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const Wrapper = styled.li`
  list-style-type: none;
  margin: 0;
  padding-bottom: 5px;
  width: 330px;
  position: relative;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  @media screen and (min-width: 1280px) {
    font-size: 12px;
  }
  @media screen and (min-width: 1920px) {
    font-size: 15px;
  }
  div {
    position: absolute;
    top: 17px;
    left: 280px;
    display: none;
  }
  span {
    display: block;
    padding-top: 2px;
    font-size: 12px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
      'Helvetica Neue', sans-serif;
    @media screen and (min-width: 1280px) {
      font-size: 11px;
    }
    @media screen and (min-width: 1920px) {
      font-size: 11px;
    }
  }
  &:hover > div {
    display: block;
    width: 40px;
    height: 40px;
  }
`;
