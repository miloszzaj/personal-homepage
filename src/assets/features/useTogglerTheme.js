import { useState } from 'react';

export const useThemeToggler = () => {
  const [theme, setTheme] = useState('light');
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };
  console.log(theme);
  return { theme, themeToggler };
};