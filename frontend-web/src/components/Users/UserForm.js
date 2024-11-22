import React, { useState } from "react";
import api from "../../api/api";
import styles from "./UserForm.module.css";

const UserForm = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/users", formData);
      setMessage("Usuário criado com sucesso!");
      console.log(response.data);
    } catch (error) {
      console.error(error);
      setMessage("Erro ao criar o usuário. Tente novamente.");
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Criar Usuário</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="nome" className={styles.label}>
            Nome
          </label>
          <input
            type="text"
            id="nome"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            placeholder="Digite seu nome"
            required
            className={styles.input}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.label}>
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Digite seu email"
            required
            className={styles.input}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password" className={styles.label}>
            Senha
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Digite sua senha"
            required
            className={styles.input}
          />
        </div>
        <button type="submit" className={styles.button}>
          Criar Usuário
        </button>
      </form>
      {message && <p className={styles.message}>{message}</p>}
    </div>
  );
};

export default UserForm;
