import React, { FC } from "react";
import { Box, Header, Page, Text } from "zmp-ui";
import { Divider } from "components/divider";

const PrepaidInvoice: FC = () => {
  return (
    <Box className="bg-background px-[15px]">
        <div>
            <h1 className="text-[#fff]">This is page Prepaid Invoice</h1>
        </div>
    </Box>
  );
};

const PrepaidInvoicePage: FC = () => {
  return (
    <Page>
      <Header title="Gói trả sau" showBackIcon={false} />
      <Divider />
      <PrepaidInvoice />
    </Page>
  );
};

export default PrepaidInvoicePage;
