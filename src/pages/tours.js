
import Form from "@/components/Form/Form";
import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/PageHeader/PageHeader";
import PopularToursTwo from "@/data/tour-folder/PopularToursTwo";
import React from "react";

const Tours = () => {
  return (
    <Layout pageTitle="Tours">
        <PageHeader title="Popular Tours" page="Tours" />
        <PopularToursTwo toursPage />
        <Form/>
    </Layout>
  );
};

export default Tours;
