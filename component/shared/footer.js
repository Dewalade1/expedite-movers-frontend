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
        <Row className="pt-4 pb-4" id="footer-top">
          <Col className="justify-content-center">
            <p className="mt-4 ml-4 pl-4 footer-text">Expeditemovers Ltd. is a highly dynamic logistic service provider positioned to render efficient and personalized service to her esteemed clients with 100% satisfaction guaranteed.</p>
          </Col>
          <Col className="pl-4 justify-content-center">
            <b>
              <h5 className="mt-4 pl-4 ml-4 footer-title">Site Map</h5>
            </b>
            <ul>
              <li className="list-unstyled">
                <Link href="/">
                  <a>
                    <h6 className="footer-link">
                      <ChevronRightIcon /> Home
                    </h6>
                  </a>
                </Link>
              </li>
              <li className="list-unstyled">
                <Link href="/services">
                  <a className="footer-link">
                    <h6>
                      <ChevronRightIcon /> Services
                    </h6>
                  </a>
                </Link>
              </li>
              <li className="list-unstyled">
                <Link href="/about">
                  <a className="footer-link">
                    <h6>
                      <ChevronRightIcon /> About Us
                    </h6>
                  </a>
                </Link>
              </li>
              <li className="list-unstyled">
                <Link href="/contact">
                  <a className="footer-link">
                    <h6>
                      <ChevronRightIcon /> Contact Us
                    </h6>
                  </a>
                </Link>
              </li>
              <li className="list-unstyled">
                <Link href="/locations">
                  <a className="footer-link">
                    <h6>
                      <ChevronRightIcon /> Locations
                    </h6>
                  </a>
                </Link>
              </li>
            </ul>
          </Col>
          <Col className="justify-content-center">
            <b>
              <h5 className="mt-4 ml-4 pl-3 footer-title">Our social Media</h5>
            </b>
            <ul>
              <li className="list-unstyled">
                <Link href="#">
                  <a className="footer-link">
                    <h5>
                      <FacebookIcon /> Facebook
                    </h5>
                  </a>
                </Link>
              </li>
              <li className="list-unstyled">
                <Link href="#">
                  <a className="footer-link">
                    <h5>
                      <TwitterIcon /> Twitter
                    </h5>
                  </a>
                </Link>
              </li>
              <li className="list-unstyled">
                <Link href="#">
                  <a className="footer-link">
                    <h5>
                      <InstagramIcon /> Instagram
                    </h5>
                  </a>
                </Link>
              </li>
              <li className="list-unstyled">
                <Link href="#">
                  <a className="footer-link">
                    <h5>
                      <LinkedInIcon /> LinkdIn
                    </h5>
                  </a>
                </Link>
              </li>
            </ul>
          </Col>
          <Col className="justify-content-center">
            <h5 className="mt-4 footer-title mb-2">Contact Us</h5>
            <Link href="tel:+2348023062321">
              <a className="footer-link">
                <h5>
                  <PhoneIcon className="mr-1" />
                  +234 8023062321
                </h5>
              </a>
            </Link>
            <Link href="tel:+2347065156145">
              <a className="footer-link">
                <h5>
                  <PhoneOutlinedIcon className="mr-1" />
                  +234 7065156145
                </h5>
              </a>
            </Link>
            <Link href="mailto:info@expeditemoversng.com">
              <a className="footer-link">
                <h5>
                  <MailOutlineIcon className="mr-1" />
                  info@expeditemoversng.com
                </h5>
              </a>
            </Link>
            <Link href="mailto:expeditemovers@gmail.com">
              <a className="footer-link">
                <h5>
                  <AlternateEmailIcon className="mr-1" />
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
            | Made in Lagos, Nigeria
          </h6>
        </Row>
      </footer>
    );
}