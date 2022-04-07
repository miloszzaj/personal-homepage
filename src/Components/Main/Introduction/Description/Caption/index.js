import styled from 'styled-components';
import { device } from '../../../../../assets/breakpoints';

export const Caption = styled.div`
  max-width: 85vw;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 140%;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.text.secondary};
  @media ${device.tablet} {
    margin: 0 auto;
  }
  @media ${device.mobile} {
    font-size: 17px;
  }
`;

export default Caption;
