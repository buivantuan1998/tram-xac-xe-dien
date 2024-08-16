import React, { FC } from "react";
import { Box, Header, Page, Text } from "zmp-ui";
import { Divider } from "components/divider";

const PostpaidInvoice: FC = () => {
  return (
    <Box className="bg-background px-[15px]">
        <div>
            <h1 className="text-[#fff]">This is page Postpaid Invoice</h1>
        </div>
    </Box>
  );
};

const PostpaidInvoicePage: FC = () => {
  return (
    <Page>
      <Header title="Gói trả trước" showBackIcon={false} />
      <Divider />
      <PostpaidInvoice />
    </Page>
  );
};

export default PostpaidInvoicePage;
