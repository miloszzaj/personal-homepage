import styled from 'styled-components';
import { device } from '../../../../../assets/breakpoints';

export const Title = styled.h1`
  /* width: 415px; */
  height: 46px;
  font-style: normal;
  font-weight: 900;
  font-size: 38px;
  line-height: 46px;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.text.primary};
  @media ${device.tabletL} {
    /* margin: 10px 40px; */
    font-size: 22px;
  }
  @media ${device.mobile} {
    margin: 8px 0;
  }
`;

export default Title;
