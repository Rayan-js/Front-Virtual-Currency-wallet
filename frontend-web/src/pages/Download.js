import React from "react";
import styles from "./Download.module.css";

const Download = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Baixe Nosso Aplicativo</h1>
      <p className={styles.description}>
        Aproveite todos os recursos do nosso aplicativo direto no seu celular!
      </p>
      <div className={styles.buttonContainer}>
        <a
          href="https://play.google.com/store/apps" // Substitua pelo link real do Google Play
          target="_blank"
          rel="noopener noreferrer"
          className={styles.button}
        >
          Baixar para Android
        </a>
        <a
          href="https://apps.apple.com" // Substitua pelo link real da App Store
          target="_blank"
          rel="noopener noreferrer"
          className={styles.button}
        >
          Baixar para iOS
        </a>
      </div>
      <p className={styles.qrInstruction}>
        Ou escaneie o QR Code para baixar diretamente:
      </p>
      <div className={styles.qrWrapper}>
        {/* Componente QR Code reutilizável */}
        <img
          src="/qrcode.png"
          alt="QR Code para download do app"
          className={styles.qrCode}
        />
      </div>
    </div>
  );
};

export default Download;
