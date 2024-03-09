import React from "react";
import TourDetailsOne from "./TourDetailsOne";
import TourDetailsTwo from "../../components/TourDetails/TourDetailsTwo";
import SiteFooter from "@/components/SiteFooter/SiteFooter";
import Header from "@/components/Header/Header";
import MainSliderTwo from "./MainSliderTwo";
import popularToursTwo from './../../data/popularToursTwo'; // Import the data from popularToursTwo.js


const TourDetailsPage = ({ link }) => {

  const tourData = popularToursTwo.popularTours.find(tour => tour.link === link);

  console.log(tourData)
  console.log(link)

  return (
    <>
     <main className="page-wrapper">
        <Header pageTitle={'Home One'} />
          <MainSliderTwo tour={tourData}/>
          <TourDetailsOne tour={tourData}/>
          <TourDetailsTwo tour={tourData}/>
        <SiteFooter />
      </main>
    </>
  );
};

export async function getServerSideProps({ params }) {
  const link = params?.link || null; // Set tourSlug to null if params.tourSlug is undefined
  return {
    props: {
      link
    }
  };
}

export default TourDetailsPage;
