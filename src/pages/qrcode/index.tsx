import React, { FC, useEffect, useRef, useState } from "react";
import { Box, Header, Page, Text } from "zmp-ui";
import { Divider } from "components/divider";

import QrScanner from 'react-qr-scanner';
import { useNavigate } from "react-router";

import EnergyOn from "static/energy-on.png";
import EnergyOff from "static/energy-off.png";

declare var ImageCapture: {
    new(videoTrack: MediaStreamTrack): any;
};

const QrCode: FC = () => {
    const [result, setResult] = useState('Chưa có kết quả');
    const [isTorchOn, setIsTorchOn] = useState(false);
    const scannerRef = useRef<any>(null);
    const navigate = useNavigate();

    const handleScan = (data) => {
        console.log("data: ", data);

        if (data) {
            navigate(`/categories`)
        }
    };

    const handleError = (err) => {
        console.error(err);
        setResult('Không thể quét mã QR');
    };

    const previewStyle = {
        height: 400,
        width: 4000,
    };

    const videoConstraints = {
        facingMode: "environment",
    };

    const data = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '80vh',
    }

    const toggleTorch = () => {
        console.log("---------toggleTorch---------");
        setIsTorchOn(!isTorchOn);
    };

    return (
        <Box className="bg-background">
            <div className="flex-col" style={data}>
                <div className="mb-[20px] text-[#fff]">Quét mã QR Code để kích hoạt bộ sạc</div>
                <QrScanner
                    ref={scannerRef}
                    delay={300}
                    style={previewStyle}
                    onError={handleError}
                    onScan={handleScan}
                    constraints={{ video: videoConstraints }}
                />
                <div className="mt-[20px] text-[#fff]">Căn cho QR vào giữa ô vuông</div>
                <div onClick={toggleTorch}>
                    <img className="w-7 h-7 mt-[10px]" src={isTorchOn ? EnergyOn : EnergyOff} />
                </div>
            </div>
        </Box>
    );
};

const QrCodePage: FC = () => {
    const navigate = useNavigate();
    const backHomePage = () => {
        navigate("/");
    };

    return (
        <Page>
            <Header
                title="Quét mã QR Code"
                showBackIcon={true}
                onBackClick={() => backHomePage()}
            />
            <Divider />
            <QrCode />
        </Page>
    );
};

export default QrCodePage;
