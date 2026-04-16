import { createContext, useState, useContext } from 'react';

// 1. Create the Context
const ThemeContext = createContext();

// 2. Create a Provider Component
export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Unique Vintage Palette: Cartographer & Antique Copper
  const lightTheme = {
    bg: '#F3EFE7',
    cardBg: '#FCFAF5',
    accent: '#296157',
    metallic: '#A37C40',
    textMain: '#2C302E',
    textMuted: '#68706A',
    border: '#D0C9B8',
    shadow: '0 10px 25px rgba(41, 97, 87, 0.08)'
  };

  const darkTheme = {
    bg: '#0F1517',
    cardBg: '#172023',
    accent: '#D47A43',
    metallic: '#B6925B',
    textMain: '#E3E6E3',
    textMuted: '#849396',
    border: '#28363A',
    shadow: '0 12px 30px rgba(0, 0, 0, 0.6)'
  };

  const theme = isDarkMode ? darkTheme : lightTheme;

  const toggleTheme = () => setIsDarkMode((prev) => !prev);

  // 3. Provide the state and themes to the rest of the app
  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// 4. Create a custom hook for easy access
export const useTheme = () => useContext(ThemeContext);