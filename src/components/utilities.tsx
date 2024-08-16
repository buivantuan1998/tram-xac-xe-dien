import React from "react";
import { FC } from "react";
import { Box, Text } from "zmp-ui";
import qr from "static/qr-code.png";
import history from "static/history-1.png";

import { useNavigate } from "react-router";

export const Utilities: FC = () => {
    const navigate = useNavigate();

    const redirectHistoryPage = () => {
        navigate('/charging-history');
    };

    const redirectQRPage = () => {
        navigate('/qr-code');
    };

    return (
        <Box>
          <div className="ml-[16px]">
              <div className="text-[#fff] text-[16px] text-[600]">Tiện ích</div>
          </div>
          <div className="grid grid-cols-2 gap-4 p-4">
              <div onClick={() => redirectQRPage()} className="bg-[#232933] grid justify-center pt-[25px] py-[25px] rounded-xl">
                  <img className="w-12 h-12" src={qr} />
                  <Text size="xxSmall" className="text-[#fff] font-bold mt-[5px]">
                      Quét QR
                  </Text>
              </div>
              <div onClick={() => redirectHistoryPage()} className="bg-[#232933] grid justify-center py-[25px] rounded-xl">
                  <img className="w-12 h-12" src={history} />
                  <Text size="xxSmall" className="text-[#fff] font-bold mt-[5px]">
                      Lịch sử sạc
                  </Text>
              </div>
          </div>
        </Box>
    );
};