import styled from 'styled-components';

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
`;

export const Title = styled.h1`
  margin: 56px auto 24px 56px;
  color: ${({ theme }) => theme.text.quaternary};
`;
export const Content = styled.div`
  margin: auto 56px;
  text-align: justify;
`;

export const Demo = styled.div`
  margin: 10px 56px;
`;

export const Code = styled.div`
  margin: 10px 56px;
`;

export const Link = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.text.quaternary};
  font-weight: 600;
  margin-left: 30px;
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
`;
