import React from "react";
import { Container } from "react-bootstrap";
import { SwiperSlide } from "swiper/react";
import popularToursTwo from "@/data/popularToursTwo";

const SingleSlide = ({ slide = {}, tour}) => {


  const bg1 = tour ? tour.bg : popularToursTwo.groupTours.bg;
  
  return (
    <SwiperSlide>
      <div
        className="image-layer"
        style={{
          backgroundImage: `url(${bg1.src})`,
          overflow: 'hidden',
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
