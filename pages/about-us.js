import React from 'react';
import Head from 'next/head';

import Layout from '../layout/layout';
import ClientContent from "../component/contents/clientContent";
import AboutUsContent from "../component/contents/aboutUsContent";

export default function AboutUs () {

  const pagetitle = "About Us";

    return (
      <Layout>
        <Head>
          <title>{`${pagetitle} | Expedite Movers Ltd.`}</title>
          <link rel="canonical" href="https://expeditemoversng.com/about-us" />
        </Head>
        <header className="align-items-origin" id="about-us-header">
          <div>
            <h2 className="primary-title">
              {" "}
              <b> About Us </b>
            </h2>
            <h5 className="secondary-title">Who we are</h5>
          </div>
        </header>
        <AboutUsContent />
        <ClientContent />
      </Layout>
    );
}
