import React, { FC, useState } from "react";
import { Box, Header, Page, Modal, Button } from "zmp-ui";
import { Divider } from "components/divider";
import { useNavigate } from "react-router";

import MapsImage from "static/map_image.png";
import Redirect from "static/redirect.png";
import Help from "static/help.png";
import Redirect2 from "static/redirect2.png";
import PowerRed from "static/power-red.png";
import PowerBule from "static/power-bule.png";
import RenewableEnergy from "static/renewable-energy.png";
import ChargingStation from "static/charging-station-2.png";
import Wifi from "static/wi-fi.png";
import Restrooms from "static/restrooms.png";
import Restaurant from "static/restaurant.png";

const ChargingStationList: FC = () => {
  const navigate = useNavigate();
  const [dialogVisible, setDialogVisible] = useState(false);
  const [dialogVisibleService, setDialogVisibleService] = useState(false);

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
          <div className="bg-[#232933] rounded-lg mb-[15px] pt-[10px] px-[10px]">
            <div className="grid charging-station-grid-908">
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
              </div>

              <div className="">
                <img className="w-7 h-7 mb-[5px]" src={Redirect2} />
                <img className="w-7 h-7" src={Redirect} />
              </div>
            </div>

            <div className="text-[14px] grid grid charging-station-grid-890 ml-[10px] pb-[10px]">
              <div><img className="w-5 h-5 mt-[4px]" src={PowerBule} /></div>
              <div className="flex">
                <div className="text-[#42B96C] mr-[10px]">Cổng sạc sẵn sàng: 47/48</div>
                <div
                  className="bg-[#42B96C] w-[65px] h-[20px] text-[#fff] mr-[5px] rounded-lg text-center text-[12px]"
                  onClick={() => {setDialogVisible(true)}}
                >
                  Trạng thái
                </div>
                <div
                  className="bg-[#42B96C] w-[65px] h-[20px] text-[#fff] rounded-lg text-center text-[12px]"
                  onClick={() => setDialogVisibleService(true)}
                >
                  Dịch vụ
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#232933] rounded-lg mb-[15px] pt-[10px] px-[10px]">
            <div className="grid charging-station-grid-908">
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
              </div>

              <div className="">
                <img className="w-7 h-7 mb-[5px]" src={Redirect2} />
                <img className="w-7 h-7" src={Redirect} />
              </div>
            </div>

            <div className="text-[14px] grid grid charging-station-grid-890 ml-[10px] pb-[10px]">
              <div><img className="w-5 h-5 mt-[4px]" src={PowerRed} /></div>
              <div className="flex">
                <div className="text-[#f10101] mr-[10px]">Ngoài giờ làm việc</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal
        visible={dialogVisible}
        title="Đang hoạt động"
        onClose={() => {
          setDialogVisible(false);
        }}
        verticalActions
      >
        <Box className="bg-[#232933]">
          <div className="">
            <div className="h-[100px] overflow-y-scroll">
              <div className="grid grid-303030">
                <div className="flex justify-center mb-[15px]">
                  <div><img className="w-9 h-9" src={RenewableEnergy} /></div>
                  <div className="grid items-center text-[#42B96C] ml-[15px] text-[20px]">36%</div>
                </div>
                <div className="flex justify-center mb-[15px]">
                  <div><img className="w-9 h-9" src={RenewableEnergy} /></div>
                  <div className="grid items-center text-[#42B96C] ml-[15px] text-[20px]">62%</div>
                </div>
                <div className="flex justify-center mb-[15px]">
                  <div><img className="w-9 h-9" src={RenewableEnergy} /></div>
                  <div className="grid items-center text-[#42B96C] ml-[15px] text-[20px]">45%</div>
                </div>
              </div>

              <div className="grid grid-303030">
                <div className="flex justify-center mb-[15px]">
                  <div><img className="w-9 h-9" src={RenewableEnergy} /></div>
                  <div className="grid items-center text-[#42B96C] ml-[15px] text-[20px]">36%</div>
                </div>
                <div className="flex justify-center mb-[15px]">
                  <div><img className="w-9 h-9" src={RenewableEnergy} /></div>
                  <div className="grid items-center text-[#42B96C] ml-[15px] text-[20px]">62%</div>
                </div>
                <div className="flex justify-center mb-[15px]">
                  <div><img className="w-9 h-9" src={RenewableEnergy} /></div>
                  <div className="grid items-center text-[#42B96C] ml-[15px] text-[20px]">45%</div>
                </div>
              </div>

              <div className="grid grid-303030">
                <div className="flex justify-center mb-[15px]">
                  <div><img className="w-9 h-9" src={RenewableEnergy} /></div>
                  <div className="grid items-center text-[#42B96C] ml-[15px] text-[20px]">36%</div>
                </div>
                <div className="flex justify-center mb-[15px]">
                  <div><img className="w-9 h-9" src={RenewableEnergy} /></div>
                  <div className="grid items-center text-[#42B96C] ml-[15px] text-[20px]">62%</div>
                </div>
                <div className="flex justify-center mb-[15px]">
                  <div><img className="w-9 h-9" src={RenewableEnergy} /></div>
                  <div className="grid items-center text-[#42B96C] ml-[15px] text-[20px]">45%</div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid justify-center">
            <div
             className="grid bg-[#006af5] w-[110px] h-[30px] text-center items-center rounded-xl font-bold mt-[20px]"
             onClick={() => setDialogVisible(false)}
            >
              Đóng
            </div>
          </div>
        </Box>
      </Modal>

      <Modal
        visible={dialogVisibleService}
        title="Dịch vụ"
        onClose={() => {
          setDialogVisibleService(false);
        }}
        verticalActions
      >
        <Box className="bg-[#232933]">
          <div className="px-[15px] mt-[15px]">
            <div className="grid charging-history-grid-1285 my-[5px]">
              <div><img className="w-7 h-7 mt-[4px]" src={ChargingStation} /></div>
              <div className="ml-[10px] text-[16px] grid items-center">Số trụ đang trống là 2</div>
            </div>

            <div className="grid charging-history-grid-1285 my-[5px]">
              <div><img className="w-7 h-7 mt-[4px]" src={Restrooms} /></div>
              <div className="ml-[10px] text-[16px] grid items-center">Có nhà vệ sinh</div>
            </div>

            <div className="grid charging-history-grid-1285 my-[5px]">
              <div><img className="w-7 h-7 mt-[4px]" src={Restaurant} /></div>
              <div className="ml-[10px] text-[16px] grid items-center">Có bán đồ ăn uống</div>
            </div>

            <div className="grid charging-history-grid-1285 my-[5px]">
              <div><img className="w-7 h-7 mt-[4px]" src={Wifi} /></div>
              <div className="ml-[10px] text-[16px] grid items-center">Có wifi</div>
            </div>

            <div className="h-[15px]"></div>
          </div>
          <div className="grid justify-center">
            <div
             className="grid bg-[#006af5] w-[110px] h-[30px] text-center items-center rounded-xl font-bold mt-[20px]"
             onClick={() => setDialogVisibleService(false)}
            >
              Đóng
            </div>
          </div>
        </Box>
      </Modal>
    </Box>
  );
};

const ChargingStationPage: FC = () => {
  return (
    <Page>
      <Header title="Trạm sạc" showBackIcon={true} />
      <Divider />
      <ChargingStationList />
    </Page>
  );
};

export default ChargingStationPage;