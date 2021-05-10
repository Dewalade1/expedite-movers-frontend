import React from 'react';

import { Row, Col } from "react-bootstrap";

import Layout from '../layout/layout';

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

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
        <div className="section-wrapper">
          <Row className="mt-4 pt-4">
            <Col>
              <Card variant="outlined">
                <CardContent>
                  <h4>Abuja</h4>
                </CardContent>
              </Card>
            </Col>
            <Col>
              <Card variant="outlined">
                <CardContent>
                  <h4>Lagos</h4>
                </CardContent>
              </Card>
            </Col>
          </Row>
        </div>
      </Layout>
    );
};