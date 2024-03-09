import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import TourDetailsLeft from "./TourDetailsLeft";
import TourDetailsSidebar from "./TourDetailsSidebar";
import { useRouter } from "next/router";


const TourDetailsTwo = ({ tour }) => {

  return (
    <section className="tour-details-two">
      <Container>
        <Row>
          <Col xl={8} lg={7}>
            <TourDetailsLeft tour={tour}/>
          </Col>
          <Col xl={4} lg={5}>
            <TourDetailsSidebar />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default TourDetailsTwo;
