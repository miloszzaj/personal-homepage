import { useThemeToggler } from './useTogglerTheme';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './GlobalStyle';
// import { useState } from 'react';

import { lightTheme, darkTheme } from './themes';

import Main from './Components/Main';

function App() {
  const { theme, themeToggler } = useThemeToggler();

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Main /> <button onClick={() => themeToggler()}>zmień</button>
    </ThemeProvider>
  );
}

export default App;
