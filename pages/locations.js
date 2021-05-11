import React from 'react';

import { Row, Col } from "react-bootstrap";

import Layout from '../layout/layout';

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

import PhoneIcon from "@material-ui/icons/Phone";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import MailOutlineIcon from "@material-ui/icons/MailOutline";

export default function Locations () {
    return (
      <Layout>
        <header className="d-flex justify-content-center align-items-center" id="location-header">
          <Row className="main-title d-flex">
            <h2>
              <b>Our Locations</b>
            </h2>
          </Row>
          <Row className="secondary-title">
            <h5>Find us at our nearest locations</h5>
          </Row>
        </header>
        <Row className="section-wrapper">
          <Col className="d-flex justify-content-center align-items-center">
            <Card className="location-card" variant="outlined">
              <CardContent>
                <h3>Lagos</h3>
                <div>
                  <LocationOnIcon /> 14, Ojomu Road (Formerly Ruxton), Ikoyi, Lagos, Nigeria
                </div>
                <div>
                  <MailOutlineIcon />
                </div>
                <div>
                  <PhoneIcon /> <span href="tel:+2348103874982">+234 8103874982</span>
                </div>
                <div>
                  <PhoneIcon /> <span href="tel:+2348179384101">+234 8179384101</span>
                </div>
              </CardContent>
            </Card>
          </Col>
          <Col className="d-flex justify-content-center align-items-center">
            <Card className="location-card" variant="outlined">
              <CardContent>
                <h3>Abuja</h3>
              </CardContent>
            </Card>
          </Col>
        </Row>
      </Layout>
    );
};