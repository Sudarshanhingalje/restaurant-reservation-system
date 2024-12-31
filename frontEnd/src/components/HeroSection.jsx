import React, { useEffect } from "react";
import Navbar from "./Navbar";
import "../App.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const HeroSection = () => {
  return (
    <section className="heroSection" id="heroSection">
      <Navbar />

      <section className="container">
        <div className="content__container">
          <h1>
            Welcome to <br />
            <span className="heading__1">Arihant foods</span>
            <br />
            <span className="heading__2">Explore our Food Adventure.</span>
            <br />
          </h1>
          <p>
            Discover an exquisite fusion of flavors and ambiance that promises
            to elevate your dining experience. Indulge in our globally-inspired
            menu, crafted with care and passion. Join us and embark on a journey
            of culinary delight. Your table awaits.
          </p>
          <form action="#">
            <input type="text" placeholder="Send Us A Message" />
            <button type="submit">Send</button>
          </form>
        </div>

        <Swiper
          direction="horizontal"
          loop={true}
          speed={5000}
          pagination={{ clickable: true }}
          navigation={true}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
        >
          <SwiperSlide>
            <div className="image__container">
              <img src="./img1.png" alt="" />
              <img src="./img2.png" alt="" />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="image__container">
              <img src="./img3.png" alt="" />
              <img src="./img4.png" alt="" />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="image__container">
              <img src="./img5.png" alt="" />
              <img src="./img6.png" alt="" />
            </div>
          </SwiperSlide>

        </Swiper>
      </section>
    </section>

  );
};

export default HeroSection;
