import styled from 'styled-components';
import { device } from '../../../assets/breakpoints';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  @media ${device.tablet} {
    flex-direction: column;
    margin-top: 0px;
    max-width: 80vw;
  }
`;

export const Image = styled.img`
  width: 398px;
  height: 398px;
  border-radius: 50%;
  order: 2;
`;
