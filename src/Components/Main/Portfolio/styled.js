import styled from 'styled-components';
export const Wrapper = styled.div`
  width: 195px;
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
  ${({ theme }) => theme.text.primary};
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
