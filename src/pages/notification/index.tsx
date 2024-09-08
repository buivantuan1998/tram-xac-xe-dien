import React, { FC } from "react";
import { Box, Header, Page, Text } from "zmp-ui";
import { Divider } from "components/divider";
import { useNavigate } from "react-router";

import Paper from "static/paper.png";

const NotificationList: FC = () => {
    return (
        <Box className="bg-background">
            <div className="bg-[#232933] grid p-[10px] grid-1583">
                <div className="grid items-center justify-center"><img className="w-7 h-7" src={Paper} /></div>
                <div>
                    <div className="flex items-baseline">
                        <div className="h-[10px] w-[10px] bg-[red] rounded-2xl mr-[5px]"></div>
                        <Text.Header className="text-[#fff] text-[14px]">Nhập mã giới thiệu để được khuyến mãi</Text.Header>
                    </div>
                    <Text
                        size="small"
                        className="text-gray overflow-hidden whitespace-nowrap text-ellipsis mt-[5px]"
                    >
                        Bạn nhận được mã giới thiệu từ số người dùng Nguyễn Văn A, vui lòng nhập ...
                    </Text>
                </div>
            </div>

            <div className="bg-[#232933] grid p-[10px] grid-1583">
                <div className="grid items-center justify-center"><img className="w-7 h-7" src={Paper} /></div>
                <div>
                    <div className="flex items-baseline">
                        <div className="h-[10px] w-[10px] bg-[red] rounded-2xl mr-[5px]"></div>
                        <Text.Header className="text-[#fff] text-[14px]">Giảm 50% cho 3 lần sạc đầu tiên</Text.Header>
                    </div>
                    <Text
                        size="small"
                        className="text-gray overflow-hidden whitespace-nowrap text-ellipsis mt-[5px]"
                    >
                        Nhập mã TRAMXACXEDIEN để được giảm 50% giá cho 3 lần xạc đầu ...
                    </Text>
                </div>
            </div>

            <div className="bg-[#232933] grid p-[10px] grid-1583">
                <div className="grid items-center justify-center"><img className="w-7 h-7" src={Paper} /></div>
                <div>
                    <div className="flex items-baseline">
                        <div className="h-[10px] w-[10px] bg-[red] rounded-2xl mr-[5px]"></div>
                        <Text.Header className="text-[#fff] text-[14px]">Chào mừng bạn mới</Text.Header>
                    </div>
                    <Text
                        size="small"
                        className="text-gray overflow-hidden whitespace-nowrap text-ellipsis mt-[5px]"
                    >
                        Cảm ơn bạn đã tham gia sử dụng ứng dụng, bạn có thể ...
                    </Text>
                </div>
            </div>
        </Box>
    );
};

const NotificationPage: FC = () => {
    const navigate = useNavigate();

    const redirectHomePage = () => {
        navigate('/');
    };

    return (
        <Page>
            <Header
                title="Thông báo"
                showBackIcon={true}
                onBackClick={() => redirectHomePage()}
            />
            <Divider />
            <NotificationList />
        </Page>
    );
};

export default NotificationPage;
