import AboutOne from "@/components/AboutOne/AboutOne";
import DestinationsOne from "@/components/DestinationsOne/DestinationsOne";
import Form from "@/components/Form/Form";
import GalleryOne from "@/components/GalleryOne/GalleryOne";
import Layout from "@/components/Layout/Layout";
import MainSlider from "@/components/MainSlider/MainSlider";
import TestimonialOne from "@/components/TestimonialOne/TestimonialOne";
import VideoOne from "@/components/VideoOne/VideoOne";
import React from "react";

const Home = () => {
  return (
    <Layout pageTitle="Home One">
      <MainSlider />
      <DestinationsOne />
      <AboutOne />
      <VideoOne />
      <TestimonialOne />
      <GalleryOne />
      <Form/>
    </Layout>
  );
};

export default Home;
