import styled from 'styled-components';
export const Wrapper = styled.div`
  margin: auto;
`;
export const Heading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Image = styled.img`
  height: 39px;
  width: 40px;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.text.primary};
  width: 143px;
  height: 36px;
  margin: 13px 0 8px 0;
  font-style: normal;
  font-weight: 900;
  font-size: 30px;
  line-height: 36px;
  text-align: center;
  letter-spacing: 0.05em;
`;

export const Caption = styled.div`
  margin: 0;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 140%;
  letter-spacing: 0.05em;
`;

export const Tiles = styled.div`
  margin-top: 24px;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const Tile = styled.div`
  width: 592px;
  height: 322px;
  box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03);
  border: 6px solid rgba(209, 213, 218, 0.3);
  border-radius: 4px;
  background-color: ${({ theme }) => theme.background.secondary};
`;
