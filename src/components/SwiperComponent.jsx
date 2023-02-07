import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper";
import styles from "./SwiperComponent.module.css";
import { Link } from "react-router-dom";
import img1 from "./hackflix/1.jpg";
import img2 from "./hackflix/2.jpg";
import img3 from "./hackflix/3.jpg";
import img9 from "./hackflix/9.png";
import img5 from "./hackflix/5.jpg";
import img6 from "./hackflix/6.jpg";
import img7 from "./hackflix/7.jpg";

function SwiperComponent() {
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
            <Link to={"https://hackflix-gioia.vercel.app/"} target="_blank">
              <img
                src={img2}
                alt={img2}
                className={styles.movieImage}
                width={320}
                height={300}
              />
            </Link>
          </SwiperSlide>
          <SwiperSlide className={styles.movieGrid}>
            <Link to={"https://hackflix-gioia.vercel.app/"} target="_blank">
              <img
                src={img9}
                alt={img9}
                className={styles.movieImage}
                width={320}
                height={300}
              />
            </Link>
          </SwiperSlide>
          <SwiperSlide className={styles.movieGrid}>
            <Link to={"https://hackflix-gioia.vercel.app/"} target="_blank">
              <img
                src={img3}
                alt={img3}
                className={styles.movieImage}
                width={320}
                height={300}
              />
            </Link>
          </SwiperSlide>

          <SwiperSlide className={styles.movieGrid}>
            <Link to={"https://hackflix-gioia.vercel.app/"} target="_blank">
              <img
                src={img5}
                alt={img5}
                className={styles.movieImage}
                wwidth={320}
                height={300}
              />
            </Link>
          </SwiperSlide>

          <SwiperSlide className={styles.movieGrid}>
            <Link to={"https://hackflix-gioia.vercel.app/"} target="_blank">
              <img
                src={img1}
                alt={img1}
                className={styles.movieImage}
                width={320}
                height={300}
              />
            </Link>
          </SwiperSlide>
          <SwiperSlide className={styles.movieGrid}>
            <Link to={"https://hackflix-gioia.vercel.app/"} target="_blank">
              <img
                src={img7}
                alt={img7}
                className={styles.movieImage}
                width={320}
                height={300}
              />
            </Link>
          </SwiperSlide>
          <SwiperSlide className={styles.movieGrid}>
            <Link to={"https://hackflix-gioia.vercel.app/"} target="_blank">
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

export default SwiperComponent;
