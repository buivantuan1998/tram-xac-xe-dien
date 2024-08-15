import React, { FC } from "react";
import { ListRenderer } from "components/list-renderer";
import { useRecoilValue } from "recoil";
import { notificationsState } from "state";
import { Box, Header, Page, Text } from "zmp-ui";
import { Divider } from "components/divider";

const NotificationList: FC = () => {
  const notifications = useRecoilValue(notificationsState);
  return (
    <Box className="bg-background px-[15px]">
      <div className="bg-[#232933] grid p-[10px] rounded-xl mt-[10px]">
        <Text.Header className="text-[#fff] text-[14px]">Nhập mã giới thiệu để được khuyến mãi</Text.Header>
        <Text
          size="small"
          className="text-gray overflow-hidden whitespace-nowrap text-ellipsis mt-[5px]"
        >
          Bạn nhận được mã giới thiệu từ số người dùng Nguyễn Văn A, vui lòng nhập ...
        </Text>
      </div>

      <div className="bg-[#232933] grid p-[10px] rounded-xl mt-[10px]">
        <Text.Header className="text-[#fff] text-[14px]">Giảm 50% cho 3 lần sạc đầu tiên</Text.Header>
        <Text
          size="small"
          className="text-gray overflow-hidden whitespace-nowrap text-ellipsis mt-[5px]"
        >
          Nhập mã TRAMXACXEDIEN để được giảm 50% giá cho 3 lần xạc đầu ...
        </Text>
      </div>

      <div className="bg-[#232933] grid p-[10px] rounded-xl mt-[10px]">
        <Text.Header className="text-[#fff] text-[14px]">Chào mừng bạn mới</Text.Header>
        <Text
          size="small"
          className="text-gray overflow-hidden whitespace-nowrap text-ellipsis mt-[5px]"
        >
          Cảm ơn bạn đã tham gia sử dụng ứng dụng, bạn có thể ...
        </Text>
      </div>
    </Box>
  );
};

const NotificationPage: FC = () => {
  return (
    <Page>
      <Header title="Thông báo" showBackIcon={false} />
      <Divider />
      <NotificationList />
    </Page>
  );
};

export default NotificationPage;
