import React from 'react';

import {Row, Col } from 'react-bootstrap';

export default function ServicesContent ({onHomePage}) {
    return (
      <>
        {onHomePage ? (
          <div className="section-title black-bg-layout">
            <h1 className="text-center"> Our Services </h1>
            <div className="colored-line"></div>
          </div>
        ) : null}

        <Row className="section-wrapper black-bg-layout">
          <Col sm={12} md={6} className="align-items-left service-img-col">
            <img src="https://res.cloudinary.com/hellodewa/image/upload/v1623238300/expeditemovers/images/sys/distribution-pic_b9ur41.jpg" className="service-img" />
          </Col>
          <Col sm={12} md={6} className="align-items-right service-info-col">
            <div className="info-container info-container-right">
              <h1 className="service-title-right">
                <b>Distribution and Haulage</b>
              </h1>
              <div className="service-info-right">We provide you with quality and on-time distrobution</div>
            </div>
          </Col>
        </Row>
        <Row className="section-wrapper black-bg-layout">
          <Col sm={12} md={6} className="align-items-left service-info-col">
            <div className="info-container info-container-left">
              <h1 className="service-title-left">
                <b>Air, Sea and Land Freight</b>
              </h1>
              <div className="service-info-left">We provide you with quality and on-time distrobution</div>
            </div>
          </Col>
          <Col sm={12} md={6} className="align-items-right service-img-col">
            <img src="https://res.cloudinary.com/hellodewa/image/upload/v1623238301/expeditemovers/images/sys/air-land-sea-frieght_nwgyma.jpg" className="service-img" />
          </Col>
        </Row>
        <Row className="section-wrapper black-bg-layout">
          <Col sm={12} md={6} className="align-items-left service-img-col">
            <img src="https://res.cloudinary.com/hellodewa/image/upload/v1623238311/expeditemovers/images/sys/cold-chain-distribution-img_wf37g6.jpg" className="service-img" />
          </Col>
          <Col sm={12} md={6} className="align-items-right service-info-col">
            <div className="info-container info-container-right">
              <h1 className="service-title-right title-adjust-1">
                <b>Cold Chain Distributions</b>
              </h1>
              <div className="service-info-right">We provide you with quality and on-time distrobution</div>
            </div>
          </Col>
        </Row>
        <Row className="section-wrapper black-bg-layout">
          <Col sm={12} md={6} className="align-items-left service-info-col">
            <div className="info-container info-container-left">
              <h1 className="service-title-left">
                <b>Customs Clearance and Delivery</b>
              </h1>
              <div className="service-info-left">We provide you with quality and on-time distrobution</div>
            </div>
          </Col>
          <Col sm={12} md={6} className="align-items-right service-img-col">
            <img src="https://res.cloudinary.com/hellodewa/image/upload/v1623238289/expeditemovers/images/sys/delivery-pic-2_ghyh4r.jpg" className="service-img" />
          </Col>
        </Row>
        <Row className="section-wrapper black-bg-layout">
          <Col sm={12} md={6} className="align-items-left service-img-col">
            <img src="https://res.cloudinary.com/hellodewa/image/upload/v1623238294/expeditemovers/images/sys/warehousing-imgs_dtmcdl.jpg" className="service-img" />
          </Col>
          <Col sm={12} md={6} className="align-items-right service-info-col">
            <div className="info-container info-container-right">
              <h1 className="service-title-right title-adjust-2">
                <b>Warehousing</b>
              </h1>
              <div className="service-info-right">We provide you with quality and on-time distrobution</div>
            </div>
          </Col>
        </Row>
        <Row className="section-wrapper black-bg-layout">
          <Col sm={12} md={6} className="align-items-left service-info-col">
            <div className="info-container info-container-left">
              <h1 className="service-title-left">
                <b>Packing and Removal/Relocation</b>
              </h1>
              <div className="service-info-left">We provide you with quality and on-time distrobution</div>
            </div>
          </Col>
          <Col sm={12} md={6} className="align-items-right service-img-col">
            <img src="https://res.cloudinary.com/hellodewa/image/upload/v1623238306/expeditemovers/images/sys/packing-and-removal-img_cailei.jpg" className="service-img" />
          </Col>
        </Row>
      </>
    );
};