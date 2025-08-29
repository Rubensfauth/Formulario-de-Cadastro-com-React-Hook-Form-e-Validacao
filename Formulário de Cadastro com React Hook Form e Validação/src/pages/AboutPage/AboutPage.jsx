import React from "react";
import styles from "./AboutPage.module.css";

const AboutPage = () => {
  return (
    <div className={styles.aboutPage}>
      <div className={styles.container}>
        <h1 className={styles.title}>Sobre Nós 👥</h1>

        <div className={styles.content}>
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Nossa História</h2>
            <p className={styles.text}>
              Somos uma empresa dedicada a criar soluções web modernas e
              inovadoras. Com uma equipe apaixonada por tecnologia,
              desenvolvemos aplicações que fazem a diferença na vida das
              pessoas.
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Nossa Missão</h2>
            <p className={styles.text}>
              Democratizar o acesso à tecnologia através de soluções simples,
              elegantes e eficientes. Acreditamos que a tecnologia deve ser
              acessível a todos.
            </p>
          </div>

          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.statNumber}>5+</span>
              <span className={styles.statLabel}>Anos de Experiência</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>100+</span>
              <span className={styles.statLabel}>Projetos Entregues</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>50+</span>
              <span className={styles.statLabel}>Clientes Satisfeitos</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
