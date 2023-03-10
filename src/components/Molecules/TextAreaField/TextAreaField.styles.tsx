import styled from 'styled-components';
import Label from '../../Atoms/Label/Label';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 5px;
  margin-top: 5px;
  ${Label} {
    margin: 10px 0;
  }
`;

export default Wrapper;
