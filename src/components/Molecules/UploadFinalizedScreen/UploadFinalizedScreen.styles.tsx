import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const Wrapper = styled.div`
  margin-top: 10px;
  position: relative;
  height: 600px;
  width: inherit;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  border: 0.5px solid rgb(185, 172, 172);
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
  @media screen and (min-width: 1280px) {
    height: 290px;
  }
  @media screen and (min-width: 1920px) {
    height: inherit;
  }
  img {
    width: 35%;
    height: 35%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  span {
    font-size: 12px;
    font-weight: 700;
    padding-bottom: 25px;
  }
  span:hover {
    cursor: pointer;
    font-size: 14px;
    text-shadow: 1px 1px 8px rgba(66, 68, 90, 1);
  }
`;
