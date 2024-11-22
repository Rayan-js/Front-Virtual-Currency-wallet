import React from "react";
import TransactionForm from "../components/Transactions/TransactionForm";
import TransactionsList from "../components/Transactions/TransactionsList";
import styles from "./Transactions.module.css";

const Transactions = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Gerenciar Transações</h1>
      <div className={styles.section}>
        <h2>Criar Nova Transação</h2>
        <TransactionForm />
      </div>
      <div className={styles.section}>
        <h2>Histórico de Transações</h2>
        <TransactionsList />
      </div>
    </div>
  );
};

export default Transactions;
