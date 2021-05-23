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
        <header id="admin-header">
          <h1>Admin</h1>{" "}
        </header>
        <Row>
          <Col className="admin-col-layout">
            <Card className="admin-card" variant="outlined">
              <CardHeader title="Databases" />
              <CardContent>
                View and edit your Databases Here
                <Button variant="contained" color="primary" size="medium" disableElevation fullWidth>
                  {" "}
                  Go to Database{" "}
                </Button>
              </CardContent>
            </Card>
          </Col>
          <Col className="admin-col-layout">
            <Card className="admin-card" variant="outlined">
              <CardHeader title="Email" />
              <CardContent>
                View and edit your Databases Here
                <Button variant="contained" color="primary" size="medium" disableElevation fullWidth>
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