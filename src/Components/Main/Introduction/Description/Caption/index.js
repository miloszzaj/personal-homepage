import styled from 'styled-components';

export const Caption = styled.div`
  width: 633px;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 140%;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.text.secondary};
`;

export default Caption;
