import { useThemeToggler } from './useTogglerTheme';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './GlobalStyle';

import { lightTheme, darkTheme } from './themes';

import Main from './Components/Main';

function App() {
  const { theme } = useThemeToggler();
  console.log(theme);

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Main />
    </ThemeProvider>
  );
}

export default App;
