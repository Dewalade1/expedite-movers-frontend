import React from 'react';

import {Row, Col } from 'react-bootstrap';

export default function ServicesContent () {
    return (
      <>
        <Row className="section-wrapper black-bg-layout">
          <Col className="d-flex justify-content-end align-items-center">
            <img src="https://res.cloudinary.com/hellodewa/image/upload/v1621628660/expeditemovers/images/sys/distribution_and_haulage_img_jyijyk.jpg" className="service-img" />
          </Col>
          <Col className="d-flex justify-content-center align-items-center">
            <h2>
              <b>Distribution and Haulage</b>
            </h2>
            
          </Col>
        </Row>
        <Row className="section-wrapper blue-bg-layout">
          <Col className="d-flex justify-content-center align-items-center">
            <h2 className="freight-text">
              <b>Freight</b>
            </h2>
            Air, sea and Land
          </Col>
          <Col></Col>
        </Row>
        <Row className="section-wrapper white-bg-layout">
          <Col className="d-flex justify-content-end align-items-center"></Col>
          <Col className="d-flex justify-content-center align-items-center">
            <h2>
              <b>Cold Chain Distributions</b>
            </h2>
          </Col>
        </Row>
        <Row className="section-wrapper blue-bg-layout">
          <Col className="d-flex justify-content-center align-items-center">
            <h2>
              <b>Customs Clearance and Delivery</b>
            </h2>
          </Col>
          <Col></Col>
        </Row>
        <Row className="section-wrapper black-bg-layout">
          <Col className="d-flex justify-content-end align-items-center">
            <img src="https://res.cloudinary.com/hellodewa/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1621629307/expeditemovers/images/sys/warehousing_74855-10158_cjgmqi.jpg" className="service-img" />
          </Col>
          <Col className="d-flex justify-content-center align-items-center">
            <h2>
              <b>Warehousing</b>
            </h2>
          </Col>
        </Row>
        <Row className="section-wrapper white-bg-layout">
          <Col className="d-flex justify-content-center align-items-center">
            <h2>
              <b>Packing and Removal/Relocation</b>
            </h2>
          </Col>
          <Col className="d-flex justify-content-start align-items-center">
            <img src="https://res.cloudinary.com/hellodewa/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1621629300/expeditemovers/images/sys/packing_and_removal_section_52683-45397_xmskvt.jpg" className="service-img" />
          </Col>
        </Row>
      </>
    );
};