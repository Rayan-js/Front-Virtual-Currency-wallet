import React from 'react';
import QRCode from 'qrcode.react';

const QRCodePage = () => {
  const appDownloadUrl = 'http://<IP_WEB_SERVER>/download'; // Substituir pelo IP do servidor web

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Indique e Ganhe!</h1>
      <p>Escaneie o QR Code abaixo para baixar nosso aplicativo:</p>
      <QRCode value={appDownloadUrl} size={200} />
    </div>
  );
};

export default QRCodePage;
