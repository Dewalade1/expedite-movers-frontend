import React from 'react';

import { Row, Col } from "react-bootstrap";

export default function HomeContent () {
    return (
      <div id="home-overlay">
        <Row id="landing-page-wrapper">
          <Col xs={12} sm={12} md={6} lg={6} xl={6} className="align-items-origin">
            <div id="landing-page-col-1">
              <h1 id="main-landing-page-text">
                <b>Welcome to expeditemovers</b>
              </h1>
              <h3 id="landing-page-text">We make your logistics easier for you. When working with us, peace of mind is assured.</h3>
            </div>
          </Col>
          <Col xs={12} sm={12} md={6} lg={6} xl={6} className="align-items-origin">
            <div className="align-items-origin">
              <img src="https://res.cloudinary.com/hellodewa/image/upload/v1620740618/expeditemovers/images/sys/landing-page-img_caukdo.png" id="landing-page-img" />
            </div>
          </Col>
        </Row>
      </div>
    );
};