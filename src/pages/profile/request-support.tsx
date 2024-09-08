import React, { FC, useState } from "react";
import { Box, Header, Page } from "zmp-ui";

import { useNavigate } from "react-router";

const Personal: FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        // TODO
    };

    return (
        <Box className="bg-background px-[15px]">
            <div className="text-[#fff] mt-[20px]">
                <form onSubmit={handleSubmit} className="form-submit form">
                    <div className="form-group">
                        <label htmlFor="name" className="text-[16px]">Tên của bạn</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className="input mt-[5px]"
                            placeholder="Nhập tên của bạn"
                        />
                    </div>

                    <div className="form-group ">
                        <label htmlFor="email" className="text-[16px]">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="input mt-[5px]"
                            placeholder="Nhập email của bạn"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="phone" className="text-[16px]">Số điện thoại</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="input mt-[5px]"
                            placeholder="Nhập số điện thoại của bạn"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="message" className="text-[16px]">Nội dung yêu cầu</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            className="textarea mt-[5px]"
                            placeholder="Nhập nội dung yêu cầu"
                        ></textarea>
                    </div>

                    <div className="grid justify-center">
                        <button type="submit" className="btn-submit">Gửi yêu cầu</button>
                    </div>
                </form>
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
                title="Yêu cầu hỗ trợ"
                showBackIcon={true}
                onBackClick={() => redirectProfile()}
            />
            <Personal />
        </Page>
    );
};

export default ProfilePage;