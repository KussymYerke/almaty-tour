import { tourDetailsOne } from "@/data/tourDetailsPage";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { SwiperSlide } from "swiper/react";

const { title, rate, duration, minAge, tourType, location, date, superb } =
  tourDetailsOne;

const TourDetailsOne = ({ tour }) => {
  return (
    <section className="tour-details">
      <div className="tour-details__top">
        <Container>
          <Row>
            <Col xl={12}>
              <div className="tour-details__top-inner">
                <div className="tour-details__top-left">
                  <h2 className="tour-details__top-title">{tour.title}</h2>
                  <div className="tour-details__top-rate">
                    <span>${tour.rate}</span> / Per Person
                  </div>
                </div>
                <div className="tour-details__top-right">
                  <ul className="list-unstyled tour-details__top-list">
                    <li>
                      <div className="icon">
                        <span className="icon-clock"></span>
                      </div>
                      <div className="text">
                        <p>Duration</p>
                        <h6>{tour.duration} hours</h6>
                      </div>
                    </li>
                    {/* <li>
                      <div className="icon">
                        <span className="icon-user"></span>
                      </div>
                      <div className="text">
                        <p>Min Age</p>
                        <h6>{minAge}</h6>
                      </div>
                    </li> */}
                    {/* <li>
                      <div className="icon">
                        <span className="icon-plane"></span>
                      </div>
                      <div className="text">
                        <p>Tour Type</p>
                        <h6>{tourType}</h6>
                      </div>
                    </li> */}
                    <li>
                      <div className="icon">
                        <span className="icon-place"></span>
                      </div>
                      <div className="text">
                        <p>Location</p>
                        <h6>{tour.location}</h6>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default TourDetailsOne;
