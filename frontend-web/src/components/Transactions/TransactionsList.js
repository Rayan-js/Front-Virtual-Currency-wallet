import React, { useEffect, useState } from "react";
import api from "../../api/api.js";
import styles from "./TransactionsList.module.css";

const TransactionsList = ({ userId }) => {
  const [transactions, setTransactions] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await api.get(`/transactions/${userId}`);
        setTransactions(response.data);
      } catch (err) {
        console.error(err);
        setError("Erro ao buscar transações. Tente novamente mais tarde.");
      }
    };

    fetchTransactions();
  }, [userId]);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Transações do Usuário</h2>
      {error && <p className={styles.error}>{error}</p>}
      {!error && transactions.length === 0 && (
        <p className={styles.message}>Nenhuma transação encontrada.</p>
      )}
      {transactions.length > 0 && (
        <table className={styles.table}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Tipo</th>
              <th>Valor</th>
              <th>Descrição</th>
              <th>Data</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td>{transaction.id}</td>
                <td>{transaction.tipo}</td>
                <td>R$ {parseFloat(transaction.valor).toFixed(2)}</td>
                <td>{transaction.description || "Sem descrição"}</td>
                <td>{new Date(transaction.createdAt).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TransactionsList;
