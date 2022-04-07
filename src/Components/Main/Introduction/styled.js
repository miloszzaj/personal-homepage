import styled from 'styled-components';
import { device } from '../../../assets/breakpoints';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  @media ${device.tabletL} {
    flex-direction: column;
    justify-content: center;
    margin-top: 0px;
    max-width: 100vw;
  }
  @media ${device.mobile} {
    align-items: flex-start;
  }
`;

export const Image = styled.img`
  width: 398px;
  height: 398px;
  border-radius: 50%;
  @media ${device.tabletL} {
    width: 300px;
    height: 300px;
    margin: 0 40px;
  }
  @media ${device.mobile} {
    width: 132.67px;
    height: 132.67px;
    margin: 33px auto 13.3px 13.3px;
  }
`;
