import React, { FC } from "react";
import { Box, Header, Page } from "zmp-ui";
import { Divider } from "components/divider";
import { useNavigate } from "react-router";

import Power from "static/power.png";

const HistoriesList: FC = () => {
    const borderContent = {
        borderBottom: "1px solid #414752",
    };

    return (
        <Box className="bg-background text-[#fff]">
            <div>
                <div className="bg-[#414752] py-[5px] px-[15px]">
                    Tháng 8, 2024
                </div>

                <div className="bg-[#232933] grid justify-center py-[5px] charging-history-grid-1285" style={borderContent}>
                    <div className="grid items-center justify-center">
                        <img className="w-5 h-5" src={Power} />
                    </div>
                    <div className="py-[10px]">
                        <div className="pb-[5px]">Sạc pin</div>
                        <div className="pb-[5px] font-[12px] text-gray">14/08/2024 - 10:15</div>
                        <div className="text-gray">Dừng sạc từ ứng dụng</div>
                    </div>
                </div>
            </div>

            <div>
                <div className="bg-[#414752] py-[5px] px-[15px]">
                    Tháng 7, 2024
                </div>

                <div className="bg-[#232933] grid justify-center py-[5px] charging-history-grid-1285" style={borderContent}>
                    <div className="grid items-center justify-center">
                        <img className="w-5 h-5" src={Power} />
                    </div>
                    <div className="py-[10px]">
                        <div className="pb-[5px]">Sạc pin</div>
                        <div className="pb-[5px] font-[12px] text-gray">14/08/2024 - 10:15</div>
                        <div className="text-gray">Dừng sạc từ ứng dụng</div>
                    </div>
                </div>

                <div className="bg-[#232933] grid justify-center py-[5px] charging-history-grid-1285" style={borderContent}>
                    <div className="grid items-center justify-center">
                        <img className="w-5 h-5" src={Power} />
                    </div>
                    <div className="py-[10px]">
                        <div className="pb-[5px]">Sạc pin</div>
                        <div className="pb-[5px] font-[12px] text-gray">14/08/2024 - 10:15</div>
                        <div className="text-gray">Dừng sạc từ ứng dụng</div>
                    </div>
                </div>
            </div>
        </Box>
    );
};

const HistoryPage: FC = () => {
    const navigate = useNavigate();

    const redirectHomePage = () => {
        navigate('/');
    };

    return (
        <Page>
            <Header
                title="Lịch sử sạc"
                showBackIcon={true}
                onBackClick={() => redirectHomePage()}
            />
            <div></div>
            <Divider />
            <HistoriesList />
        </Page>
    );
};

export default HistoryPage;