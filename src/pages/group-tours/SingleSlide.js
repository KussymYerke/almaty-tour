import React from "react";
import { Container } from "react-bootstrap";
import { SwiperSlide } from "swiper/react";
import popularToursTwo from "@/data/popularToursTwo";

const SingleSlide = ({groupTours}) => {

  console.log(groupTours)
  return (
    <SwiperSlide>
      <div
        className="image-layer"
        style={{
          backgroundImage: `url(${groupTours.src})`,
        }}
      ></div>
      <Container>
        <div className="swiper-slide-inner">
        </div>
      </Container>
    </SwiperSlide>
  );
};

export default SingleSlide;
