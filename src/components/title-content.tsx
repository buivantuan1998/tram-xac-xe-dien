import React from "react";
import { FC, PropsWithChildren } from "react";
import { Box, Text } from "zmp-ui";
import { BoxProps } from "zmp-ui/box";
import { useNavigate } from "react-router";

import Previous from "static/previous.png";

export interface Props extends BoxProps {
  title: string;
  url: string;
}


export const TitleContent: FC<PropsWithChildren<Props>> = ({
  title,
  url,
}) => {
    const navigate = useNavigate();

    const backPage = () => {
      navigate(url);
    };

    return (
      <Box className="ml-[5px] mb-[15px]">
        <div className="mb-[10px]"></div>
        <div className="grid grid-593">
          <div onClick={() => backPage()}>
            <img className="w-4 h-4 mt-[5px]" src={Previous} />
          </div>

          <div className="">
            <Text.Title className="text-[#fff]">
              {title}
            </Text.Title>
          </div>
        </div>
      </Box>
    );
};