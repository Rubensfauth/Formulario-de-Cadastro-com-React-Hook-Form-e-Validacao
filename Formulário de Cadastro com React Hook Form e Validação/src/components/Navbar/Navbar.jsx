import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const { theme } = useTheme();

  return (
    <nav className={`${styles.navbar} ${styles[theme]}`}>
      <div className={styles.container}>
        <div className={styles.navContent}>
          <div className={styles.logo}>
            <Link to="/" className={styles.logoLink}>
              🚀 MeuSite
            </Link>
          </div>

          <div className={styles.navLinks}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
              }
              end
            >
              🏠 Home
            </NavLink>
            <NavLink
              to="/sobre"
              className={({ isActive }) =>
                isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
              }
            >
              👥 Sobre
            </NavLink>
            <NavLink
              to="/contato"
              className={({ isActive }) =>
                isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
              }
            >
              📧 Contato
            </NavLink>
            {/* Novo NavLink para a página de cadastro */}
            <NavLink
              to="/cadastro"
              className={({ isActive }) =>
                isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
              }
            >
              📝 Cadastro
            </NavLink>

            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
