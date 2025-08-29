import React, { useState } from "react";
import styles from "./ContactPage.module.css";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simular envio do formulário
    console.log("Dados do formulário:", formData);
    setIsSubmitted(true);

    // Reset após 3 segundos
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 3000);
  };

  return (
    <div className={styles.contactPage}>
      <div className={styles.container}>
        <h1 className={styles.title}>Entre em Contato 📧</h1>

        <div className={styles.content}>
          <div className={styles.info}>
            <h2 className={styles.sectionTitle}>Fale Conosco</h2>
            <p className={styles.text}>
              Estamos sempre prontos para ouvir você! Entre em contato conosco
              através do formulário ao lado ou pelos nossos canais de
              comunicação.
            </p>

            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>📍</span>
                <span>Itajaí, Santa Catarina, BR</span>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>📞</span>
                <span>(47) 99999-9999</span>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>✉️</span>
                <span>contato@meusite.com</span>
              </div>
            </div>
          </div>

          <div className={styles.formSection}>
            {!isSubmitted ? (
              <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                  <label htmlFor="name" className={styles.label}>
                    Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={styles.input}
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email" className={styles.label}>
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={styles.input}
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message" className={styles.label}>
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className={styles.textarea}
                    rows="5"
                    required
                  ></textarea>
                </div>

                <button type="submit" className={styles.submitBtn}>
                  Enviar Mensagem 🚀
                </button>
              </form>
            ) : (
              <div className={styles.successMessage}>
                <span className={styles.successIcon}>✅</span>
                <h3>Mensagem Enviada!</h3>
                <p>Obrigado pelo contato. Retornaremos em breve!</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
