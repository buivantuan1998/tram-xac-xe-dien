import React, { FC } from "react";
import { Box, Header, Page, Tabs,  } from "zmp-ui";
import { Divider } from "components/divider";

const ChargingBattery: FC = () => {
  return (
    <Page className="section-container">
      <Tabs id="contact-list">
        <Tabs.Tab key="tab1" label="Tab 1">
          <Box>
            <div>
              <h1 className="text-[#fff]">This is page QrCode</h1>
            </div>
          </Box>
        </Tabs.Tab>
        <Tabs.Tab key="tab2" label="Tab 2">
          Tab 2 content
        </Tabs.Tab>
        <Tabs.Tab key="tab3" label="Tab 3">
          Tab 3 content
        </Tabs.Tab>
      </Tabs>
    </Page>
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
