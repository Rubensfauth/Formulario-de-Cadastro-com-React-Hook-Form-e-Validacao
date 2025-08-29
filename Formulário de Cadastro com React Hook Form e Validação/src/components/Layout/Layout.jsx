import React from "react";
import Navbar from "../Navbar/Navbar";
import styles from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Navbar />
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <p>&copy; 2024 MeuSite. Todos os direitos reservados.</p>
          <p>Feito com ❤️ usando React Router + Vite</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
