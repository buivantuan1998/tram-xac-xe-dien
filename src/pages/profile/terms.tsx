import React, { FC } from "react";
import { Box, Header, Page } from "zmp-ui";

import { useNavigate } from "react-router";

const TermsOfUser: FC = () => {
  const borderBottom = {
    borderBottom: "1px solid #808080",
  };

  return(
    <Box className="bg-background px-[10px]">
        <div className="text-[#fff] px-[15px]">
            <div>
                <div className="text-[18px] font-semibold mb-[10px]">Giới thiệu</div>
                <div className="text-[14px] text-justify mb-[20px] ml-[15px]">
                    Ứng dụng trạm sạc xe máy điện là ứng dụng được sử dụng qua nền tảng Zalo để thuận tiện cho việc thanh toán
                    dịch vụ sạc nhanh cho người dùng xe máy điện tại Việt Nam. Ứng dụng mang nhiều tiện ích giúp người dùng theo
                    dõi được quá trình sạc xe thông qua điện thoại thông minh gồm các thông số như: hiển thị % pin, nhiệt độ pin,
                    vòng sạc, điện áp,.... Và nhiều tính năng hữu ích khác.
                </div>
            </div>

            <div>
                <div className="text-[18px] font-semibold mb-[10px]">Điều khoản sử dụng dịch vụ, quý khách nên tuân thủ</div>
                <div className="text-[14px] text-justify mb-[20px] ml-[15px]">
                    <div className="flex items-baseline">
                        <div className="h-[5px] w-[5px] bg-[#fff] rounded-2xl"></div>
                        <div className="ml-[8px]">Không cung cấp thông tin sai khi đăng ký tài khoản trên ứng dụng.</div>
                    </div>
                    <div className="flex items-baseline">
                        <div className="h-[5px] w-[5px] bg-[#fff] rounded-2xl"></div>
                        <div className="ml-[8px]">Không mở hoặc duy trì tài khoản nặc danh, mạo danh.</div>
                    </div>
                    <div className="flex items-baseline">
                        <div className="h-[5px] w-[5px] bg-[#fff] rounded-2xl"></div>
                        <div className="ml-[8px]">Không phân tán các phần mềm gây hại cho ứng dụng.</div>
                    </div>
                    <div className="flex items-baseline">
                        <div className="h-[5px] w-[5px] bg-[#fff] rounded-2xl"></div>
                        <div className="ml-[8px]">Không được phép khai thác lỗ hổng phần mềm nhằm mục đích tấn công hoặc đánh cắp dữ liệu.</div>
                    </div>
                    <div className="flex items-baseline">
                        <div className="h-[5px] w-[5px] bg-[#fff] rounded-2xl"></div>
                        <div className="ml-[8px]">Không được thực hiện bất kỳ hành vi chống phá, tấn công từ chối dịch vụ server.</div>
                    </div>
                </div>
            </div>

            <div>
                <div className="text-[18px] font-semibold mb-[10px]">Nếu quý khách có những hành vi trên chúng tôi có quyền xử lý để đảm bảo lợi ích cho chúng tôi bằng các biện pháp sau:</div>
                <div className="text-[14px] text-justify mb-[40px] ml-[15px]">
                    <div className="flex items-baseline">
                        <div className="h-[5px] w-[5px] bg-[#fff] rounded-2xl"></div>
                        <div className="ml-[8px]">Đóng tài khoản và ngừng cung cấp dịch vụ.</div>
                    </div>
                    <div className="flex items-baseline">
                        <div className="h-[5px] w-[5px] bg-[#fff] rounded-2xl"></div>
                        <div className="ml-[8px]">
                            Trong trường hợp ứng dụng bị tấn công chúng tôi sẽ giữ nguyên hiện trạng,
                            thống kê thiệt hại gửi đến các cơ quan có thẩm quyền để điều tra và xử lý.
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </Box>
  );
};

const TermsPage: FC = () => {
    const navigate = useNavigate();

    const redirectProfile = () => {
        navigate(`/profile`);
    };

    return (
        <Page>
        <Header
            title="Điều khoản"
            showBackIcon={true}
            onBackClick={() => redirectProfile()}
        />
        <TermsOfUser />
        </Page>
    );
};

export default TermsPage;