import React, { FC } from "react";
import { Box, Header, Page, Text } from "zmp-ui";
import { Divider } from "components/divider";

const HistoriesList: FC = () => {
  return (
    <Box className="bg-background px-[15px]">
        <div>
            <h1 className="text-[#fff]">This is page charging history</h1>
        </div>
    </Box>
  );
};

const HistoryPage: FC = () => {
  return (
    <Page>
      <Header title="Lịch sử xạc" showBackIcon={false} />
      <Divider />
      <HistoriesList />
    </Page>
  );
};

export default HistoryPage;
