import styled from 'styled-components';
import { device } from '../../../../assets/breakpoints';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 100vw;
  padding-left: 66px;
  @media ${device.tabletL} {
    /* margin-left: 10px; */
    padding-left: 0;

    margin: 0;
    height: fit-content;
    /* align-items: center; */
    /* align-self: center; */
    /* justify-self: center; */
    /* margin-left: auto;
    margin-right: auto; */
  }
  @media ${device.mobile} {
    align-items: flex-start;
    margin-left: 13.3px;
  }
`;
