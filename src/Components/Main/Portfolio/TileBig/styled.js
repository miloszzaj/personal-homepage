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
  padding: 40px 120px;
`;

export const Title = styled.h1`
  /* margin: 56px; */
  text-align: center;
  color: ${({ theme }) => theme.text.quaternary};
`;
export const Content = styled.div`
  margin-top: 35px;
  text-align: justify;
`;

export const Demo = styled.div`
  margin-top: 35px;
  text-align: center;
  font-size: 1.5rem;
`;

export const Code = styled.div`
  margin-top: 35px;
  text-align: center;
  font-size: 1.5rem;
`;

export const Link = styled.a`
  color: ${({ theme }) => theme.text.quaternary};
  text-decoration: none;
`;

export const Button = styled.button`
  display: block;
  font-weight: 400;
  font-size: 18px;
  line-height: 140%;
  background-color: ${({ theme }) => theme.button.background};
  color: ${({ theme }) => theme.text.tertiary};
  padding: 12px 16px;
  width: 154px;
  height: 49px;
  padding: 12px 16px;
  margin: 50px auto;
  border: 1px solid rgba(209, 213, 218, 0.3);
  border-radius: 4px;
  transition: filter 1s, color 1s;

  &:hover {
    filter: opacity(80%);
    color: ${({ theme }) => theme.color.quinary};
  }
`;
