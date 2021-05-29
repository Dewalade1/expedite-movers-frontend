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
          <Col className="align-items-left">
            <img src="https://res.cloudinary.com/hellodewa/image/upload/v1621628660/expeditemovers/images/sys/distribution_and_haulage_img_jyijyk.jpg" className="service-img" />
          </Col>
          <Col className="align-items-right">
            <div className="info-container info-container-right">
              <h1 className="service-title-right">
                <b>Distribution and Haulage</b>
              </h1>
              <div className="service-info-right">We provide you with quality and on-time distrobution</div>
            </div>
          </Col>
        </Row>
        <Row className="section-wrapper black-bg-layout">
          <Col className="align-items-left">
            <div className="info-container info-container-left">
              <h1 className="service-title-left">
                <b>Air, Sea and Land Freight</b>
              </h1>
              <div className="service-info-left">We provide you with quality and on-time distrobution</div>
            </div>
          </Col>
          <Col className="align-items-right">
            <img src="https://res.cloudinary.com/hellodewa/image/upload/v1621638438/expeditemovers/images/sys/air-land-and-sea-freight-img_hbybta.jpg" className="service-img" />
          </Col>
        </Row>
        <Row className="section-wrapper black-bg-layout">
          <Col className="align-items-left">
            <img src="https://res.cloudinary.com/hellodewa/image/upload/v1621639615/expeditemovers/images/sys/distribution-img_jxc3dd.jpg" className="service-img" />
          </Col>
          <Col className="align-items-right">
            <div className="info-container info-container-right">
              <h1 className="service-title-right title-adjust-1">
                <b>Cold Chain Distributions</b>
              </h1>
              <div className="service-info-right">We provide you with quality and on-time distrobution</div>
            </div>
          </Col>
        </Row>
        <Row className="section-wrapper black-bg-layout">
          <Col className="align-items-left">
            <div className="info-container info-container-left">
              <h1 className="service-title-left">
                <b>Customs Clearance and Delivery</b>
              </h1>
              <div className="service-info-left">We provide you with quality and on-time distrobution</div>
            </div>
          </Col>
          <Col className="align-items-right">
            <img src="https://res.cloudinary.com/hellodewa/image/upload/v1621639727/expeditemovers/images/sys/customs-clearance-img_leldhv.jpg" className="service-img" />
          </Col>
        </Row>
        <Row className="section-wrapper black-bg-layout">
          <Col className="align-items-left">
            <img src="https://res.cloudinary.com/hellodewa/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1621629307/expeditemovers/images/sys/warehousing_74855-10158_cjgmqi.jpg" className="service-img" />
          </Col>
          <Col className="align-items-right">
            <div className="info-container info-container-right">
              <h1 className="service-title-right title-adjust-2">
                <b>Warehousing</b>
              </h1>
              <div className="service-info-right">We provide you with quality and on-time distrobution</div>
            </div>
          </Col>
        </Row>
        <Row className="section-wrapper black-bg-layout">
          <Col className="align-items-left">
            <div className="info-container info-container-left">
              <h1 className="service-title-left">
                <b>Packing and Removal/Relocation</b>
              </h1>
              <div className="service-info-left">We provide you with quality and on-time distrobution</div>
            </div>
          </Col>
          <Col className="align-items-right">
            <img src="https://res.cloudinary.com/hellodewa/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1621629300/expeditemovers/images/sys/packing_and_removal_section_52683-45397_xmskvt.jpg" className="service-img" />
          </Col>
        </Row>
      </>
    );
};