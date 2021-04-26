import React from 'react';

import Layout from "../layout/layout";

import { Row, Col } from "react-bootstrap";

import TextField from "@material-ui/core/TextField";

export default function Contact () {
    return (
      <Layout>
        <Row>
          <Col className="ml-2 pl-4 mr-2 pr-4">
            <h4>Contact Us</h4>
            <TextField id="standard-basic" label="Standard" />
          </Col>
          <Col>
            <img src="https://res.cloudinary.com/hellodewa/image/upload/v1619447228/expeditemovers/images/sys/contact-us-side-image_ql8vme.jpg" alt="man calling on a phone" width="100%" />
          </Col>
        </Row>
      </Layout>
    );
}