import React, { FC } from "react";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Box } from "zmp-ui";

import BannerHome from "static/banner-01.jpg";

export const Banner: FC = () => {
  return (
    <Box className="bg-white" pb={4}>
      <Swiper
        modules={[Pagination]}
        pagination={{
          clickable: true,
        }}
        autoplay
        loop
        cssMode
      >
        <SwiperSlide className="px-4">
          <Box
            className="w-full rounded-lg aspect-[2/1] bg-cover bg-center bg-skeleton"
            style={{ backgroundImage: `url('${BannerHome}')` }}
          />
        </SwiperSlide>
        <SwiperSlide className="px-4">
          <Box
            className="w-full rounded-lg aspect-[2/1] bg-cover bg-center bg-skeleton"
            style={{ backgroundImage: `url('${BannerHome}')` }}
          />
        </SwiperSlide>
        <SwiperSlide className="px-4">
          <Box
            className="w-full rounded-lg aspect-[2/1] bg-cover bg-center bg-skeleton"
            style={{ backgroundImage: `url('${BannerHome}')` }}
          />
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};
