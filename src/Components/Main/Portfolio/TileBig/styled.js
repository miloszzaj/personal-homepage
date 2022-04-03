import styled from 'styled-components';

export const TileContainer = styled.div`
  width: 1216px;
  height: 676px;
  box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03);
  border: 6px solid rgba(209, 213, 218, 0.3);
  border-radius: 8px;
  background-color: ${({ theme }) => theme.background.secondary};
  font-weight: 400;
  font-size: 18px;
  line-height: 140%;
`;

export const Title = styled.h1`
  margin: 56px;
  text-align: center;
  color: ${({ theme }) => theme.text.quaternary};
`;
export const Content = styled.div`
  margin: auto 56px;
  text-align: justify;
`;

export const Demo = styled.div`
  margin: auto 56px;
`;

export const Code = styled.div`
  margin: auto 56px;
`;

export const Link = styled.a`
  color: ${({ theme }) => theme.text.quaternary};
`;

export const Button = styled.button`
  font-weight: 400;
  font-size: 18px;
  line-height: 140%;
  background-color: ${({ theme }) => theme.background.secondary};
`;
