import React from "react";
import { FC } from "react";
import { Box, Text } from "zmp-ui";

export const BodyContent: FC = () => {
    return (
        <Box className="bg-white grid grid-cols-2 gap-4 p-4">
            <div>
                <img className="w-12 h-12" src="#" />
                <Text size="xxSmall" className="text-gray">
                    Quét QR
                </Text>
            </div>
            <div>
                <img className="w-12 h-12" src="#" />
                <Text size="xxSmall" className="text-gray">
                    Lịch sử sạc
                </Text>
            </div>
            <div>
                <img className="w-12 h-12" src="#" />
                <Text size="xxSmall" className="text-gray">
                    Trạm xạc
                </Text>
            </div>
        </Box>
    );
};
