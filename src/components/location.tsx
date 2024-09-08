import React from "react";
import { FC } from "react";
import { Box, Text } from "zmp-ui";
import { useNavigate } from "react-router";

import ChargingStation from "static/charging-station.png";
import Battery from "static/battery.png";

export const Location: FC = () => {

    const navigate = useNavigate();

    const redirectChargingStationPage = () => {
        navigate('/charging-station');
    };

    const redirectInforCharingPage = () => {
        navigate('/categories/info-charging')
    };

    return (
        <Box>
            <div className="ml-[16px]">
                <div className="text-[#fff] text-[16px] text-[600]">Địa điểm</div>
            </div>
            <div className="grid grid-cols-2 gap-4 p-4">
                <div onClick={() => redirectChargingStationPage()} className="bg-[#232933] grid justify-center py-[25px] rounded-xl">
                    <div className="grid justify-center">
                        <img className="w-12 h-12" src={ChargingStation} />
                    </div>
                    <div className="mt-[5px]">
                        <Text size="xxSmall" className="text-[#fff] font-bold mt-[5px]">
                            Trạm xạc
                        </Text>
                    </div>
                </div>

                <div onClick={() => redirectInforCharingPage()} className="bg-[#232933] grid justify-center py-[25px] rounded-xl">
                    <div className="grid justify-center">
                        <img className="w-12 h-12" src={Battery} />
                    </div>
                    <div className="mt-[5px]">
                        <Text size="xxSmall" className="text-[#fff] font-bold mt-[5px]">
                            Tình trạng pin
                        </Text>
                    </div>
                </div>
            </div>
        </Box>
    );
};