import React, { FC } from "react";
import { Box, Page } from "zmp-ui";
import { Divider } from "components/divider";
import { TitleContent } from "components/title-content";

import { useNavigate } from "react-router";

import MapsImage from "static/map_image.png";
import Redirect from "static/redirect.png";
import Help from "static/help.png";
import Redirect2 from "static/redirect2.png";
import PowerRed from "static/power-red.png";
import PowerBule from "static/power-bule.png";

const ChargingStationList: FC = () => {
  const navigate = useNavigate();

  const redirectDetailPage = () => {
    navigate('/charging-station/detail');
  }

  return (
    <Box className="bg-background">
      <div>
        <div className="h-[260px]">
          <img className="w-[100%] h-[100%]" src={MapsImage} />
        </div>

        <div className="px-[10px] mt-[15px]">
          <div className="bg-[#232933] rounded-lg grid charging-station-grid-908 mb-[15px]" onClick={() => redirectDetailPage()}>
            <div>
              <div className="text-[#fff] font-bold text-[16px] mb-[5px]">Chung cư Vinhomes Golden River 1</div>
              <div className="text-gray text-[14px] ml-[10px]">Hầm B3, Tòa AQUA 3, Vinhomes Golden Riv...</div>
              <div className="grid charging-station-grid-890 text-[14px] mb-[5px] ml-[10px]">
                <div>
                  <img className="w-7 h-7 mt-[10px]" src={Help} />
                </div>
                <div>
                  <div className="text-[#fff]">Trạm công cộng - Gửi xe tính phí</div>
                  <div className="text-gray flex">Mở: <p className="text-[#fff] ml-[10px]">08:30 - 22:30</p></div>
                </div>
              </div>
              <div className="text-[#42B96C] text-[14px] grid grid charging-station-grid-890 ml-[10px]">
                <div><img className="w-5 h-5 mt-[4px]" src={PowerBule} /></div>
                <div>Cổng sạc sẵn sàng: 47/48</div>
              </div>
            </div>

            <div className="">
              <img className="w-7 h-7 mb-[5px]" src={Redirect2} />
              <img className="w-7 h-7" src={Redirect} />
            </div>
          </div>

          <div className="bg-[#232933] rounded-lg grid charging-station-grid-908 mb-[15px]" onClick={() => redirectDetailPage()}>
            <div>
              <div className="text-[#fff] font-bold text-[16px] mb-[5px]">Chung cư Vinhomes Golden River 1</div>
              <div className="text-gray text-[14px] ml-[10px]">Hầm B3, Tòa AQUA 3, Vinhomes Golden Riv...</div>
              <div className="grid charging-station-grid-890 text-[14px] mb-[5px] ml-[10px]">
                <div>
                  <img className="w-7 h-7 mt-[10px]" src={Help} />
                </div>
                <div>
                  <div className="text-[#fff]">Trạm công cộng - Gửi xe tính phí</div>
                  <div className="text-gray flex">Mở: <p className="text-[#fff] ml-[10px]">08:30 - 22:30</p></div>
                </div>
              </div>
              <div className="text-[#f10101] text-[14px] grid grid charging-station-grid-890 ml-[10px]">
                <div><img className="w-5 h-5 mt-[4px]" src={PowerRed} /></div>
                <div>Ngoài giờ làm việc</div>
              </div>
            </div>

            <div className="">
              <img className="w-7 h-7 mb-[5px]" src={Redirect2} />
              <img className="w-7 h-7" src={Redirect} />
            </div>
          </div>
        </div>
      </div>
    </Box>
  );
};

const ChargingStationPage: FC = () => {
  const titleScreen = "Trạm sạc";
  const urlBack = "/";

  return (
    <Page>
      <TitleContent title={titleScreen} url={urlBack} />
      <Divider />
      <ChargingStationList />
    </Page>
  );
};

export default ChargingStationPage;