import { ThemeProvider } from 'styled-components';
import Main from './Components/Main';

import { GlobalStyle } from './GlobalStyle';
import { lightTheme, darkTheme } from './themes';
import { DataContextProvider, useTheme } from './assets/features/ThemeContext';

function App() {
  const themeContext = useTheme();
  console.log(themeContext);

  return (
    <DataContextProvider>
      <ThemeProvider theme={themeContext === 'light' ? lightTheme : darkTheme}>
        <GlobalStyle />
        <Main />
      </ThemeProvider>
    </DataContextProvider>
  );
}

export default App;
