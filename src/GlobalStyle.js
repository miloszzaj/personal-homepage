import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
  font-family: 'Inter', sans-serif;
  background-color: ${({ theme }) => theme.color.mercury};
}

*,
::after,
::before {
  box-sizing: inherit
}
`;
