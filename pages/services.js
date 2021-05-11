import React from 'react';

import Layout from '../layout/layout';
import ClientContent from "../component/contents/clientContent";
import ServicesContent from '../component/contents/servicesContent';

export default function Services () {
    return (
      <Layout>
        <header className="d-flex justify-content-center align-items-center" id="services-header">
          <div>
            <h2 className="text-center services-title">
              {" "}
              <b> Services </b>
            </h2>
            <h5 className="text-center services-title">We provide quality service to give you piece of mind</h5>
          </div>
        </header>
        <ServicesContent/>
        <ClientContent/>
      </Layout>
    );
};