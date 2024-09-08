import React, { FC } from "react";
import { Box, Header, Page } from "zmp-ui";

import { useNavigate } from "react-router";

import Discount from "static/discount.png";
import RightArrow from "static/right-arrow.png";

const Personal: FC = () => {
    const borderBottom = {
        borderBottom: "1px solid #808080",
    };

    return (
        <Box className="bg-background px-[10px]">
            <div className="text-[#fff]">
                <div className="bg-[#232933] grid mb-[20px] rounded-xl p-[15px]">
                    <div className="mb-[20px]">
                        <div className="grid grid-8836 mb-[20px]">
                            <div><img className="w-6 h-6" src={Discount} /></div>
                            <div>Khuyến mại</div>
                            <div><img className="w-5 h-5" src={RightArrow} /></div>
                        </div>
                        <div className="" style={borderBottom}></div>
                    </div>
                </div>
            </div>
        </Box>
    );
};

const ProfilePage: FC = () => {
    const navigate = useNavigate();

    const redirectProfile = () => {
        navigate(`/profile`);
    };

    return (
        <Page>
            <Header
                title="Khuyến mãi"
                showBackIcon={true}
                onBackClick={() => redirectProfile()}
            />
            <Personal />
        </Page>
    );
};

export default ProfilePage;