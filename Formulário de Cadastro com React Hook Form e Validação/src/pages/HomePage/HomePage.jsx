import React from "react";
import { Link } from "react-router-dom";
import styles from "./HomePage.module.css";

// Array de produtos
const products = [
  { id: "1", name: "Notebook Dell G15" },
  { id: "2", name: "Teclado Mecânico HyperX" },
  { id: "3", name: "Mouse Gamer Logitech" },
  { id: "4", name: "Monitor Samsung Ultrawide" },
];

const HomePage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Bem-vindo ao MeuSite!</h1>
      <p className={styles.description}>
        Aqui você encontra os melhores produtos de tecnologia. Clique em um
        produto para ver mais detalhes.
      </p>

      <div className={styles.productListContainer}>
        <h2>Nossos Produtos</h2>
        <ul className={styles.productList}>
          {products.map((product) => (
            <li key={product.id} className={styles.productItem}>
              {/* Link para a página de detalhes do produto */}
              <Link
                to={`/produtos/${product.id}`}
                className={styles.productLink}
              >
                {product.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
