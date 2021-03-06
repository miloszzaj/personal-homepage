import styled from 'styled-components';
import { device } from '../../../../assets/breakpoints';

export const TileContainer = styled.div`
  width: 592px;
  height: 322px;
  box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03);
  border: 6px solid rgba(209, 213, 218, 0.3);
  border-radius: 8px;
  background-color: ${({ theme }) => theme.background.secondary};
  font-weight: 400;
  font-size: 18px;
  line-height: 140%;
  @media ${device.tabletL} {
    width: 90%;
    margin: 0 16px;
  }
  @media ${device.mobile} {
    font-size: 14px;
    height: 230px;
    line-height: 110%;
  }
`;

export const Title = styled.h1`
  margin: 56px auto 24px 56px;
  color: ${({ theme }) => theme.text.quaternary};
  @media ${device.mobile} {
    font-size: 16px;
    margin: 24px auto 16px 24px;
  }
`;
export const Content = styled.div`
  margin: auto 56px;
  text-align: justify;
  @media ${device.mobile} {
    margin: 0 24px 16px;
  }
`;

export const Demo = styled.div`
  margin: 10px 56px;
  @media ${device.mobile} {
    margin: 0 24px 16px;
  }
`;

export const Code = styled.div`
  margin: 10px 56px;
  @media ${device.mobile} {
    margin: 0 24px 16px;
  }
`;

export const Link = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.text.quaternary};
  font-weight: 600;
  margin-left: 30px;
  @media ${device.mobile} {
    margin-left: 5px;
  }
`;

export const Button = styled.button`
  float: right;
  height: 30px;
  padding: 0 16px;
  color: ${({ theme }) => theme.text.tertiary};
  background-color: ${({ theme }) => theme.button.background};
  border: 1px solid rgba(209, 213, 218, 0.3);
  border-radius: 4px;
  transition: 0.3s linear;
  &:hover {
    background-color: ${({ theme }) => theme.button.backgroundHover};
  }
  @media ${device.mobile} {
    height: fit-content;
    font-size: 14px;
    padding: 0 10px;
  }
`;
