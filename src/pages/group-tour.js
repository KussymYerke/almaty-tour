import React from "react";
import TourDetailsOne from "../data/group-tours/TourDetailsOne";
import TourDetailsTwo from "../data/group-tours/TourDetailsTwo";
import SiteFooter from "@/components/SiteFooter/SiteFooter";
import Header from "@/components/Header/Header";
import MainSliderTwo from "../data/group-tours/MainSliderTwo";


const TourDetailsPage = () => {

  return (
    <>
     <main className="page-wrapper">
        <Header pageTitle={'Home One'} />
          <MainSliderTwo />
          <TourDetailsOne />
          <TourDetailsTwo />
        <SiteFooter />
      </main>
    </>
  );
};


export default TourDetailsPage;
