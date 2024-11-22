import React from "react";
import { QRCodeCanvas } from "qrcode.react";
import styles from "./QRCodePage.module.css";

const QRCodePage = () => {
  const appDownloadUrl = "http://18.228.222.137/download"; // Substitua pelo URL do seu aplicativo

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Indique e Ganhe!</h1>
      <p className={styles.description}>
        Escaneie o QR Code abaixo para baixar nosso aplicativo:
      </p>
      <div className={styles.qrWrapper}>
        <QRCodeCanvas value={appDownloadUrl} size={200} />
      </div>
      <p className={styles.instruction}>
        Aponte a câmera do seu celular para o QR Code e aproveite!
      </p>
    </div>
  );
};

export default QRCodePage;
