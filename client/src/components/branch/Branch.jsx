import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";
// import required modules
import { FreeMode, Scrollbar, Mousewheel } from "swiper";
import { AiFillStar } from "react-icons/ai";
import Categories from "./Category";
import FooterTop from "./FooterTop";

const Branch = () => {
  const [active, setActive] = useState("Branch-btn");
  const [data, setData] = useState(Categories);

  const filterCity = (catCity, value) => {
    const result = Categories.filter((curData) => {
      return curData.city === catCity  ;
    });
    setData(result);

  };

  return (
    <div className="Branch__container">
      <div className="Branch-block">
        <div className="Branch-top">
          <div className="Branch-title">
            HỆ THỐNG 45 CHI NHÁNH TRÊN TOÀN QUỐC
          </div>
          <div className="Branch-seclect">
            <button
              className={active}
              onClick={() => setData(Categories)}
            >
              Tất cả
            </button>
            <button
              className={active}
              value="1"
              onClick={() => filterCity("Hồ Chí Minh", "1")}
            >
              Hồ Chí Minh
            </button>
            <button className={active}
              value="2"
             onClick={() => filterCity("Hà Nội", "2")}>
              Hà Nội
            </button>
            <button className={active} onClick={() => filterCity("Miền Nam")}>
              Miền Nam
            </button>
            <button className={active} onClick={() => filterCity("Miền Trung")}>
              Miền Trung
            </button>
            <button className={active} onClick={() => filterCity("Miền Tây")}>
              Miền Tây
            </button>
            <button className={active} onClick={() => filterCity("Tây Nguyên")}>
              Tây Nguyên
            </button>
          </div>
        </div>

        <div className="branch-content">
          <Swiper
            direction={"vertical"}
            slidesPerView={"auto"}
            freeMode={true}
            scrollbar={true}
            mousewheel={true}
            modules={[FreeMode, Scrollbar, Mousewheel]}
            className="swiper"
          >
            <SwiperSlide className="swiper-slide">
              <div className="Branch-b">
                {data.map((item, i) => (
                  <div className="branchWrapper" key={i}>
                    <div className="Branch-distris">{item.distris}</div>
                    <div className="Branch-address">{item.address}</div>
                    <AiFillStar style={{ color: "rgb(234, 75, 101)" }} />
                  </div>
                ))}
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

    </div>
  );
};

export default Branch;
