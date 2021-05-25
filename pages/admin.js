import React from 'react';

import { Row, Col } from 'react-bootstrap';

import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";

import Button from "@material-ui/core/Button";

import Layout from '../layout/layout';

export default function Admin () {
    return (
      <Layout>
        <header className="black-bg-layout" id="admin-header">
          <div className="admin-header-overlay">
            <h1 className="admin-header-title"> Welcome to your Admin </h1>{" "}
          </div>
        </header>
        <Row className="section-wrapper black-bg-layout">
          <Col className="admin-col-layout">
            <Card className="admin-card" variant="outlined">
              <CardMedia component="img" alt="MySQL logo" height="300" image="https://res.cloudinary.com/hellodewa/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1621807057/expeditemovers/images/logos/mysql_logo_y7mbve.jpg" title="Database Card" />
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
          <Col className="admin-col-layout">
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
        </Row>
      </Layout>
    );
}