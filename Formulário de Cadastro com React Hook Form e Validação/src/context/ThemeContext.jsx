import React, { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    // Verificar se há tema salvo no localStorage
    const savedTheme = localStorage.getItem("theme");
    return savedTheme || "dark";
  });

  // Salvar tema no localStorage sempre que mudar
  useEffect(() => {
    localStorage.setItem("theme", theme);

    // Aplicar classe no body para CSS global
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const value = {
    theme,
    toggleTheme,
    isLight: theme === "light",
    isDark: theme === "dark",
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
