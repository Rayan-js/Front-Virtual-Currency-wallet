import React from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Bem-vindo ao Virtual Currency Wallet</h1>
      <p className={styles.description}>
        Gerencie suas transações, visualize seu saldo e aproveite benefícios
        exclusivos com nosso aplicativo!
      </p>
      <div className={styles.buttonContainer}>
        <Link to="/download" className={styles.button}>
          Baixe o Aplicativo
        </Link>
        <Link to="/referral" className={styles.button}>
          Indique e Ganhe
        </Link>
      </div>
    </div>
  );
};

export default Home;
