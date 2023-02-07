import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper";
import styles from "./SwiperComponent.module.css";
import { Link } from "react-router-dom";
import img1 from "./laderhack/1.png";
import img2 from "./laderhack/2.png";
import img3 from "./laderhack/3.png";
import img7 from "./laderhack/7.png";
import img5 from "./laderhack/5.png";
import img6 from "./laderhack/6.png";

function SwiperComponentLader() {
  return (
    <>
      <div className="container">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={8}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide className={styles.movieGrid}>
            <Link to={"https://laderhack.vercel.app/"} target="_blank">
              <img
                src={img1}
                alt={img1}
                className={styles.movieImage}
                width={340}
                height={290}
              />
            </Link>
          </SwiperSlide>
          <SwiperSlide className={styles.movieGrid}>
            <Link to={"https://laderhack.vercel.app/"} target="_blank">
              <img
                src={img2}
                alt={img2}
                className={styles.movieImage}
                width={345}
                height={300}
              />
            </Link>
          </SwiperSlide>
          <SwiperSlide className={styles.movieGrid}>
            <Link to={"https://laderhack.vercel.app/"} target="_blank">
              <img
                src={img3}
                alt={img3}
                className={styles.movieImage}
                width={345}
                height={270}
              />
            </Link>
          </SwiperSlide>

          <SwiperSlide className={styles.movieGrid}>
            <Link to={"https://laderhack.vercel.app/"} target="_blank">
              <img
                src={img5}
                alt={img5}
                className={styles.movieImage}
                width={350}
                height={300}
              />
            </Link>
          </SwiperSlide>
          <SwiperSlide className={styles.movieGrid}>
            <Link to={"https://laderhack.vercel.app//"} target="_blank">
              <img
                src={img6}
                alt={img6}
                className={styles.movieImage}
                width={320}
                height={300}
              />
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

export default SwiperComponentLader;
