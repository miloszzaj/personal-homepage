import { ThemeProvider } from 'styled-components';
import Main from './Components/Main';

import { GlobalStyle } from './GlobalStyle';
import { lightTheme, darkTheme } from './themes';
import { useTheme, useUpdateTheme } from './assets/features/ThemeContext';
import { setToLS } from './utils';

function App() {
  setToLS('lightTheme', lightTheme.default);
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
