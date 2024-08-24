import React, { FC } from "react";
import { Box, Page, Text } from "zmp-ui";
import { Divider } from "components/divider";

import { useNavigate } from "react-router";
import { format } from "date-fns";

import Evo200 from "static/evo200.png";
import FelizS from "static/felizs.png";
import ArrowBottom from "static/arrow-bottom.png";

const CategoriesList: FC = () => {
    const navigate = useNavigate();

    const currentTime = format(new Date(), "yyyy/MM/dd hh:mm");
    const chargingBattery = "Vincom Plaza Cộng Hòa";
    const boderButton = { border: "1px solid" };

    const confirmCharging = (id: any) => {
        navigate(`/categories/${id}/confirm`)
    };

    const refuseAction = () => {
        navigate(`/qrcode`)
    };

    return (
        <Box className="bg-background">
            <div className="h-[80vh]">
                <div className="bg-[#232933] text-[#fff] text-[18px] px-[25px] pt-[25px]">
                    <div className="pb-[25px] text-center">
                        Bạn vừa yêu cầu sử dụng trạm sạc vào lúc {currentTime} tại trạm {chargingBattery}
                    </div>
                    <div className="grid justify-center pb-[10px]"><img className="w-5 h-5" src={ArrowBottom} /></div>
                </div>
                <div className="px-[15px]">
                    <div className="text-[#fff] text-[16px] mb-[15px] mt-[25px] text-center">Vui lòng chọn loại xe trước khi bắt đầu</div>
                    <div className="grid grid-cols-2 gap-3">
                        <div onClick={() => confirmCharging(1)} className="bg-[#232933] grid justify-center py-[25px] rounded-xl">
                            <img className="w-12 h-12" src={Evo200} />
                            <Text size="xxSmall" className="text-[#fff] font-bold mt-[5px] text-center text-[16px]">
                                Evo 200
                            </Text>
                        </div>
                        <div onClick={() => confirmCharging(2)} className="bg-[#232933] grid justify-center py-[25px] rounded-xl">
                            <img className="w-12 h-12" src={FelizS} />
                            <Text size="xxSmall" className="text-[#fff] font-bold mt-[5px] text-center text-[16px]">
                                FelizS
                            </Text>
                        </div>
                    </div>
                </div>
                <div></div>
            </div>

            <div className="px-[15px]">
                <div
                    className="grid rounded-2xl text-[#fff] h-[35px] text-center items-center text-[18px]"
                    style={boderButton}
                    onClick={() => refuseAction()}
                >
                    Từ chối
                </div>
            </div>
        </Box>
    );
};

const CategoriesPage: FC = () => {
    return (
        <Page>
        <Divider />
        <CategoriesList />
        </Page>
    );
};

export default CategoriesPage;
