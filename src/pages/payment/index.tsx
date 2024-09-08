import React, { FC } from "react";
import { Box, Header, Page, Text } from "zmp-ui";
import { Divider } from "components/divider";
import { useNavigate } from "react-router";

import ChargingBattery from "../payment/charging-battery/index";
import charging from "static/charging-station-1.png";

const PaymentList: FC = () => {
    const navigate = useNavigate();

    const styleWidth = {
        width: 'calc(100% - 40px',
    };

    const redirectChargingBattery = () => {
        navigate('/payment/charging-battery');
    };

    const redirectPrepaidInvoice = () => {
        navigate('/payment/prepaid-invoice');
    };

    const redirectPostpaidInvoice = () => {
        navigate('/payment/postpaid-invoice');
    };

    return (
        <Box className="bg-background">
            <div>
                {/* <div className="h-[260px] bg-[#232933]">
              <div className="h-[25px]"></div>
              <div className="h-[150px] bg-[#4e596a] rounded-xl m-[auto]" style={styleWidth}>
                <div className="h-[50px]"></div>
                <div className="h-[80px] bg-[#525e6d] w-[70%] rounded-xl ml-[15px] grid items-center">
                  <div className="text-[#fff] ml-[10px]">*** *** **** 6015</div>
                </div>
              </div>
              <div className="text-[#fff] ml-[20px] mt-[40px]">Thẻ ATM</div>
            </div> */}

                <div>
                    <Box className="px-[15px] mt-[20px]">
                        <div className="mb-[10px]">
                            <div className="text-[#fff] text-[16px] text-[600]">Hóa đơn dịch vụ</div>
                        </div>
                        <div className="grid grid-cols-3 gap-3">
                            <div onClick={() => redirectChargingBattery()} className="bg-[#232933] grid justify-center pt-[25px] py-[25px] rounded-xl">
                                <img className="w-12 h-12" src={charging} />
                                <Text size="xxSmall" className="text-[#fff] font-bold mt-[5px]">
                                    Sạc pin
                                </Text>
                            </div>
                            {/* <div onClick={() => redirectPrepaidInvoice()} className="bg-[#232933] grid justify-center py-[25px] rounded-xl">
                        <img className="w-12 h-12" src={PrepaidInvoice} />
                        <Text size="xxSmall" className="text-[#fff] font-bold mt-[5px]">
                            Gói trả sau
                        </Text>
                    </div>
                    <div onClick={() => redirectPostpaidInvoice()} className="bg-[#232933] grid justify-center py-[25px] rounded-xl">
                        <img className="w-12 h-12" src={PostpaidInvoice} />
                        <Text size="xxSmall" className="text-[#fff] font-bold mt-[5px]">
                            Gói trả trước
                        </Text>
                    </div> */}
                        </div>
                    </Box>
                </div>
            </div>
        </Box>
    );
};

const PaymentPage: FC = () => {
    const navigate = useNavigate();

    const redirectHomePage = () => {
        navigate("/");
    };

    return (
        <Page>
            <Header
                title="Thanh toán"
                showBackIcon={true}
                onBackClick={() => redirectHomePage()}
            />
            <Divider />
            <ChargingBattery />
        </Page>
    );
};

export default PaymentPage;