import React, { FC } from "react";
import { Box, Header, Page, Text } from "zmp-ui";
import { Divider } from "components/divider";

const ChargingBattery: FC = () => {
  return (
    <Box className="bg-background px-[15px]">
        <div>
            <h1 className="text-[#fff]">This is page QrCode</h1>
        </div>
    </Box>
  );
};

const ChargingBatteryPage: FC = () => {
  return (
    <Page>
      <Header title="Sạc pin" showBackIcon={false} />
      <Divider />
      <ChargingBattery />
    </Page>
  );
};

export default ChargingBatteryPage;
