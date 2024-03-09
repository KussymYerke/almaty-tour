import React, { useEffect, useState } from "react";
import TourDetailsOne from "../../data/tour-folder/TourDetailsOne";
import TourDetailsTwo from "../../components/TourDetails/TourDetailsTwo";
import SiteFooter from "@/components/SiteFooter/SiteFooter";
import Header from "@/components/Header/Header";
import MainSliderTwo from "../../data/tour-folder/MainSliderTwo";
import popularToursTwo from '../../data/popularToursTwo'; // Import the data from popularToursTwo.js

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
      <SiteFooter />
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
