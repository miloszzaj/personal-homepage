import styled from 'styled-components';
import { device } from '../../../../../assets/breakpoints';

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  /* padding: 12px 16px; */
  width: 154px;
  height: 49px;
  margin-top: 20px;
  border: 1px solid rgba(209, 213, 218, 0.3);
  border-radius: 4px;
  background-color: ${({ theme }) => theme.button.background};
  transition: 0.3s linear;
  &:hover {
    background-color: ${({ theme }) => theme.button.backgroundHover};
  }
`;
export const Content = styled.a`
  text-decoration: none;
  padding: 12px 16px;
  width: 260px;
  display: flex;
  flex-direction: row;
  /* justify-content: center; */
  /* align-items: center; */
`;

export const Text = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.05em;
  position: static;
  width: 82px;
  height: 25px;
  font-style: normal;
  font-weight: 600;
  font-size: 20.0584px;
  line-height: 24px;
  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 0px 16px;
  color: ${({ theme }) => theme.text.tertiary};
`;
