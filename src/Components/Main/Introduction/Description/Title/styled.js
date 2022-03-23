import styled from 'styled-components';

export const Content = styled.h1`
  /* width: 415px; */
  height: 46px;
  font-style: normal;
  font-weight: 900;
  font-size: 38px;
  line-height: 46px;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.text.primary};
`;
