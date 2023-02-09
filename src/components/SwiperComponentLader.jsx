import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import { EffectCube, Pagination } from "swiper";
import { Link } from "react-router-dom";
import img1 from "./laderhack/1.png";
import img2 from "./laderhack/2.png";
import img3 from "./laderhack/3.png";
import img4 from "./laderhack/4.png";
import img5 from "./laderhack/5.png";
import img6 from "./laderhack/6.png";
import img7 from "./laderhack/7.png";
import img8 from "./laderhack/8.png";

function SwiperComponentLader() {
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
            <Link to={"https://laderhack.vercel.app/"} target="_blank">
              <img src={img1} alt={img1} />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to={"https://laderhack.vercel.app/"} target="_blank">
              <img src={img2} alt={img2} />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to={"https://laderhack.vercel.app/"} target="_blank">
              <img src={img3} alt={img3} />
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link to={"https://laderhack.vercel.app//"} target="_blank">
              <img src={img5} alt={img5} />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to={"https://laderhack.vercel.app//"} target="_blank">
              <img src={img6} alt={img6} />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to={"https://laderhack.vercel.app//"} target="_blank">
              <img src={img7} alt={img7} />
            </Link>
          </SwiperSlide>
          <SwiperSlide c>
            <Link to={"https://laderhack.vercel.app//"} target="_blank">
              <img src={img8} alt={img8} />
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

export default SwiperComponentLader;
