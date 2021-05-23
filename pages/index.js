import React from 'react';

import Layout from '../layout/layout';
import HomeContent from "../component/contents/homeContent";
import ClientContent from "../component/contents/clientContent";
import ServicesContent from "../component/contents/servicesContent";

export default function Home() {

  return (
    <Layout onHomePage>
      <HomeContent />
      <ClientContent />
      <div className="our-services">
        <h1 className="text-center"> Our Services </h1>
        <div className="colored-line"></div>
        <ServicesContent />
      </div>

    </Layout>
  );
}
