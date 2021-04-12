import React from 'react';

import Link from 'next/link';

import { Row, Col } from "react-bootstrap";

export default function Footer () {
    return (
      <footer id="footer">
        <Row id="footer-top pt-4 pb-4">
          <Col>
            <p className="ml-4 pl-4">Expeditemovers Ltd. is a highly dynamic logistic service provider positioned to render efficient and personalized service to her esteemed clients with 100% satisfaction guaranteed.</p>
          </Col>
          <Col>
            <ul>
              <li className="list-unstyled">
                <Link href="/">
                  <a className="footer-link">Home</a>
                </Link>
              </li>
              <li className="list-unstyled">
                <Link href="/services">
                  <a className="footer-link">Services</a>
                </Link>
              </li>
              <li className="list-unstyled">
                <Link href="/about">
                  <a className="footer-link">About Us</a>
                </Link>
              </li>
              <li className="list-unstyled">
                <Link href="/contact">
                  <a className="footer-link">Contact Us</a>
                </Link>
              </li>
              <li className="list-unstyled">
                <Link href="/locations">
                  <a className="footer-link">Locations</a>
                </Link>
              </li>
            </ul>
          </Col>
          <Col>
            <h6>Our social Media</h6>
            <ul>
              <li className="list-unstyled">
                <Link href="#">
                  <a className="footer-link">Facebook</a>
                </Link>
              </li>
              <li className="list-unstyled">
                <Link href="#">
                  <a className="footer-link">Twitter</a>
                </Link>
              </li>
              <li className="list-unstyled">
                <Link href="#">
                  <a className="footer-link">Instagram</a>
                </Link>
              </li>
              <li className="list-unstyled">
                <Link href="#">
                  <a className="footer-link">LinkdIn</a>
                </Link>
              </li>
            </ul>
          </Col>
        </Row>
        <Row id="footer-bottom">
          <h6 className="text-center pt-2 pb-2">
            &copy; {new Date().getFullYear()}{" "}
            <Link href="/">
              <a className="footer-link"> ExpediteMovers Ltd. </a>
            </Link>
            Made in Lagos, Nigeria
          </h6>
        </Row>
      </footer>
    );
}