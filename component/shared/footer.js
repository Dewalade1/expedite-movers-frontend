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
          <Col className="pl-4 justify-content-center" md={4}>
            <div className="ml-4 pl-4 mt-4">
              <img src="https://res.cloudinary.com/hellodewa/image/upload/v1616559517/Moviecritics/images/logos/moviecritics-logo-transparent-background_sjnfhk.png" width={180} height={50} alt="sitelogo" />
            </div>
            <p className="mt-4 pt-2 ml-4 pl-4 footer-text">Expeditemovers Ltd. is a highly dynamic logistic service provider positioned to render efficient and personalized service to her esteemed clients with 100% satisfaction guaranteed.</p>
          </Col>
          <Col className="pl-4 justify-content-center" md={2}>
            <b>
              <h5 className="mt-4 pl-4 ml-4 footer-title">Site Map</h5>
            </b>
            <ul>
              <li className="list-unstyled">
                <Link href="/">
                  <a>
                    <h6 className="footer-link">
                      <ChevronRightIcon className="site-map-icon" /> Home
                    </h6>
                  </a>
                </Link>
              </li>
              <li className="list-unstyled">
                <Link href="/services">
                  <a>
                    <h6 className="footer-link">
                      <ChevronRightIcon className="site-map-icon" /> Services
                    </h6>
                  </a>
                </Link>
              </li>
              <li className="list-unstyled">
                <Link href="/about">
                  <a>
                    <h6 className="footer-link">
                      <ChevronRightIcon className="site-map-icon" /> About Us
                    </h6>
                  </a>
                </Link>
              </li>
              <li className="list-unstyled">
                <Link href="/contact">
                  <a>
                    <h6 className="footer-link">
                      <ChevronRightIcon className="site-map-icon" /> Contact Us
                    </h6>
                  </a>
                </Link>
              </li>
              <li className="list-unstyled">
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
          <Col className="pr-4 mr-4 justify-content-center" md={2}>
            <b>
              <h5 className="mt-4 ml-4 pl-3 footer-title">Our social Media</h5>
            </b>
            <ul>
              <li className="list-unstyled">
                <Link href="#">
                  <a>
                    <h5 className="footer-link">
                      <FacebookIcon id="facebook-icon" /> Facebook
                    </h5>
                  </a>
                </Link>
              </li>
              <li className="list-unstyled">
                <Link href="#">
                  <a>
                    <h5 className="footer-link">
                      <TwitterIcon id="twitter-icon" /> Twitter
                    </h5>
                  </a>
                </Link>
              </li>
              <li className="list-unstyled">
                <Link href="#">
                  <a>
                    <h5 className="footer-link">
                      <InstagramIcon id="instagram-icon" /> Instagram
                    </h5>
                  </a>
                </Link>
              </li>
              <li className="list-unstyled">
                <Link href="#">
                  <a>
                    <h5 className="footer-link">
                      <LinkedInIcon id="linkdin-icon" /> LinkedIn
                    </h5>
                  </a>
                </Link>
              </li>
            </ul>
          </Col>
          <Col className="ml-4 pl-4 justify-content-center" md={3}>
            <h5 className="mt-4 footer-title mb-2">Contact Us</h5>
            <Link href="tel:+2348023062321">
              <a>
                <h5 className="footer-link">
                  <PhoneIcon className="mr-1 contact-icon" />
                  +234 8023062321
                </h5>
              </a>
            </Link>
            <Link href="tel:+2347065156145">
              <a>
                <h5 className="footer-link">
                  <PhoneOutlinedIcon className="mr-1 contact-icon" />
                  +234 7065156145
                </h5>
              </a>
            </Link>
            <Link href="mailto:info@expeditemoversng.com">
              <a>
                <h5 className="footer-link">
                  <MailOutlineIcon className="mr-1 contact-icon" />
                  info@expeditemoversng.com
                </h5>
              </a>
            </Link>
            <Link href="mailto:expeditemovers@gmail.com">
              <a>
                <h5 className="footer-link">
                  <AlternateEmailIcon className="mr-1 contact-icon" />
                  expeditemovers@gmail.com
                </h5>
              </a>
            </Link>
          </Col>
        </Row>
        <Row className="justify-content-center" id="footer-bottom">
          <h6 className="pt-2 pb-2">
            &copy; {new Date().getFullYear()}
            {"    "}
            <Link href="#">
              <a className="footer-link"> helloDewa </a>
            </Link>
            | Character vector created by{" "}
            <a href="https://www.freepik.com/vectors/character" className="footer-link">
              vectorjuice - www.freepik.com
            </a>{" "}
            | Made in Lagos, Nigeria
          </h6>
        </Row>
      </footer>
    );
}