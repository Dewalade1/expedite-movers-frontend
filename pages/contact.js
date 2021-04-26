import React from 'react';

import Layout from "../layout/layout";

import { Row, Col } from "react-bootstrap";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

export default function Contact () {
    return (
      <Layout>
        <Row>
          <Col className="ml-2 pl-4 mr-2 pr-4 pt-4 align-items-center">
            <form className="mt-4 pt-4" id="contact-form">
              <h4 className="mt-4 pt-2">Contact Us</h4>
              <div className="mb-4">
                <TextField
                  id="name-textfield"
                  label="name"
                  fullWidth
                  placeholder="Your name"
                  variant="outlined"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </div>
              <div className="mb-4">
                <TextField
                  id="email-textfield"
                  label="email"
                  fullWidth
                  placeholder="Your email"
                  variant="outlined"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </div>
              <div className="mb-4">
                <TextField
                  id="message-textfield"
                  label="message"
                  multiline
                  rows={5}
                  fullWidth
                  placeholder="Enter your message here...."
                  variant="outlined"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </div>
              <Button variant="contained" size="large" fullwidth disableElevation color="primary">
                Send message
              </Button>
            </form>
          </Col>
          <Col>
            <img src="https://res.cloudinary.com/hellodewa/image/upload/v1619447228/expeditemovers/images/sys/contact-us-side-image_ql8vme.jpg" alt="man calling on a phone" width="100%" />
          </Col>
        </Row>
      </Layout>
    );
}