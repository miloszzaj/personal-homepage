import styled from 'styled-components';

export const TileContainer = styled.div`
  width: 592px;
  height: 322px;
  box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03);
  border: 6px solid rgba(209, 213, 218, 0.3);
  border-radius: 4px;
  background-color: ${({ theme }) => theme.background.secondary};
`;
