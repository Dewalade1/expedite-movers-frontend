import React, { useState, useEffect } from 'react';

import Link from 'next/link';

import { Row, Col } from "react-bootstrap";

export default function Header() {

  const [colorChange, setColorChange] = useState(false);

  useEffect(function mount() {
  const changeNavbarColor = () => {
    if (window.scrollY >= 40) {
      setColorChange(true);
    } else {
      setColorChange(false);
    }
    console.log(colorChange);
  };
  window.addEventListener('scroll', changeNavbarColor);

  return function unMount () {
    window.removeEventListener("scroll", changeNavbarColor);
  };
});

    return (
      <Row className={colorChange ? "navbar color-change pt-3 pb-3 pl-4" : "navbar pt-3 pb-3 pl-4"} id="header">
        <Col className="pl-4 ml-4">
          <div className="ml-4">
            <img src="https://res.cloudinary.com/hellodewa/image/upload/v1616559517/Moviecritics/images/logos/moviecritics-logo-transparent-background_sjnfhk.png" width={180} height={50} alt="sitelogo" />
          </div>
        </Col>
        <Col>
          <ul className="nav d-flex justify-content-center">
            <li className="nav-item">
              <Link href="/">
                <a className="nav-link link active">Home</a>
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link link" href="/services">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link link" href="/locations">
                Locations
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link link" href="/about">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link link" href="/contact">
                Contact Us
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    );
}