import React from 'react';

import Layout from '../layout/layout';
import ServicesContent from "../component/contents/servicesContent";
import HomeContent from '../component/contents/homeContent';

export default function Home() {

  return (
    <Layout onHomePage>
      <HomeContent/>
      <ServicesContent/>
    </Layout>
  );
}
