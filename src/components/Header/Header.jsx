import React from "react";
import { StyledHeader } from "./Header.style";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const Header = () => {
  return (
    <StyledHeader>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="slide-1">
            <h1>Mening birinchi slaydim</h1>
            <div>
              <img
                src="https://media.istockphoto.com/id/618060058/photo/dzhuma-mosque-in-tashkent-uzbekistan.jpg?s=612x612&w=0&k=20&c=5G_H4dlQv-NJRAEQkm3MrNHa3771t-Jbnh8ngKXXF_Q="
                alt=""
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </StyledHeader>
  );
};

export default Header;
