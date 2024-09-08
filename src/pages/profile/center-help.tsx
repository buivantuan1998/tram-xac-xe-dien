import React, { FC } from "react";
import { Box, Header, Page } from "zmp-ui";

import { useNavigate } from "react-router";

import Headphones from "static/headphones.png";
import Question from "static/question.png";
import Website from "static/website.png";
import Mail from "static/mail.png";
import Phone from "static/phone-call.png";

const Personal: FC = () => {
    const navigate = useNavigate();

    const borderBottom = {
        borderBottom: "1px solid #808080",
    };

    const redirectFaqPage = () => {
        navigate('/faq');
    };

    const redirectRequestSupportPage = () => {
        navigate('/request-support');
    };

    return (
        <Box className="bg-background px-[15px]">
            <div className="text-[#fff]">
                <div className="mb-[5px] text-[16px] font-bold mt-[15px]">Tiện ích</div>
                <div className="grid mb-[20px] grid-4848">
                    <div className="bg-[#232933] rounded-xl p-[15px] mr-[5px]" onClick={() => redirectFaqPage()}>
                        <div className="grid justify-center mb-[10px]">
                            <img className="w-6 h-6" src={Question} />
                        </div>
                        <div className="text-center">Câu hỏi thường gặp</div>
                    </div>
                    <div className="bg-[#232933] rounded-xl p-[15px] ml-[5px]" onClick={() => redirectRequestSupportPage()}>
                        <div className="grid justify-center mb-[10px]">
                            <img className="w-6 h-6" src={Headphones} />
                        </div>
                        <div className="text-center">Yêu cầu hỗ trợ</div>
                    </div>
                </div>

                <div className="mb-[5px] text-[16px] font-bold">Danh sách yêu cầu hỗ trợ</div>
                <div className="bg-[#232933] grid mb-[20px] rounded-xl p-[15px]">
                    <div className="mb-[10px]">
                        <div>Số điện thoại: 0327045332</div>
                        <div>Email: annguyen@gmail.com</div>
                        <div>Yêu cầu: Tôi đã thanh toán nhưng không thể bắt đầu sạc, phải làm gì?</div>
                        <div className="mt-[10px]" style={borderBottom}></div>
                    </div>

                    <div className="mb-[10px]">
                        <div>Số điện thoại: 032704544</div>
                        <div>Email: annguyen@gmail.com</div>
                        <div>Yêu cầu: Ứng dụng có hỗ trợ khuyến mãi khi sạc xe không?</div>
                        <div className="mt-[10px]" style={borderBottom}></div>
                    </div>
                </div>

                <div className="mb-[5px] text-[16px] font-bold">Liên hệ với chúng tôi</div>
                <div className="bg-[#232933] grid mb-[20px] rounded-xl p-[15px]">
                    <div className="">
                        <div className="grid charging-station-grid-890 mb-[7px]">
                            <div className="grid items-center"><img className="w-5 h-5" src={Phone} /></div>
                            <div className="text-[16px]">0902792333</div>
                        </div>
                        <div className="grid charging-station-grid-890 mb-[7px]">
                            <div className="grid items-center"><img className="w-5 h-5" src={Mail} /></div>
                            <div className="text-[16px]">tramsacxedien@gmail.com</div>
                        </div>
                        <div className="grid charging-station-grid-890 mb-[7px]">
                            <div className="grid items-center"><img className="w-5 h-5" src={Website} /></div>
                            <div className="text-[16px]">https://tramsacxemaydien.com/</div>
                        </div>
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
                title="Trung tâm trợ giúp"
                showBackIcon={true}
                onBackClick={() => redirectProfile()}
            />
            <Personal />
        </Page>
    );
};

export default ProfilePage;