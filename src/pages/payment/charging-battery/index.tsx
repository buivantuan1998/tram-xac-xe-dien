import React, { FC } from "react";
import { Box, Header, Page, Tabs,  } from "zmp-ui";
import { Divider } from "components/divider";

import Check from "static/check.png";

const ChargingBattery: FC = () => {
  const borderContent = {
    borderBottom: "1px solid #414752",
  };

  return (
    <Box>
      <div className="text-[#fff]">
        <div>
          <div className="bg-[#414752] py-[5px] px-[15px]">
            Tháng 3, 2024
          </div>

          <div className="bg-[#232933] grid justify-center py-[5px] charging-history-grid-1285" style={borderContent}>
            <div className="grid items-center justify-center">
              <img className="w-5 h-5" src={Check} />
            </div>
            <div className="py-[10px] grid grid-6533">
              <div>
                <div className="pb-[5px]">Hóa đơn sạc pin tháng 1</div>
                <div className="pb-[5px] font-[12px] text-gray">26/03/2024 - 10:15</div>
              </div>
              <div className="text-center">
                <div>8.904 đ</div>
              </div>
            </div>
          </div>
          <div className="bg-[#232933] grid justify-center py-[5px] charging-history-grid-1285" style={borderContent}>
            <div className="grid items-center justify-center">
              <img className="w-5 h-5" src={Check} />
            </div>
            <div className="py-[10px] grid grid-6533">
              <div>
                <div className="pb-[5px]">Hóa đơn sạc pin tháng 1</div>
                <div className="pb-[5px] font-[12px] text-gray">26/03/2024 - 10:15</div>
              </div>
              <div className="text-center">
                <div>8.904 đ</div>
              </div>
            </div>
          </div>
          <div className="bg-[#232933] grid justify-center py-[5px] charging-history-grid-1285" style={borderContent}>
            <div className="grid items-center justify-center">
              <img className="w-5 h-5" src={Check} />
            </div>
            <div className="py-[10px] grid grid-6533">
              <div>
                <div className="pb-[5px]">Hóa đơn sạc pin tháng 1</div>
                <div className="pb-[5px] font-[12px] text-gray">26/03/2024 - 10:15</div>
              </div>
              <div className="text-center">
                <div>8.904 đ</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-[#fff]">
        <div>
          <div className="bg-[#414752] py-[5px] px-[15px]">
            Tháng 2, 2024
          </div>

          <div className="bg-[#232933] grid justify-center py-[5px] charging-history-grid-1285" style={borderContent}>
            <div className="grid items-center justify-center">
              <img className="w-5 h-5" src={Check} />
            </div>
            <div className="py-[10px] grid grid-6533">
              <div>
                <div className="pb-[5px]">Hóa đơn sạc pin tháng 1</div>
                <div className="pb-[5px] font-[12px] text-gray">26/02/2024 - 10:15</div>
              </div>
              <div className="text-center">
                <div>9.904 đ</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-[#fff]">
        <div>
          <div className="bg-[#414752] py-[5px] px-[15px]">
            Tháng 1, 2024
          </div>

          <div className="bg-[#232933] grid justify-center py-[5px] charging-history-grid-1285" style={borderContent}>
            <div className="grid items-center justify-center">
              <img className="w-5 h-5" src={Check} />
            </div>
            <div className="py-[10px] grid grid-6533">
              <div>
                <div className="pb-[5px]">Hóa đơn sạc pin tháng 1</div>
                <div className="pb-[5px] font-[12px] text-gray">15/01/2024 - 10:15</div>
              </div>
              <div className="text-center">
                <div>6.904 đ</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Box>
  );
};

const ChargingBatteryPage: FC = () => {
  return (
    <Page>
      {/* <Header title="Hóa đơn sạc pin" showBackIcon={true} /> */}
      <Divider />
      <ChargingBattery />
    </Page>
  );
};

export default ChargingBatteryPage;