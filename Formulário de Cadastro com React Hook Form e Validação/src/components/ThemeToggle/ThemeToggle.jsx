import React from "react";
import { useTheme } from "../../context/ThemeContext";
import styles from "./ThemeToggle.module.css";

const ThemeToggle = () => {
  const { theme, toggleTheme, isLight } = useTheme();

  return (
    <button
      className={`${styles.themeToggle} ${
        isLight ? styles.light : styles.dark
      }`}
      onClick={toggleTheme}
      aria-label={`Alternar para tema ${isLight ? "escuro" : "claro"}`}
    >
      <span className={styles.icon}>{isLight ? "🌙" : "☀️"}</span>
      <span className={styles.text}>{isLight ? "Escuro" : "Claro"}</span>
    </button>
  );
};

export default ThemeToggle;
