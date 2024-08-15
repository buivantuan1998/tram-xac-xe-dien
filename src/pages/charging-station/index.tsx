import React, { FC } from "react";
import { Box, Header, Page, Text } from "zmp-ui";
import { Divider } from "components/divider";

const ChargingStationList: FC = () => {
  return (
    <Box className="bg-background px-[15px]">
        <div>
            <h1 className="text-[#fff]">This is page charging station</h1>
        </div>
    </Box>
  );
};

const ChargingStationPage: FC = () => {
  return (
    <Page>
      <Header title="Trạm xạc" showBackIcon={false} />
      <Divider />
      <ChargingStationList />
    </Page>
  );
};

export default ChargingStationPage;
