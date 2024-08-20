import React, { FC } from "react";
import { Box, Header, Page } from "zmp-ui";
import { Divider } from "components/divider";

import MotoElectrig from "static/moto-electrig.png";
import Cusor from "static/cusor.png";
import ChargingStation from "static/charging-station-2.png";
import Wifi from "static/wi-fi.png";
import Restrooms from "static/restrooms.png";
import Restaurant from "static/restaurant.png";
import FastCharging from "static/fast-charging.png";
import Technology from "static/technology.png";

const ChargingStationDetail: FC = () => {
  return (
    <Box className="bg-background text-[#fff]">
      <div>
        <div className="bg-[#232933] mb-[15px]">
          <div className="h-[230px]"><img className="w-[100%] h-[100%] mt-[4px]" src={MotoElectrig} /></div>
          <div className="relative">
            <div className="px-[30px] py-[5px]">
              <div className="bg-[#525e6d] rounded-2xl mt-[-45px] py-[10px] px-[20px] text-center">
                <div className="text-[16px] font-bold">Chung cư Vinhomes Golden River 1</div>
                <div className="text-[14px]">Hầm B3, Tòa AQUA 3, Vinhomes Golden River 1, Quận Cầu Giấy, Hà Nội</div>
                <div className="text-[14px] justify-center flex">
                  <div><img className="w-8 h-8" src={Cusor} /></div>
                  <div className="grid items-center text-[#2e78fe]">Chỉ đường đến đây</div>
                </div>
                <div className="text-[14px] text-[#42B96C]">Đang hoạt động</div>
                <div className="text-[14px]">(08:30 AM - 22:30 PM)</div>
              </div>
            </div>

            <div className="px-[15px] mt-[15px]">
              <div className="grid grid-593 my-[5px]">
                <div><img className="w-5 h-5 mt-[4px]" src={ChargingStation} /></div>
                <div className="ml-[10px]">2 trụ đang trống</div>
              </div>

              <div className="grid grid-593 my-[5px]">
                <div><img className="w-5 h-5 mt-[4px]" src={Restrooms} /></div>
                <div className="ml-[10px]">Có nhà vệ sinh</div>
              </div>

              <div className="grid grid-593 my-[5px]">
                <div><img className="w-5 h-5 mt-[4px]" src={Restaurant} /></div>
                <div className="ml-[10px]">Có bán đồ ăn uống</div>
              </div>

              <div className="grid grid-593 my-[5px]">
                <div><img className="w-5 h-5 mt-[4px]" src={Wifi} /></div>
                <div className="ml-[10px]">Có wifi</div>
              </div>

              <div className="h-[15px]"></div>
            </div>
          </div>
        </div>

        <div className="px-[15px]">
          <div className="text-[16px] mb-[5px]">Danh sách trụ sạc</div>
          <div className="">
            <div className="bg-[#232933] grid grid-1583 py-[6px] px-[6px] rounded-xl mb-[10px]">
              <div className="grid items-center"><img className="w-12 h-12 mt-[4px]" src={FastCharging} /></div>
              <div className="ml-[10px]">
                <div className="grid grid-7523">
                  <div className="font-bold text-[16px]">SẠC NHANH 1800W</div>
                  <div className="flex">
                    <img className="w-8 h-8" src={Technology} />
                    <div className="grid items-center ml-[5px]">2KW</div>
                  </div>
                </div>
                <div className="text-[14px]">Cổng: Vinfast 1</div>
                <div className="text-[14px] text-[#42B96C]">Đang hoạt động</div>
                <div className="text-[14px] text-[#42B96C]">Tiến trình sạc: 35%</div>
                <div className="text-[14px]">Sạc các loại xe máy vinfast</div>
                <div className="text-[14px] w-[90px] h-[20px] bg-[#42B96C] text-center mt-[5px]">8.000 đ/kWh</div>
              </div>
            </div>

            <div className="bg-[#232933] grid grid-1583 py-[6px] px-[6px] rounded-xl mb-[10px]">
              <div className="grid items-center"><img className="w-12 h-12 mt-[4px]" src={FastCharging} /></div>
              <div className="ml-[10px]">
                <div className="grid grid-7523">
                  <div className="font-bold text-[16px]">Miễn phí</div>
                  <div className="flex">
                    <img className="w-8 h-8" src={Technology} />
                    <div className="grid items-center ml-[5px]">1KW</div>
                  </div>
                </div>
                <div className="text-[14px]">Cổng: Vinfast 2</div>
                <div className="text-[14px] text-[#fd300d]">Đang trống</div>
                <div className="text-[14px] text-[#fd300d]">Tiến trình sạc: 0%</div>
                <div className="text-[14px]">Sạc các loại xe máy vinfast</div>
                <div className="text-[14px] w-[90px] h-[20px] bg-[#42B96C] text-center mt-[5px]">5.000 đ/kWh</div>
              </div>
            </div>
          </div>
        </div>

        <div className="h-[20px]"></div>
      </div>
    </Box>
  );
};

const ChargingStationDetailPage: FC = () => {
  return (
    <Page>
      <Header title="Chi tiết trạm sạc" showBackIcon={true} />
      <Divider />
      <ChargingStationDetail />
    </Page>
  );
};

export default ChargingStationDetailPage;