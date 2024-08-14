import React from "react";
import { FC } from "react";
import { Box, Text } from "zmp-ui";
import qr from "static/qr-1.png";
import history from "static/history.png";
import ChargingStation from "static/charging-station.png";

export const Utilities: FC = () => {
    return (
        <Box>
          <div className="ml-[16px]">
              <div className="text-gray text-[16px] text-[600]">Tiện ích</div>
          </div>
          <div className="bg-white grid grid-cols-2 gap-4 p-4">
            <div className="bg-[#f5f5f5] grid justify-center pt-[25px] py-[25px] rounded-xl">
                  <img className="w-12 h-12" src={qr} />
                  <Text size="xxSmall" className="text-gray font-bold mt-[5px]">
                      Quét QR
                  </Text>
              </div>
              <div className="bg-[#f5f5f5] grid justify-center py-[25px] rounded-xl">
                  <img className="w-12 h-12" src={history} />
                  <Text size="xxSmall" className="text-gray font-bold mt-[5px]">
                      Lịch sử sạc
                  </Text>
              </div>
          </div>
        </Box>
    );
};