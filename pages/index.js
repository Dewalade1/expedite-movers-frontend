import React from 'react';

import Layout from '../layout/layout';
import HomeContent from "../component/contents/homeContent";
import ClientContent from "../component/contents/clientContent";
import ServicesContent from "../component/contents/servicesContent";

export default function Home() {

  return (
    <Layout onHomePage>
      <HomeContent />
      <ClientContent onHomePage />
      <ServicesContent onHomePage />
    </Layout>
  );
}
