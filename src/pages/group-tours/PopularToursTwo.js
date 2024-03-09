import popularToursTwo from "@/data/popularToursTwo";
import groupTours from "@/data/popularToursTwo";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SingleTour from "./SingleTour";
import GroupTour from "../../components/GroupTour/GroupTour";

const { tagline, title, popularTours } = popularToursTwo;

const PopularToursTwo = ({ toursPage = false }) => {
  return (
    <section className="popular-tours-two">
      <Container>
        {!toursPage && (
          <div className="section-title text-center">
            <span className="section-title__tagline">{tagline}</span>
            <h2 className="section-title__title">{title}</h2>
          </div>
        )}
        <Row>
          <h1 className="tour-title">Individual tours</h1>

          {popularTours.map((tour) => (
            <Col
              key={tour.id}
              xl={4}
              lg={6}
              md={6}
              className="animated fadeInUp"
            >
              <SingleTour tour={tour} userSelect />
            </Col>
          ))}

          <h1 className="tour-title" style={{marginTop: 50}}>Group tours</h1>
          <Col
              xl={4}
              lg={6}
              md={6}
              className="animated fadeInUp"
            >
              <GroupTour tour={groupTours} />
          </Col>
          
        </Row>
      </Container>
    </section>
  );
};

export default PopularToursTwo;
