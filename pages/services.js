import React from 'react';

import Head from 'next/head';

import Layout from '../layout/layout';
import ClientContent from "../component/contents/clientContent";
import ServicesContent from '../component/contents/servicesContent';

export default function Services () {

  const pagetitle = "Services";

    return (
      <Layout>
        <Head>
          <title>{`${pagetitle} | Expedite Movers Ltd.`}</title>
        </Head>
        <header className="align-items-origin" id="services-header">
          <div>
            <h2 className="primary-title">
              {" "}
              <b> Services </b>
            </h2>
            <h3 className="secondary-title">We provide quality service to give you piece of mind</h3>
          </div>
        </header>
        <ServicesContent />
        <ClientContent />
      </Layout>
    );
};