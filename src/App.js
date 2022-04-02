import { ThemeProvider } from 'styled-components';
import Main from './Components/Main';

import { GlobalStyle } from './GlobalStyle';
import { lightTheme, darkTheme } from './themes';
import { useTheme, useUpdateTheme } from './assets/features/ThemeContext';

function App() {
  const themeContext = useTheme();
  const themeToggler = useUpdateTheme();

  console.log(themeContext);
  console.log(themeToggler);

  return (
    <ThemeProvider theme={themeContext === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Main />
    </ThemeProvider>
  );
}

export default App;
