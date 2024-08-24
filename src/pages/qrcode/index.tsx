import React, { FC, useState } from "react";
import { Box, Header, Page, Text } from "zmp-ui";
import { Divider } from "components/divider";

import QrScanner from 'react-qr-scanner';

const QrCode: FC = () => {
  const [result, setResult] = useState('Chưa có kết quả');

  const handleScan = (data) => {
    if (data) {
        setResult(data.text);
    }
  };

  const handleError = (err) => {
    console.error(err);
    setResult('Không thể quét mã QR');
  };

  const previewStyle = {
    height: 240,
    width: 320,
  };


    const container = {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      backgroundColor: '#f7f7f7',
    };


  return (
    <Box className="bg-background px-[15px]">
        <div style={container}>
            <QrScanner
                delay={300}
                style={previewStyle}
                onError={handleError}
                onScan={handleScan}
            />
            <p>{result}</p>
        </div>
    </Box>
  );
};

const QrCodePage: FC = () => {
  return (
    <Page>
      <Header title="Quét Qr" showBackIcon={true} />
      <Divider />
      <QrCode />
    </Page>
  );
};

export default QrCodePage;
