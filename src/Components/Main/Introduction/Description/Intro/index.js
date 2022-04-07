import styled from 'styled-components';
import { device } from '../../../../../assets/breakpoints';

export const Intro = styled.div`
  width: 50px;
  height: 16px;
  font-weight: 700;
  font-size: 12px;
  line-height: 130%;
  text-transform: uppercase;
  color: ${({ theme }) => theme.text.secondary};
  @media ${device.tabletL} {
    /* margin: 0 40px; */
  }
  @media ${device.mobile} {
    margin: 0;
  }
`;

export default Intro;
