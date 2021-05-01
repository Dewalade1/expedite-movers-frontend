import React from 'react';

import { Row, Col } from "react-bootstrap";

import Layout from '../layout/layout';

export default function Home() {
  return (
    <Layout>
      <Row className="section-wrapper" id="landing-page">
        <Col className="ml-4 pl-4 mr-4 pr-4 d-flex align-items-center">
          <div className="landing-page-col-1 pl-4 ml-4">
            <h1 id="main-landing-page-text">
              <b>Welcome to expeditemovers</b>
            </h1>
            <h3 className="landing-page-text d-flex justify-content-center">We make your logistics easier for you. When working with us, peace of mind is assured.</h3>
          </div>
        </Col>
        <Col className="d-flex align-items-center">
          <img src="https://res.cloudinary.com/hellodewa/image/upload/v1619884004/expeditemovers/images/sys/landing-page-img_brmhyv.png" />
        </Col>
      </Row>
      <Row className="section-wrapper"></Row>
    </Layout>
  );
}
