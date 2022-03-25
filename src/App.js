import { ThemeProvider } from 'styled-components';
import { useThemeToggler } from './useTogglerTheme';
import { GlobalStyle } from './GlobalStyle';

import { lightTheme, darkTheme } from './themes';

import Main from './Components/Main';

function App() {
  const { theme } = useThemeToggler();
  console.log('App', theme);

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Main />
    </ThemeProvider>
  );
}

export default App;
