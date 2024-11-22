import React from "react";
import UsersList from "../components/Users/UsersList";
import UserForm from "../components/Users/UserForm";
import styles from "./Users.module.css";

const Users = () => (
  <div className={styles.container}>
    <h1 className={styles.title}>Gerenciar Usuários</h1>
    <div className={styles.section}>
      <h2 className={styles.subtitle}>Criar Novo Usuário</h2>
      <UserForm />
    </div>
    <div className={styles.section}>
      <h2 className={styles.subtitle}>Lista de Usuários</h2>
      <UsersList />
    </div>
  </div>
);

export default Users;
