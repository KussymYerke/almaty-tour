import React, { useEffect, useState } from "react";
import TourDetailsOne from "../../data/tour-folder/TourDetailsOne";
import TourDetailsTwo from "../../components/TourDetails/TourDetailsTwo";
import SiteFooter from "@/components/SiteFooter/SiteFooter";
import Header from "@/components/Header/Header";
import MainSliderTwo from "../../data/tour-folder/MainSliderTwo";
import popularToursTwo from '../../data/popularToursTwo'; // Import the data from popularToursTwo.js
import { Col, Container, Image, Row } from "react-bootstrap";
import Link from "next/link";
import footerData from "@/data/footerData";


const { logo, icons, companies, explore, social, year, author, about } =
  footerData;

const LinkPage = ({ tourLink }) => {
  const [tour, setTour] = useState(null);

  useEffect(() => {
    const tourData = popularToursTwo.popularTours.find(tour => tour.link === tourLink);
    setTour(tourData);
  }, [tourLink]);

  if (!tour) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header pageTitle={'Home One'} />
      <MainSliderTwo tour={tour}  />
      <TourDetailsOne tour={tour} />
      <TourDetailsTwo tour={tour} />
      <footer className="site-footer" style={{maxWidth: '100%'}}>
      <div className="site-footer__top">
        <Container>
          <div className="site-footer__top-inner">
            <Row>
              <Col xl={4} lg={6} md={6} className="animated fadeInUp">
                <div className="footer-widget__column footer-widget__about">
                  <div className="footer-widget__about-logo">
                    <Link href="/" passHref>
                        <Image width='169' src={logo.src} alt="" />
                    </Link>
                  </div>
                  <p className="footer-widget__about-text">{about}</p>
                </div>
              </Col>
              <Col xl={2} lg={6} md={6} className="animated fadeInUp">
                <div className="footer-widget__column footer-widget__company clearfix">
                  <h3 className="footer-widget__title">Company</h3>
                  <ul className="footer-widget__company-list list-unstyled">
                    {companies.map(({ id, link, title }) => (
                      <li key={id}>
                        {link.includes("/") ? (
                          <Link href={link}>{title}</Link>
                        ) : (
                          <a target="_blank" rel="noreferrer" href={link}>
                            {title}
                          </a>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
      <div className="site-footer__bottom">
      </div>
    </footer>
    </>
  );
};

export async function getServerSideProps({ params }) {
  const tourLink = params?.link || null; // Get the tour link from dynamic route params
  return {
    props: {
      tourLink
    }
  };
}

export default LinkPage;
