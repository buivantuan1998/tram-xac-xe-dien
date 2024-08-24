import React, { FC } from "react";
import { Box, Header, Page, Text } from "zmp-ui";
import { Divider } from "components/divider";

import { useNavigate } from "react-router";
import { useParams } from 'react-router-dom';
import { format } from "date-fns";

import ConfirmEvo200 from "static/confirm-evo200.png";
import ConfirmFelizS from "static/confirm-felizs.png";
import ArrowBottom from "static/arrow-bottom.png";

const CategoriesConfirm: FC = () => {
    const navigate = useNavigate();

    const { id } = useParams();

    const currentTime = format(new Date(), "yyyy/MM/dd hh:mm");
    const chargingBattery = "Vincom Plaza Cộng Hòa";

    const boderButton = {
        border: "1px solid",
    };

    const boderButtonAgree = {
        border: "1px solid #1463f4",
    };
    const cancelAction = () => {
        navigate(`/categories`)
    };

    const AgreeAction = () => {
        navigate(`/`)
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
                    <div className="text-[#fff] text-[16px] mb-[15px] mt-[25px] text-center">Chọn loại xe sạc thành công: {id}</div>
                    <div>
                        <img className="w-15 h-15" src={ id == "1" ? ConfirmEvo200 : ConfirmFelizS} />
                    </div>
                </div>
                <div></div>
            </div>

            <div className="flex px-[15px]">
                <div
                    className="grid rounded-2xl text-[#fff] h-[35px] text-center items-center text-[18px] w-[100%]"
                    style={boderButton}
                    onClick={() => cancelAction()}
                >
                    Hủy
                </div>
                <div
                    className="grid rounded-2xl text-[#fff] h-[35px] text-center items-center text-[18px] w-[100%] ml-[20px] bg-[#1463f4]"
                    style={boderButtonAgree}
                    onClick={() => AgreeAction()}
                >
                    Đồng ý
                </div>
            </div>
        </Box>
    );
};

const CategoriesConfirmPage: FC = () => {
  return (
    <Page>
      <Divider />
      <CategoriesConfirm />
    </Page>
  );
};

export default CategoriesConfirmPage;
