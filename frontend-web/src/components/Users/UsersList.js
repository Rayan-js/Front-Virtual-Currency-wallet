import React, { useEffect, useState } from "react";
import api from "../../api/api";
import styles from "./UsersList.module.css";

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await api.get("/users");
        setUsers(response.data);
      } catch (error) {
        console.error(error);
        setError("Erro ao buscar usuários. Tente novamente mais tarde.");
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Lista de Usuários</h1>
      {error && <p className={styles.error}>{error}</p>}
      {!error && users.length === 0 && (
        <p className={styles.message}>Nenhum usuário encontrado.</p>
      )}
      {users.length > 0 && (
        <table className={styles.table}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Email</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.nome}</td>
                <td>{user.email}</td>
                <td>{user.isActive ? "Ativo" : "Inativo"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default UsersList;
