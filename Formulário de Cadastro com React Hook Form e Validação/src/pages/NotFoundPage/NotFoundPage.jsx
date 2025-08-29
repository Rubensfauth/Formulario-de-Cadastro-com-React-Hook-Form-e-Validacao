import React from "react";
import { Link } from "react-router-dom";
import styles from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <div className={styles.notFoundPage}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.errorCode}>404</div>
          <h1 className={styles.title}>Página Não Encontrada</h1>
          <p className={styles.message}>
            Oops! A página que você está procurando não existe ou foi movida.
          </p>

          <div className={styles.illustration}>
            <span className={styles.emoji}>🔍</span>
            <span className={styles.emoji}>❌</span>
            <span className={styles.emoji}>🤷‍♂️</span>
          </div>

          <div className={styles.actions}>
            <Link to="/" className={styles.homeButton}>
              🏠 Voltar ao Início
            </Link>
            <button
              className={styles.backButton}
              onClick={() => window.history.back()}
            >
              ⬅️ Voltar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
