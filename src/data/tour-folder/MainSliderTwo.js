import mainSliderTwoData from "@/data/mainSliderTwoData";
import React from "react";
import SwiperCore, { Autoplay, EffectFade, Navigation } from "swiper";
import { Swiper } from "swiper/react";
import SingleSlide from "./SingleSlide";

SwiperCore.use([Autoplay, Navigation, EffectFade]);

const mainSlideOptions = {
  slidesPerView: 1,
  loop: true,
  effect: "fade",
  navigation: {
    nextEl: "#main-slider__swiper-button-next",
    prevEl: "#main-slider__swiper-button-prev",
    clickable: true,
  },
  autoplay: {
    delay: 5000,
  },
};

const MainSliderTwo = ({tour}) => {
  return (
    <section className="main-slider tour-details-slider" style={{overflowY: 'hidden'}}>
      <Swiper className="thm-swiper__slider" {...mainSlideOptions}>
        <div className="swiper-wrapper">
          {mainSliderTwoData.map((slide) => (
            <SingleSlide key={slide.id} slide={slide} tour={tour} />
          ))}
        </div>
      </Swiper>
    </section>
  );
};

export default MainSliderTwo;
