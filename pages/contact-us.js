import React from 'react';

import Layout from "../layout/layout";

import { Row, Col } from "react-bootstrap";

import Button from "@material-ui/core/Button";
import { blue } from "@material-ui/core/colors";
import TextField from "@material-ui/core/TextField";
import InputBase from "@material-ui/core/InputBase";
import InputLabel from "@material-ui/core/InputLabel";
import { fade, ThemeProvider, withStyles, makeStyles, createMuiTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

const ValidationTextField = withStyles({
  root: {
    "& input": {
      color: "#e3f2fd",
    },
    "& textarea": {
      color: "#e3f2fd",
    },
    "& label.MuiInputLabel-root": {
      color: "#afafaf",
    },
    "& label.Mui-focused": {
      color: "#90bafa",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "green",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#949494",
      },
      "&:hover fieldset": {
        borderColor: "#e3f2fd",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#90bafa",
      },
    },
  },
})(TextField);

const theme = createMuiTheme({
  palette: {
    primary: blue,
  },
});


export default function Contact () {

  const classes = useStyles();

    return (
      <Layout>
        <Row id="contacts-layout">
          <Col className="pt-4 d-flex align-items-center justify-content-center">
            <form id="contact-form">
              <h2 id="contact-title-dark">
                <b>Let's talk</b>
              </h2>
              <h5 id="contact-subtitle-dark">Wanna have a chat?</h5>
              <div className="contact-textfield">
                <ValidationTextField
                  id="name-textfield"
                  label="name"
                  fullWidth
                  required
                  placeholder="Your name"
                  variant="outlined"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </div>
              <div className="contact-textfield">
                <ValidationTextField
                  id="email-textfield"
                  label="email"
                  fullWidth
                  required
                  placeholder="Your email"
                  variant="outlined"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </div>
              <div className="contact-textfield">
                <ValidationTextField
                  id="message-textfield"
                  label="message"
                  multiline
                  rows={6}
                  fullWidth
                  required
                  placeholder="Enter your message here...."
                  variant="outlined"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </div>
              <Button variant="contained" width="100%" color="primary" size="large" disableElevation fullWidth>
                Send message
              </Button>
            </form>
          </Col>
          <Col className="image-col">
            <img src="https://res.cloudinary.com/hellodewa/image/upload/v1619468681/expeditemovers/images/sys/contact-us-side-image_ql8vme.jpg" alt="man calling on a phone" width="100%" />
          </Col>
        </Row>
      </Layout>
    );
}