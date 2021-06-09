import React from 'react';

import Head from 'next/head';

import { Row, Col } from 'react-bootstrap';

import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";

import Button from "@material-ui/core/Button";

import Layout from '../layout/layout';

export default function Admin () {

    const pagetitle = "Admin";
    
    return (
      <Layout>
        <Head>
          <title>{`${pagetitle} | Expedite Movers Ltd.`}</title>
        </Head>
        <header className="black-bg-layout" id="admin-header">
          <div id="admin-header-overlay">
            <h1 id="admin-header-title"> Welcome to your Admin </h1>{" "}
          </div>
        </header>
        <Row className="section-wrapper black-bg-layout">
          <Col xs={12} sm={12} md={12} lg={4} xl={4} className="admin-col-layout">
            <Card className="admin-card" variant="outlined">
              <CardMedia component="img" alt="MySQL logo" height="300" image="https://res.cloudinary.com/hellodewa/image/upload/v1622811860/expeditemovers/images/logos/mysql_logo_vus2hm.svg" title="Database Card" />
              <hr className="line-width" />
              <b>
                <h2 className="card-title"> Database </h2>
              </b>
              <CardContent>
                <p className="admin-card-text">View and edit your Databases Here</p>
                <Button className="button-layout" variant="contained" color="primary" size="large" disableElevation fullWidth>
                  {" "}
                  Go to Database{" "}
                </Button>
              </CardContent>
            </Card>
          </Col>
          <Col xs={12} sm={12} md={12} lg={4} xl={4} className="admin-col-layout">
            <Card className="admin-card" variant="outlined">
              <CardMedia component="img" alt="cPanel Logo" height="300" image="https://res.cloudinary.com/hellodewa/image/upload/v1621796270/expeditemovers/images/logos/webmail-img_xqogav.jpg" title="Email Access" />
              <hr className="line-width" />
              <b>
                <h2 className="card-title"> Email </h2>
              </b>
              <CardContent>
                <p className="admin-card-text"> View and send your Emails here </p>
                <Button className="button-layout" variant="contained" color="primary" size="large" disableElevation fullWidth>
                  {" "}
                  Access Email{" "}
                </Button>
              </CardContent>
            </Card>
          </Col>
          <Col xs={12} sm={12} md={12} lg={4} xl={4} className="admin-col-layout">
            <Card className="admin-card" variant="outlined">
              <CardMedia component="img" alt="Drift Logo" height="300" image="https://res.cloudinary.com/hellodewa/image/upload/v1622811860/expeditemovers/images/logos/drift_logo_frclcm.svg" title="Drift account Access" />
              <hr className="line-width" />
              <b>
                <h2 className="card-title"> Drift  </h2>
              </b>
              <CardContent>
                <p className="admin-card-text"> Login to your Drift account here </p>
                <Button href="https://start.drift.com/login" className="button-layout" variant="contained" color="primary" size="large" disableElevation fullWidth>
                  {" "}
                  Access Email{" "}
                </Button>
              </CardContent>
            </Card>
          </Col>
        </Row>
      </Layout>
    );
  }