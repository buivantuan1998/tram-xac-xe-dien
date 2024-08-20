import React, { FC } from "react";
import { Box, Header, Page, Text } from "zmp-ui";
import { Divider } from "components/divider";

const QrCode: FC = () => {
  return (
    <Box className="bg-background px-[15px]">
        <div>
            <h1 className="text-[#fff]">This is page QrCode</h1>
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
