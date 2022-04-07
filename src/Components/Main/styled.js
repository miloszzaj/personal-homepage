import styled from 'styled-components';
import { device } from '../../assets/breakpoints';

export const Wrapper = styled.div`
  max-width: 1216px;
  margin: 115px auto;
  @media ${device.tablet} {
    margin: 40px auto;
  }
  @media ${device.mobile} {
    margin: 31px auto;
  }
`;
