import React from "react";
import { useForm } from "react-hook-form";
import styles from "./RegistrationForm.module.css";

const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const password = watch("password", "");

  const onSubmit = (data) => {
    console.log("Dados do formulário:", data);
    alert("Formulário enviado com sucesso! Verifique o console.");
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Cadastro de Usuário</h1>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        {/* Campo Nome */}
        <div className={styles.formGroup}>
          <label htmlFor="name" className={styles.label}>
            Nome:
          </label>
          <input
            id="name"
            type="text"
            className={styles.input}
            {...register("name", {
              required: "O nome é obrigatório",
              minLength: {
                value: 3,
                message: "O nome deve ter no mínimo 3 caracteres",
              },
            })}
          />
          {errors.name && (
            <span className={styles.error}>{errors.name.message}</span>
          )}
        </div>

        {/* Campo Email */}
        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.label}>
            E-mail:
          </label>
          <input
            id="email"
            type="email"
            className={styles.input}
            {...register("email", {
              required: "O e-mail é obrigatório",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "E-mail inválido",
              },
            })}
          />
          {errors.email && (
            <span className={styles.error}>{errors.email.message}</span>
          )}
        </div>

        {/* Campo Senha */}
        <div className={styles.formGroup}>
          <label htmlFor="password" className={styles.label}>
            Senha:
          </label>
          <input
            id="password"
            type="password"
            className={styles.input}
            {...register("password", {
              required: "A senha é obrigatória",
              minLength: {
                value: 6,
                message: "A senha deve ter no mínimo 6 caracteres",
              },
            })}
          />
          {errors.password && (
            <span className={styles.error}>{errors.password.message}</span>
          )}
        </div>

        {/* Campo Confirmação de Senha */}
        <div className={styles.formGroup}>
          <label htmlFor="confirmPassword" className={styles.label}>
            Confirme a Senha:
          </label>
          <input
            id="confirmPassword"
            type="password"
            className={styles.input}
            {...register("confirmPassword", {
              required: "A confirmação da senha é obrigatória",
              validate: (value) =>
                value === password || "As senhas não conferem",
            })}
          />
          {errors.confirmPassword && (
            <span className={styles.error}>
              {errors.confirmPassword.message}
            </span>
          )}
        </div>

        <button type="submit" className={styles.submitButton}>
          Cadastrar
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
