import React from 'react';

import { Row, Col } from "react-bootstrap";

import Layout from '../layout/layout';

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

import PhoneIcon from "@material-ui/icons/Phone";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import PhoneOutlinedIcon from "@material-ui/icons/PhoneOutlined";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";

export default function Locations () {
    return (
      <Layout>
        <header className="d-flex justify-content-center align-items-center" id="location-header">
          <div>
            <h2 className="main-title text-center">
              <b>Our Locations</b>
            </h2>
            <h5 className="secondary-title text-center">Find us at our nearest locations</h5>
          </div>
        </header>
        <Row className="section-wrapper location-section">
          <Col className="d-flex justify-content-center align-items-center">
            <Card className="location-card" variant="outlined">
              <CardContent className="d-flex align-items-center justify-content-center">
                <div>
                  <h2 className="pb-4">
                    {" "}
                    <b>Lagos</b>
                  </h2>
                  <div className="pb-2">
                    <LocationOnIcon /> 14, Ojomu Road (Formerly Ruxton), Ikoyi, Lagos, Nigeria
                  </div>
                  <div className="pb-2">
                    <MailOutlineIcon /> <span href="/contact-us">info@expeditemoversng.com </span>
                  </div>
                  <div className="pb-2">
                    <AlternateEmailIcon /> <span href="/contact-us"> expeditemovers@gmail.com </span>
                  </div>
                  <div className="pb-2">
                    <PhoneIcon /> <span href="tel:+2348103874982"> +234 8103874982</span>
                  </div>
                  <div className="pb-2">
                    <PhoneOutlinedIcon /> <span href="tel:+2348179384101"> +234 8179384101</span>
                  </div>
                  <div className="pb-2">
                    <PhoneOutlinedIcon /> <span href="tel:012914338"> 01-2914338</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Col>
          <Col className="d-flex justify-content-center align-items-center">
            <Card className="location-card" variant="outlined">
              <CardContent className="d-flex align-items-center justify-content-center">
                <div>
                  <h2>
                    <b>Abuja</b>
                  </h2>
                  <div className="pb-2">
                    <LocationOnIcon /> 29, Anthony Enahoro Street, Utako, Abuja, Nigeria
                  </div>
                  <div className="pb-2">
                    <MailOutlineIcon /> <span href="/contact-us">info@expeditemoversng.com </span>
                  </div>
                  <div className="pb-2">
                    <AlternateEmailIcon /> <span href="/contact-us"> expeditemovers@gmail.com </span>
                  </div>
                  <div className="pb-2">
                    <PhoneIcon /> <span href="tel:+2348103874982"> +234 8103874982</span>
                  </div>
                  <div className="pb-2">
                    <PhoneOutlinedIcon /> <span href="tel:+2348179384101"> +234 8179384101</span>
                  </div>
                  <div className="pb-2">
                    <PhoneOutlinedIcon /> <span href="tel:012914338"> 01-2914338</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Col>
        </Row>
      </Layout>
    );
};