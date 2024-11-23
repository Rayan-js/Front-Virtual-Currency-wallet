import React, { useState, useEffect } from "react";
import api from "../../api/api.js";
import styles from "./TransactionForm.module.css";

const TransactionForm = ({ setUserId }) => {
  const [formData, setFormData] = useState({
    userId: "",
    valor: "",
    tipo: "CREDIT",
    description: "",
  });

  const [message, setMessage] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await api.get("/users");
        setUsers(response.data);
      } catch (error) {
        console.error("Erro ao buscar usuários:", error);
      }
    };

    fetchUsers();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Atualize o userId no componente pai diretamente
    if (name === "userId") {
      setUserId(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const endpoint =
      formData.tipo === "CREDIT"
        ? `/transactions/${formData.userId}/credit`
        : `/transactions/${formData.userId}/debit`;

    try {
      const response = await api.post(endpoint, {
        valor: Number(formData.valor),
        description: formData.description,
      });
      setMessage(`Transação ${formData.tipo} criada com sucesso!`);
      console.log(response.data);
    } catch (error) {
      console.error(error);
      setMessage(
        "Erro ao criar transação. Verifique os dados e tente novamente."
      );
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Criar Transação</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="userId" className={styles.label}>
            Selecionar Usuário:
          </label>
          <select
            id="userId"
            name="userId"
            value={formData.userId}
            onChange={handleChange}
            required
            className={styles.select}
          >
            <option value="">Selecione um usuário</option>
            {users.map((user) => (
              <option key={user.id} value={user.id}>
                {user.nome} ({user.email})
              </option>
            ))}
          </select>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="valor" className={styles.label}>
            Valor:
          </label>
          <input
            type="number"
            id="valor"
            name="valor"
            value={formData.valor}
            onChange={handleChange}
            step="0.01"
            required
            className={styles.input}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="tipo" className={styles.label}>
            Tipo de Transação:
          </label>
          <select
            id="tipo"
            name="tipo"
            value={formData.tipo}
            onChange={handleChange}
            className={styles.select}
          >
            <option value="CREDIT">Crédito</option>
            <option value="DEBIT">Débito</option>
          </select>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="description" className={styles.label}>
            Descrição (Opcional):
          </label>
          <input
            type="text"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className={styles.input}
          />
        </div>
        <button type="submit" className={styles.button}>
          Criar Transação
        </button>
      </form>
      {message && <p className={styles.message}>{message}</p>}
    </div>
  );
};

export default TransactionForm;
