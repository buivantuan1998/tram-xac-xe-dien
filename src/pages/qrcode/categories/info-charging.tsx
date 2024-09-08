import React, { FC } from "react";
import { Box, Header, Page, Text } from "zmp-ui";
import { Divider } from "components/divider";

import { useNavigate } from "react-router";

import ArrowBottom from "static/arrow-bottom.png";
import BatteryStatus from "static/battery-status.png";
import RenewableEnergy from "static/renewable-energy-1.png";
import Thermometer from "static/thermometer.png";
import Electricity from "static/electricity.png";
import Voltage from "static/voltage.png";
import BatteryHeart from "static/battery-heart.png";

const ChargingInfoList: FC = () => {
    const navigate = useNavigate();

    const borderBottom = {
        borderBottom: "1px solid #525963",
    };

    const borderLeft = {
        borderLeft: "1px solid #525963",
    };

    const boderButton = {
        border: "1px solid #1463f4",
    };

    const chargingStop = () => {
        navigate("/");
    }

    const updateTime = "2024/01/21 13:09";

    return (
        <Box className="bg-background">
            <div className="text-[#fff]">
                {/* <div className="bg-[#39c98f]">
                <div className="grid justify-center py-[15px]">
                    <img className="w-8 h-8" src={PowerWhite} />
                </div>
                <div className="pb-[15px] text-[18px] text-center">ĐÃ KẾT NỐI TỚI TRẠM SẠC</div>
            </div>
            <div className="arrow-up"></div>
            <div className="arrow-down"></div> */}

                <div className="bg-[#232933] grid charging-station-grid-890 p-[10px]">
                    <div className="grid justify-center">
                        <img className="w-5 h-5 mt-[5px]" src={ArrowBottom} />
                    </div>
                    <div className="text-center text-[18px]">
                        <div className="">Evo 200</div>
                        <div>ABCD-1234-EFGH</div>
                    </div>
                </div>
                <div className="my-[15px]">
                    <div className="flex justify-center">
                        <div>
                            <img className="w-10 h-10" src={BatteryStatus} />
                        </div>
                        <div className="text-[22px] font-bold grid items-center">71%</div>
                    </div>
                    <div className="text-center text-[16px] mt-[5px]">Dung lượng pin hiện tại</div>
                </div>
                <div className="px-[15px] mb-[20px]">
                    <div className="bg-[#232933] rounded-xl p-[10px]">
                        <div className="text-center" style={borderBottom}>
                            <div className="text-gray text-[16px]">Thời gian sạc</div>
                            <div className="text-[20px] pb-[6px] text-[#51bd76] font-bold">00:00:09</div>
                        </div>
                        <div style={borderBottom}>
                            <div className="text-gray text-center pt-[10px] text-[16px]">Điện năng tiêu thụ</div>
                            <div className="text-[22px] text-[#f6a015] font-bold text-center pb-[10px]">+0 kWh</div>
                            <div className="flex justify-center pb-[10px]">
                                <div className="text-[22px] mr-[10px] font-semibold">0 A</div>
                                <div className="" style={borderLeft}></div>
                                <div className="text-[22px] ml-[10px] font-semibold">0 V</div>
                            </div>
                        </div>
                        <div>
                            <div className="pt-[15px] text-center text-gray text-[16px]">Tạm tính</div>
                            <div className="text-center text-[22px] pb-[10px] font-semibold">0 đ</div>
                        </div>
                    </div>
                </div>

                <div className="px-[15px]">
                    <div className="bg-[#232933] rounded-xl p-[10px]">
                        {/* <div className="text-center" style={borderBottom}>
                        <div className="text-gray text-[16px]">Sức khỏe pin</div>
                        <div className="text-[20px] pb-[6px] font-bold">100%</div>
                    </div> */}
                        <div className="grid grid-47247 py-[10px]" style={borderBottom}>
                            <div className="grid grid-5640">
                                <div>
                                    <div className="text-gray text-[16px] pb-[5px]">Sức khỏe pin</div>
                                    <div className="flex justify-center">
                                        <div className="text-[22px] font-bold">100</div>
                                        <div className="text-[14px] font-bold grid items-end">%</div>
                                    </div>
                                </div>
                                <div className="grid items-center justify-center">
                                    <img className="w-10 h-10" src={BatteryHeart} />
                                </div>
                            </div>
                            <div style={borderLeft}></div>
                            <div>
                                <div className="grid grid-5640">
                                    <div>
                                        <div className="text-gray text-[16px] pb-[5px]">Số vòng sạc</div>
                                        <div className="flex justify-center">
                                            <div className="text-[22px] font-bold">13</div>
                                            <div></div>
                                        </div>
                                    </div>
                                    <div className="grid items-center justify-center">
                                        <img className="w-10 h-10" src={RenewableEnergy} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-47247 py-[10px]" style={borderBottom}>
                            <div className="grid grid-5640">
                                <div>
                                    <div className="text-gray text-[16px] pb-[5px]">Nhiệt độ pin</div>
                                    <div className="flex justify-center">
                                        <div className="text-[22px] font-bold">35</div>
                                        <div className="text-[14px] font-bold grid items-end">°C</div>
                                    </div>
                                </div>
                                <div className="grid items-center justify-center">
                                    <img className="w-10 h-10" src={Thermometer} />
                                </div>
                            </div>
                            <div style={borderLeft}></div>
                            <div>
                                <div className="grid grid-5640">
                                    <div>
                                        <div className="text-gray text-[16px] pb-[5px]">Nhiệt độ BMS</div>
                                        <div className="flex justify-center">
                                            <div className="text-[22px] font-bold">19</div>
                                            <div className="text-[14px] font-bold grid items-end">°C</div>
                                        </div>
                                    </div>
                                    <div className="grid items-center justify-center">
                                        <img className="w-10 h-10" src={Thermometer} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-47247 py-[10px]">
                            <div className="grid grid-5640">
                                <div>
                                    <div className="text-gray text-[16px] pb-[5px]">Dòng điện</div>
                                    <div className="flex justify-center">
                                        <div className="text-[22px] font-bold justify-center">14,1</div>
                                        <div className="text-[14px] font-bold grid items-end">A</div>
                                    </div>
                                </div>
                                <div className="grid items-center justify-center">
                                    <img className="w-10 h-10" src={Electricity} />
                                </div>
                            </div>
                            <div style={borderLeft}></div>
                            <div>
                                <div className="grid grid-5640">
                                    <div>
                                        <div className="text-gray text-[16px] pb-[5px]">Điện áp</div>
                                        <div className="flex justify-center">
                                            <div className="text-[22px] font-bold justify-center">74,7</div>
                                            <div className="text-[14px] font-bold grid items-end">V</div>
                                        </div>
                                    </div>
                                    <div className="grid items-center justify-center">
                                        <img className="w-10 h-10" src={Voltage} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-[5px]">
                    <div className="text-[14px] text-gray text-center">Cập nhật lần cuối cùng: {updateTime}</div>
                </div>

                <div className="px-[15px] ">
                    <div
                        className="grid rounded-2xl text-[#fff] h-[35px] text-center items-center text-[18px] bg-[#1463f4] mt-[50px] mb-[20px]"
                        style={boderButton}
                        onClick={() => chargingStop()}
                    >
                        Dừng sạc
                    </div>
                </div>
            </div>
        </Box>
    );
};

const ChargingInfoPage: FC = () => {
    return (
        <Page>
            <Header title="Sức khỏe pin" showBackIcon={true} />
            <Divider />
            <ChargingInfoList />
        </Page>
    );
};

export default ChargingInfoPage;
