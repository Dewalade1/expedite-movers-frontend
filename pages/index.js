import React from 'react';
import Head from 'next/head';

import Layout from '../layout/layout';
import HomeContent from "../component/contents/homeContent";
import ClientContent from "../component/contents/clientContent";
import ServicesContent from "../component/contents/servicesContent";

export default function Home() {

  const pagetitle = "Home";

  return (
    <Layout onHomePage>
      <Head>
        <title>{`${pagetitle} | Expedite Movers Ltd.`}</title>
        <link rel="canonical" href="https://expeditemoversng.com/" />
      </Head>
      <HomeContent />
      <ClientContent onHomePage />
      <ServicesContent onHomePage />
    </Layout>
  );
}
