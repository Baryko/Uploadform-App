import React from 'react';
import { useDispatch } from 'react-redux';
import { setCookie } from '../../../store/store';
import { Button } from '../../Atoms/Button/Button';
import { ButtonWrapper, Container, RejectButton, Wrapper } from './Cookies.styles';
import cookiesIcon from '../../../assets/icons/cookies.png';
import { Props } from './Cookies.types';

// eslint-disable-next-line react/function-component-definition
const Cookies: React.FC<Props> = ({ setIsCookiesModalVisible }) => {
  const dispatch = useDispatch();
  const handleSetCookie = () => {
    dispatch(setCookie({ isAccepted: true }));
  };

  return (
    <Container>
      <Wrapper>
        <img src={cookiesIcon} alt="cookie" />
        <span>
          We use cookies to ensure that we give you the best experience on our website. If you continue to use this site
          we will assume that you are happy with it.
        </span>
        <ButtonWrapper>
          <Button
            onClick={() => {
              setIsCookiesModalVisible(false);
              handleSetCookie();
            }}
          >
            Accept
          </Button>
          <RejectButton
            onClick={() => {
              setIsCookiesModalVisible(false);
            }}
          >
            Reject
          </RejectButton>
        </ButtonWrapper>
      </Wrapper>
    </Container>
  );
};

export default Cookies;
