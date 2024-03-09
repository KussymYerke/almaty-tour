import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import TourDetailsLeft from "./TourDetailsLeft";
import TourDetailsSidebar from "./TourDetailsSidebar";
import { useRouter } from "next/router";
import SiteFooter from "@/components/SiteFooter/SiteFooter";


const TourDetailss = () => {

  const router = useRouter();
  const { link } = router.query;

  return (
      <section className="tour-details-two">
        <Container>
          <Row>
            <Col xl={8} lg={7}>
              <TourDetailsLeft />
            </Col>
            <Col xl={4} lg={5}>
              <TourDetailsSidebar />
            </Col>
          </Row>
        </Container>
      </section>
  );
};

export default TourDetailss;
