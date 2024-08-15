import React, { FC } from "react";
import { Box, Header, Page, Text } from "zmp-ui";
import { Divider } from "components/divider";

const PaymentList: FC = () => {
  return (
    <Box className="bg-background px-[15px]">
        <div>
            <h1 className="text-[#fff]">This is page payment</h1>
        </div>
    </Box>
  );
};

const PaymentPage: FC = () => {
  return (
    <Page>
      <Header title="Thanh toán" showBackIcon={false} />
      <Divider />
      <PaymentList />
    </Page>
  );
};

export default PaymentPage;
