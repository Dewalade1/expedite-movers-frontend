import React from 'react';

import Link from 'next/link';

import { Row, Col } from "react-bootstrap";

import PhoneIcon from "@material-ui/icons/Phone";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import PhoneOutlinedIcon from "@material-ui/icons/PhoneOutlined";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";

export default function Footer () {
    return (
      <footer id="footer">
        <Row className="" id="footer-top">
          <Col className="footer-col-left" md={12} lg={5} xl={4}>
            <div id="footer-logo">
              <img src="https://res.cloudinary.com/hellodewa/image/upload/v1622718567/expeditemovers/images/logos/main_nav_logo_greyscale_m92pms.png" id="footer-img" alt="site logo" />
            </div>
            <div id="lg-device-socials">
              <Link href="#" key={'facebook'}>
                <a className="lg-device-socials-icon">
                  <FacebookIcon fontSize="large" />
                </a>
              </Link>
              <Link href="#" key={'twitter'}>
                <a className="lg-device-socials-icon">
                  <TwitterIcon fontSize="large" />
                </a>
              </Link>
              <Link href="#" key={'instagram'}>
                <a className="lg-device-socials-icon">
                  <InstagramIcon fontSize="large" />
                </a>
              </Link>
              <Link href="#"  key={'linkedIn'}>
                <a className="lg-device-socials-icon">
                  <LinkedInIcon fontSize="large" />
                </a>
              </Link>
            </div>
            <p className="footer-text">Expeditemovers Ltd. is a highly dynamic logistic service provider positioned to render efficient and personalized service to her esteemed clients with 100% satisfaction guaranteed.</p>
          </Col>
          <Col className="footer-col" md={12} lg={3} xl={2}>
            <b>
              <h5 className="footer-title">Site Map</h5>
            </b>
            <ul id="site-map-list">
              <li className="list-unstyled" key='home'>
                <Link href="/">
                  <a>
                    <h6 className="footer-link">
                      <ChevronRightIcon className="site-map-icon" /> Home
                    </h6>
                  </a>
                </Link>
              </li>
              <li className="list-unstyled" key='services'>
                <Link href="/services">
                  <a>
                    <h6 className="footer-link">
                      <ChevronRightIcon className="site-map-icon" /> Services
                    </h6>
                  </a>
                </Link>
              </li>
              <li className="list-unstyled" key='about'>
                <Link href="/about">
                  <a>
                    <h6 className="footer-link">
                      <ChevronRightIcon className="site-map-icon" /> About Us
                    </h6>
                  </a>
                </Link>
              </li>
              <li className="list-unstyled" key='contact'>
                <Link href="/contact">
                  <a>
                    <h6 className="footer-link">
                      <ChevronRightIcon className="site-map-icon" /> Contact Us
                    </h6>
                  </a>
                </Link>
              </li>
              <li className="list-unstyled" key='locations'>
                <Link href="/locations">
                  <a>
                    <h6 className="footer-link">
                      <ChevronRightIcon className="site-map-icon" /> Locations
                    </h6>
                  </a>
                </Link>
              </li>
            </ul>
          </Col>
          <Col id="footer-social-media" md={12} lg={4} xl={2}>
            <b>
              <h5 className="footer-title">Our social Media</h5>
            </b>
            <ul>
              <li className="list-unstyled"  key='facebook-desktop'>
                <Link href="#">
                  <a>
                    <h5 className="footer-link">
                      <FacebookIcon className="social-media-icon" /> Facebook
                    </h5>
                  </a>
                </Link>
              </li>
              <li className="list-unstyled" key='twitter-desktop'>
                <Link href="#">
                  <a>
                    <h5 className="footer-link">
                      <TwitterIcon className="social-media-icon" /> Twitter
                    </h5>
                  </a>
                </Link>
              </li>
              <li className="list-unstyled"  key='instagram-desktop'>
                <Link href="#">
                  <a>
                    <h5 className="footer-link">
                      <InstagramIcon className="social-media-icon" /> Instagram
                    </h5>
                  </a>
                </Link>
              </li>
              <li className="list-unstyled"  key='linkedIn-desktop'>
                <Link href="#">
                  <a>
                    <h5 className="footer-link">
                      <LinkedInIcon className="social-media-icon" /> LinkedIn
                    </h5>
                  </a>
                </Link>
              </li>
            </ul>
          </Col>
          <Col className="footer-col" md={12} lg={4} xl={3}>
            <h5 className="footer-title" id="footer-contact-us-title">
              Contact Us
            </h5>
            <Link href="tel:+2348023062321" key='phone'>
              <a>
                <h5 className="footer-link">
                  <PhoneIcon className="contact-icon" />
                  +234 8023062321
                </h5>
              </a>
            </Link>
            <Link href="tel:+2347065156145"  key="alt-phone">
              <a>
                <h5 className="footer-link">
                  <PhoneOutlinedIcon className="contact-icon" />
                  +234 7065156145
                </h5>
              </a>
            </Link>
            <Link href="mailto:contact@expeditemoversng.com"  key="mail">
              <a>
                <h5 className="footer-link">
                  <MailOutlineIcon className="contact-icon" />
                  contact@expeditemoversng.com
                </h5>
              </a>
            </Link>
            <Link href="mailto:info@expeditemoversng.com"  key="alt-mail">
              <a>
                <h5 className="footer-link">
                  <AlternateEmailIcon className="contact-icon" />
                  info@expeditemoversng.com
                </h5>
              </a>
            </Link>
          </Col>
        </Row>
        <Row id="footer-bottom">
          <h6 className="footer-bottom-container">
            <span className="footer-bottom-info">
              &copy; {new Date().getFullYear()}
              {"    "}
              <Link href="#">
                <a className="footer-link"> Dewa </a>
              </Link>
            </span>
            <span className="footer-bottom-divider">| </span>
            <span className="footer-bottom-info">
              Character vectors were found on {" "}
                <a href="https://www.freepik.com/" className="footer-link">
                  Freepik - www.freepik.com
                </a>{" "}
            </span>
            <span className="footer-bottom-divider">|</span>
            <span className="footer-bottom-info"> Made in Lagos, Nigeria </span>
          </h6>
          <h6 className="footer-bottom-container">
            <div className="footer-bottom-info">All photos, vectors, trademarks, service marks, trade names, product names, logos and trade dress appearing on our website are the property of their respective owners.</div>
          </h6>
        </Row>
      </footer>
    );
}