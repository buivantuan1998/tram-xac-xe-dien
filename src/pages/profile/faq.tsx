import React, { FC, useState } from "react";
import { Box, Header, Page } from "zmp-ui";

import { useNavigate } from "react-router";

const Personal: FC = () => {
    const borderBottom = {
        borderBottom: "1px solid #808080",
    };

    const [faq, setFaq] = useState([
        { question: "Làm sao để tìm và sử dụng trạm sạc điện gần nhất?", answer: "Bạn có thể sử dụng các ứng dụng di động hoặc bản đồ tích hợp trên xe để tìm các trạm sạc điện gần bạn. Các ứng dụng như Google Maps, PlugShare, hay các ứng dụng của nhà sản xuất xe điện đều có tính năng chỉ dẫn đến các trạm sạc.", isOpen: false },
        { question: "Tôi có cần cáp sạc riêng khi đến trạm sạc không?", answer: "Hầu hết các trạm sạc công cộng đều có sẵn cáp sạc. Tuy nhiên, ở một số trạm sạc chậm hoặc tại nhà, bạn có thể cần mang theo cáp sạc của xe.", isOpen: false },
        { question: "Làm sao để thanh toán khi sử dụng trạm sạc?", answer: "Phần lớn các trạm sạc yêu cầu thanh toán qua ứng dụng di động, thẻ tín dụng hoặc các dịch vụ thanh toán trực tuyến như ví điện tử. Một số trạm có thể yêu cầu bạn tạo tài khoản hoặc đăng ký dịch vụ trước khi sử dụng.", isOpen: false },
        { question: "Chi phí sạc điện tại trạm sạc là bao nhiêu?", answer: "Chi phí sạc xe điện phụ thuộc vào nhiều yếu tố như loại trạm sạc (sạc nhanh hay sạc chậm), vị trí trạm, và nhà cung cấp dịch vụ. Thông thường, giá sạc tại trạm sạc nhanh sẽ cao hơn trạm sạc chậm.", isOpen: false },
        { question: "Sạc điện tại trạm có an toàn không?", answer: "Các trạm sạc điện được thiết kế với nhiều lớp bảo vệ an toàn để tránh rủi ro cháy nổ hoặc điện giật. Tuy nhiên, bạn vẫn nên tuân thủ các hướng dẫn sử dụng, tránh chạm vào cáp hoặc ổ cắm khi đang sạc.", isOpen: false },
    ]);

    const toggleFaq = index => {
        setFaq(faq.map((item, i) => {
            if (i === index) {
                item.isOpen = !item.isOpen;
            } else {
                item.isOpen = false;
            }
            return item;
        }));
    };

    return (
        <Box className="bg-background px-[10px]">
            <div className="text-[#fff]">
                <div className="bg-[#232933] grid mb-[20px] rounded-xl p-[15px]">
                    <div className="mb-[20px]">
                        {faq.map((item, index) => (
                            <div key={index} className="mb-[15px] pb-[10px]" style={borderBottom}>
                                <div className="text-[16px] pointer" onClick={() => toggleFaq(index)}>
                                    Câu hỏi {index + 1}: {item.question}
                                </div>
                                {item.isOpen && <div className="mt-[10px] text-[14px] text-[#555]"> Trả lời: {item.answer}</div>}
                            </div>
                        ))}
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
                title="Câu hỏi thường gặp"
                showBackIcon={true}
                onBackClick={() => redirectProfile()}
            />
            <Personal />
        </Page>
    );
};

export default ProfilePage;