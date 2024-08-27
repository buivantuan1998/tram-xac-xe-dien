import React, { FC } from "react";
import { Box, Page } from "zmp-ui";
import { Welcome } from "../../pages/index/welcome";
import { Banner } from "../../pages/index/banner";
import { Utilities } from "components/utilities";
import { Location } from "components/location";

const ServicesPage: FC = () => {
  return (
    <Page className="relative flex-1 flex flex-col bg-white">
      <Welcome />
      <Box className="flex-1 overflow-auto">
        <Banner />
        <Location />
        <Utilities />
      </Box>
    </Page>
  );
};

export default ServicesPage;
