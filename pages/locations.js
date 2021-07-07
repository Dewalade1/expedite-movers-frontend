import React from 'react';

import { Row, Col } from "react-bootstrap";

import Head from 'next/head';
import Link from 'next/link';

import Layout from '../layout/layout';

import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";

import PhoneIcon from "@material-ui/icons/Phone";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import PhoneOutlinedIcon from "@material-ui/icons/PhoneOutlined";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";

export default function Locations () {

    const pagetitle = "Locations";

    return (
      <Layout>
        <Head>
          <title>{`${pagetitle} | Expedite Movers Ltd.`}</title>
        </Head>
        <header className="align-items-origin" id="location-header">
          <div>
            <h2 className="primary-title">
              <b>Our Locations</b>
            </h2>
            <h5 className="secondary-title">Find us at our nearest locations</h5>
          </div>
        </header>
        <Row className="location-section section-wrapper">
          <Col xs={12} sm={12} md={12} lg={6} xl={6} className="align-items-origin">
            <Card className="location-card" variant="outlined">
              <CardContent>
                <CardMedia allowfullscreen="true" alt="Map of our location in Lagos" component="iframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.5678452143097!2d3.4442845147406214!3d6.449486795334054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf4ef6230b7f7%3A0xe940b1a33f163690!2s15%20Ojomu%20Rd%2C%20Ikoyi%2C%20Lagos!5e0!3m2!1sen!2sng!4v1620729370516!5m2!1sen!2sng" title="Location in Abuja" width="650" height="300" className="location-map" loading="lazy" />
              </CardContent>
              <hr className="line-width" />
              <CardContent className="align-items-origin">
                <div className="location-card-text-layout">
                  <h1 className="card-title">
                    {" "}
                    <b>Lagos</b>
                  </h1>
                  <div className="location-card-text-container">
                    <Link href="https://goo.gl/maps/yKLv5axFieKFhcC6A">
                      <a className="body-link">
                        <LocationOnIcon /> 15BB, Ojomu (FMLY. Ruxton) Rd., Ikoyi, Lagos, Nigeria
                      </a>
                    </Link>
                  </div>
                  <div className="location-card-text-container">
                    <Link href="/contact-us">
                      <a className="body-link">
                        <MailOutlineIcon /> info@expeditemoversng.com
                      </a>
                    </Link>
                  </div>
                  <div className="location-card-text-container">
                    <Link href="/contact-us">
                      <a className="body-link">
                        <AlternateEmailIcon /> expeditemovers@gmail.com
                      </a>
                    </Link>
                  </div>
                  <div className="location-card-text-container">
                    <Link href="tel:+2348103874982">
                      <a className="body-link">
                        <PhoneIcon /> +234 8103874982
                      </a>
                    </Link>
                  </div>
                  <div className="location-card-text-container">
                    <Link href="tel:+2348179384101">
                      <a className="body-link">
                        <PhoneOutlinedIcon /> +234 8179384101
                      </a>
                    </Link>
                  </div>
                  <div className="location-card-text-container">
                    <Link href="tel:012914338">
                      <a className="body-link">
                        <PhoneOutlinedIcon /> 01-2914338
                      </a>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Col>
          <Col xs={12} sm={12} md={12} lg={6} xl={6} className="align-items-origin">
            <Card className="location-card" variant="outlined">
              <CardContent>
                <CardMedia component="iframe" alt="Map of our location in Abuja" title="Location in Abuja" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.8934100361953!2d7.440046214757513!3d9.07347449349005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0ad43bcc84fd%3A0x3520b427f27b6040!2s29%20Anthony%20Enahoro%20St%2C%20Mabushi%2C%20Abuja!5e0!3m2!1sen!2sng!4v1620727881038!5m2!1sen!2sng" width="650" height="300" className="location-map" allowfullscreen="true" loading="lazy" />
              </CardContent>
              <hr className="line-width" />
              <CardContent className="align-items-origin">
                <div className="location-card-text-layout">
                  <h1 className="card-title">Abuja</h1>
                  <div className="location-card-text-container">
                    <Link href="https://goo.gl/maps/EhP4cgRquqGw1gMo9">
                      <a className="body-link">
                        <LocationOnIcon /> 29, Anthony Enahoro Street, Utako, Abuja, Nigeria
                      </a>
                    </Link>
                  </div>
                  <div className="location-card-text-container">
                    <Link href="/contact-us">
                      <a className="body-link">
                        <MailOutlineIcon /> info@expeditemoversng.com
                      </a>
                    </Link>
                  </div>
                  <div className="location-card-text-container">
                    <Link href="/contact-us">
                      <a className="body-link">
                        <AlternateEmailIcon /> expeditemovers@gmail.com
                      </a>
                    </Link>
                  </div>
                  <div className="location-card-text-container">
                    <Link href="tel:+2348103874982">
                      <a className="body-link">
                        <PhoneIcon /> +234 8103874982
                      </a>
                    </Link>
                  </div>
                  <div className="location-card-text-container">
                    <Link href="tel:+2348179384101">
                      <a className="body-link">
                        <PhoneOutlinedIcon /> +234 8179384101
                      </a>
                    </Link>
                  </div>
                  <div className="location-card-text-container">
                    <Link href="tel:012914338">
                      <a className="body-link">
                        <PhoneOutlinedIcon /> 01-2914338
                      </a>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Col>
        </Row>
      </Layout>
    );
};
