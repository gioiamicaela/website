import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import { EffectCube, Pagination } from "swiper";
import { Link } from "react-router-dom";
import img1 from "./hackflix/1.png";
import img2 from "./hackflix/2.png";
import img3 from "./hackflix/3.png";
import img4 from "./hackflix/4.png";
import img5 from "./hackflix/5.png";
import img6 from "./hackflix/6.png";
import img7 from "./hackflix/7.png";

function SwiperComponent() {
  return (
    <>
      <div className="container">
        <Swiper
          effect={"cube"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3}
          cubeEffect={{
            shadow: false,
            slideShadows: false,
            shadowOffset: 20,
            shadowScale: 0.94,
          }}
          pagination={true}
          modules={[EffectCube, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Link to={"https://hackflix-gioia.vercel.app/"} target="_blank">
              <img src={img1} alt={img1} />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to={"https://hackflix-gioia.vercel.app/"} target="_blank">
              <img src={img2} alt={img2} />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to={"https://hackflix-gioia.vercel.app/"} target="_blank">
              <img src={img3} alt={img3} />
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link to={"https://hackflix-gioia.vercel.app/"} target="_blank">
              <img src={img4} alt={img4} />
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link to={"https://hackflix-gioia.vercel.app/"} target="_blank">
              <img src={img5} alt={img5} />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to={"https://hackflix-gioia.vercel.app/"} target="_blank">
              <img src={img6} alt={img6} />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to={"https://hackflix-gioia.vercel.app/"} target="_blank">
              <img src={img7} alt={img7} />
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

export default SwiperComponent;
