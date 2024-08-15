import React, { FC } from "react";
import { Box, Header, Page, Text } from "zmp-ui";
import { Divider } from "components/divider";

const ServicesList: FC = () => {
  return (
    <Box className="bg-background px-[15px]">
        <div>
            <h1 className="text-[#fff]">This is page services</h1>
        </div>
    </Box>
  );
};

const ServicesPage: FC = () => {
  return (
    <Page>
      <Header title="Dịch vụ" showBackIcon={false} />
      <Divider />
      <ServicesList />
    </Page>
  );
};

export default ServicesPage;
