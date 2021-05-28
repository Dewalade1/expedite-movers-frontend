import React from 'react';

import Layout from '../layout/layout';
import ClientContent from "../component/contents/clientContent";

export default function AboutUs () {
    return (
      <Layout>
        <header className="align-items-origin" id="about-us-header">
          <div>
            <h2 className="primary-title">
              {" "}
              <b> About Us </b>
            </h2>
            <h5 className="secondary-title">Who we are</h5>
          </div>
        </header>
        <ClientContent />
      </Layout>
    );
}