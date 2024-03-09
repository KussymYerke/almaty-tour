import videoOne from "@/data/videoOne";
import dynamic from "next/dynamic";
import React, { Fragment, useState } from "react";
import { Col, Container, Row} from "react-bootstrap";
import Image from 'next/image'
import JarallaxImage from "../Jarallax/JarallaxImage";
import VideoModal from "../VideoModal/VideoModal";

const Jarallax = dynamic(() => import("@/components/Jarallax/Jarallax"), {
  ssr: false,
});

const { bg, videoId, title, iconBoxes } = videoOne;

const VideoOne = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <section className="video-one">
        <Jarallax className="video-one-bg" speed={0.2} imgPosition="50% 0%">
          <JarallaxImage src={bg.src} />
        </Jarallax>
        <Container>
          <Row>
            <Col xl={6} lg={6}>
              <div className="video-one__left">
                <h2 className="video-one__title">{title}</h2>
              </div>
              <div className="btn-gap ">
                <a href="/about" className="about-one__btn thm-btn btn-pad">
                  CONTACT US
                </a>
                <a href="#form" className="about-one__btn sub-btn">
                  FILL THE FORM
                </a>
              </div>
              <div className="socials-list">
                <Image width={40} height={40} src={require('./whatsapp.png')} alt="Instagram Logo"/>
                <Image width={40} height={40} src={require('./telegram.png')} alt="Instagram Logo"/>
                <Image width={40} height={40} src={require('./insta.png')} alt="Instagram Logo"/>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default VideoOne;
