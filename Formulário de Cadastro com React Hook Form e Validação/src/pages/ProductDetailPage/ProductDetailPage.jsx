import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./ProductDetailPage.module.css";

const ProductDetailPage = () => {
  // Use useParams para obter o id da URL
  const { id } = useParams();

  // Use useNavigate para a navegação programática
  const navigate = useNavigate();

  // Função para voltar para a página inicial
  const handleBackClick = () => {
    navigate("/");
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Detalhes do Produto</h1>
      <p className={styles.productId}>ID do Produto: {id}</p>

      {/* Botão que usa a função de navegação */}
      <button className={styles.backButton} onClick={handleBackClick}>
        ← Voltar para a Página Inicial
      </button>
    </div>
  );
};

export default ProductDetailPage;
