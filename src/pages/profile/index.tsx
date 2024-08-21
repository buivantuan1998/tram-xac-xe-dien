import React, { FC } from "react";
import { Box, Header, Page } from "zmp-ui";

import User from "static/user.png";
import Logout from "static/logout.png";
import Discount from "static/discount.png";
import RightArrow from "static/right-arrow.png";
import CustomerService from "static/customer-service.png";
import Question from "static/question.png";
import Headphones from "static/headphones.png";
import Policy from "static/policy.png";

const Personal: FC = () => {
  const borderBottom = {
    borderBottom: "1px solid #808080",
  };

  return(
    <Box className="bg-background px-[10px]">
      <div className="text-[#fff]">
        <div className="bg-[#232933] grid mb-[20px] rounded-xl p-[10px] grid-2078">
          <div className="grid items-center justify-center">
            <img className="w-12 h-12" src={User} />
          </div>
          <div>
            <div className="font-bold text-[16px]">Bùi Văn Tuấn</div>
            <div className="text-[16px] text-gray">0332-0226-335</div>
            <div className="text-[16px] text-gray">Hoạt động từ: 01/01/2024</div>
          </div>
        </div>

        <div className="bg-[#232933] grid mb-[20px] rounded-xl p-[15px]">
          <div className="mb-[20px]">
            <div className="grid grid-8836 mb-[20px]">
              <div><img className="w-6 h-6" src={Discount} /></div>
              <div>Khuyến mại</div>
              <div><img className="w-5 h-5" src={RightArrow} /></div>
            </div>
            <div className="" style={borderBottom}></div>
          </div>

          <div className="mb-[20px]">
            <div className="grid grid-8836 mb-[20px]">
              <div><img className="w-6 h-6" src={Question} /></div>
              <div>Câu hỏi thường gặp</div>
              <div><img className="w-5 h-5" src={RightArrow} /></div>
            </div>
            <div className="" style={borderBottom}></div>
          </div>

          <div className="mb-[20px]">
            <div className="grid grid-8836 mb-[20px]">
              <div><img className="w-6 h-6" src={CustomerService} /></div>
              <div>Trung tâm trợ giúp</div>
              <div><img className="w-5 h-5" src={RightArrow} /></div>
            </div>
            <div className="" style={borderBottom}></div>
          </div>

          <div className="mb-[20px]">
            <div className="grid grid-8836 mb-[20px]">
              <div><img className="w-6 h-6" src={Headphones} /></div>
              <div>Yêu cầu hỗ trợ</div>
              <div><img className="w-5 h-5" src={RightArrow} /></div>
            </div>
            <div className="" style={borderBottom}></div>
          </div>

          <div className="mb-[5px]">
            <div className="grid grid-8836 mb-[20px]">
              <div><img className="w-6 h-6" src={Policy} /></div>
              <div>Điều khoản sử dụng</div>
              <div><img className="w-5 h-5" src={RightArrow} /></div>
            </div>
            <div className="" style={borderBottom}></div>
          </div>
        </div>

        <div className="bg-[#232933] grid mb-[10px] h-[60px] rounded-xl p-[10px] charging-history-grid-1285">
          <div className="grid items-center justify-center">
            <img className="w-5 h-5" src={Logout} />
          </div>
          <div className="grid items-center text-[16px] text-[#f64650]">Đăng xuất</div>
        </div>
      </div>
    </Box>
  );
};

const ProfilePage: FC = () => {
  return (
    <Page>
      <Header title="Tài khoản" showBackIcon={true} />
      <Personal />
    </Page>
  );
};

export default ProfilePage;