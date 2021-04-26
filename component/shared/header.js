import React from 'react';

import Link from 'next/link';

import { Row, Col } from "react-bootstrap";

export default function Header() {
    return (
      <div className="pt-2 pb-2" id="header">
        <Row>
          <Col className="pl-4 ml-4">
            <img src="https://res.cloudinary.com/hellodewa/image/upload/v1616559517/Moviecritics/images/logos/moviecritics-logo-transparent-background_sjnfhk.png" width={180} height={50} alt="sitelogo" />
          </Col>
          <Col>
            <ul className="nav d-flex mr-sm-2  justify-content-end">
              <li className="nav-item">
                <Link href="/">
                  <a className="nav-link active">Home</a>
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/services">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Locations
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact Us
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </div>
    );
}