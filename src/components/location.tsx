import React from "react";
import { FC } from "react";
import { Box, Text } from "zmp-ui";
import qr from "static/qr.png";
import history from "static/file.png";
import ChargingStation from "static/charging-station.png";

export const Location: FC = () => {
    return (
        <Box>
          <div className="ml-[16px]">
              <div className="text-gray text-[16px] text-[600]">Địa điểm</div>
          </div>
          <div className="bg-white grid grid-cols-2 gap-4 p-4">
              <div className="bg-[#f5f5f5] grid justify-center py-[25px] rounded-xl">
                  <img className="w-12 h-12" src={ChargingStation} />
                  <Text size="xxSmall" className="text-gray font-bold mt-[5px]">
                      Trạm xạc
                  </Text>
              </div>
          </div>
        </Box>
    );
};

// className="bg-[#1d53c3] m-[auto] p-[30px] max-h-[124px]"