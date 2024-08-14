import React, { Suspense } from "react";
import { Box, Page } from "zmp-ui";
import { Inquiry } from "./inquiry";
import { Welcome } from "./welcome";
import { Banner } from "./banner";
import { Categories } from "./categories";
import { Recommend } from "./recommend";
import { ProductList } from "./product-list";
import { Divider } from "components/divider";
import { Utilities } from "components/utilities";
import { Location } from "components/location";

const HomePage: React.FunctionComponent = () => {
  return (
    <Page className="relative flex-1 flex flex-col bg-white">
      <Welcome />
      <Box className="flex-1 overflow-auto">
        <Banner />
        <Utilities />
        <Location />
        {/* <Suspense>
          <Categories />
        </Suspense>
        <Divider />
        <Recommend />
        <Divider />
        <ProductList />
        <Divider /> */}
      </Box>
    </Page>
  );
};

export default HomePage;
