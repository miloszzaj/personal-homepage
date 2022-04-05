import React, { useContext, useState } from 'react';
import { createContext } from 'react';

const ThemeContext = createContext();
const ThemeUpdateContext = createContext();

export function useTheme() {
  return useContext(ThemeContext);
}

export function useUpdateTheme() {
  return useContext(ThemeUpdateContext);
}

export const ThemeContextProvider = ({ children }) => {
  const [themeContext, setTheme] = useState('light');
  const themeToggler = () => {
    setTimeout(() => {
      themeContext === 'light' ? setTheme('dark') : setTheme('light');
    }, 200);
  };

  console.log(themeContext);
  return (
    <ThemeContext.Provider value={themeContext}>
      <ThemeUpdateContext.Provider value={themeToggler}>{children}</ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
};
