import Layout from "@/components/Layout/Layout";
import MainSliderTwo from "@/components/MainSliderTwo/MainSliderTwo";
import TourDetailsPage from "src/pages/tours/[link]";
import React from "react";

const TourDetails = () => {
  return (
    <Layout pageTitle="Tours Details">
      <MainSliderTwo />
      <TourDetailsPage />
    </Layout>
  );
};

export default TourDetails;
