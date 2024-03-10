import mainSliderTwoData from "@/data/mainSliderTwoData";
import React from "react";
import SwiperCore, { Autoplay, EffectFade, Navigation } from "swiper";
import { Swiper } from "swiper/react";
import SingleSlide from "./SingleSlide";
import popularToursTwo from "@/data/popularToursTwo";

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

const MainSliderTwo = () => {

  const groupTours = popularToursTwo.groupTours.bg;

  return (
    <section className="main-slider tour-details-slider">
      <Swiper className="thm-swiper__slider" {...mainSlideOptions}>
        <div className="swiper-wrapper">
            <SingleSlide groupTours={groupTours} />
        </div>
      </Swiper>
    </section>
  );
};

export default MainSliderTwo;
