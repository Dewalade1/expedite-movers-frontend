import React from 'react';

import Layout from '../layout/layout';
import ServicesList from '../component/servicesList';

export default function Services () {
    return (
      <Layout>
        <header className="d-flex justify-content-center align-items-center" id="services-header">
          <div>
            <h2 className="text-center">
              {" "}
              <b> Services </b>
            </h2>
            <h5 className="text-center">We provide quality service to give you piece of mind</h5>
          </div>
        </header>
        <ServicesList/>
      </Layout>
    );
};