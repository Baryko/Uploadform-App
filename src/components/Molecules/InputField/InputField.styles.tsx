import styled from 'styled-components';
import Label from '../../Atoms/Label/Label';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 1px;
  margin-top: 5px;
  position: relative;
  ${Label} {
    margin: 10px 0;
  }
`;

export default Wrapper;
