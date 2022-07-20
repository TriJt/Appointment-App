import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import triThuc from "../../assets/images/tt-logo.png";
// import required modules
import { Pagination } from "swiper";
const Newpaper = (props) => {
  const newImages = [
    {
      img: triThuc,
    },
    {
      img: triThuc,
    },
    {
      img: triThuc,
    },
    {
      img: triThuc,
    },
    {
      img: triThuc,
    },
    {
      img: triThuc,
    },
    {
      img: triThuc,
    },
    {
      img: triThuc,
    },
  ];

  return (
    <div className="Newpaper__container">
      <div className="Newpaper-title">BÁO CHÍ NÓI GÌ VỀ SEOULSPA.VN</div>
      <Swiper
        slidesPerView={7}
        spaceBetween={40}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >

          {newImages.map((newImage, i) => (
            <SwiperSlide className="Swiper-slice" key={i}>
            <img src={newImage.img} className="img" />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default Newpaper;
