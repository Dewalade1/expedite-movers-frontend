import React from 'react';

import {Row, Col } from 'react-bootstrap';

export default function ServicesContent () {
    return (
      <>
        <Row className="section-wrapper">
          <Col></Col>
          <Col className="d-flex justify-content-center align-items-center">
            <h2 className="primary-title">
              <b>Distribution and Haulage</b>
            </h2>
          </Col>
        </Row>
        <Row className="section-wrapper">
          <Col className="d-flex justify-content-center align-items-center">
            <h2 className="primary-title">
              <b>Freight</b>
            </h2>
            Air, sea and Land
          </Col>
          <Col></Col>
        </Row>
        <Row className="section-wrapper">
          <Col></Col>
          <Col className="d-flex justify-content-center align-items-center">
            <h2 className="primary-title">
              <b>Cold Chain Distributions</b>
            </h2>
          </Col>
        </Row>
        <Row className="section-wrapper">
          <Col className="d-flex justify-content-center align-items-center">
            <h2 className="primary-title">
              <b>Customs Clearance and Delivery</b>
            </h2>
          </Col>
          <Col></Col>
        </Row>
        <Row className="section-wrapper">
          <Col></Col>
          <Col className="d-flex justify-content-center align-items-center">
            <h2 className="primary-title">
              <b>Construction Logistics</b>
            </h2>
          </Col>
        </Row>
        <Row className="section-wrapper">
          <Col className="d-flex justify-content-center align-items-center">
            <h2 className="primary-title">
              <b>Packing and Removal/Relocation</b>
            </h2>
          </Col>
          <Col></Col>
        </Row>
      </>
    );
};