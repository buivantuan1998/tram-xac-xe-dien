import React from "react";
import { Box, Page } from "zmp-ui";
import { Welcome } from "./welcome";
import { Banner } from "./banner";
import { Utilities } from "components/utilities";
import { Location } from "components/location";

const HomePage: React.FunctionComponent = () => {
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

export default HomePage;
