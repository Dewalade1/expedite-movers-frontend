import React from 'react';

import Layout from '../layout/layout';
import ClientContent from "../component/contents/clientContent";

export default function AboutUs () {
    return (
      <Layout>
        <header className="d-flex justify-content-center align-items-center" id="about-us-header">
          <div>
            <h2 className="text-center about-us-title">
              {" "}
              <b> About Us </b>
            </h2>
            <h5 className="text-center services-title">Who we are</h5>
          </div>
        </header>
        <ClientContent />
      </Layout>
    );
}