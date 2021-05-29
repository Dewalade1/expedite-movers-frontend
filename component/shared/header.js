import React, { useState, useEffect } from 'react';

import Link from 'next/link';

import { Row, Col } from "react-bootstrap";

let _ = require("lodash");

export default function Header({onHomePage}) {

  const [colorChange, setColorChange] = useState(false);

  const navLinks = ['Home', 'Services', 'Locations', 'About Us', 'Contact Us'];

  useEffect(function mount() {
  const changeNavbarColor = () => {
    if (window.scrollY >= 40) {
      setColorChange(true);
    } else {
      setColorChange(false);
    }
  };
  window.addEventListener('scroll', changeNavbarColor);

  return function unMount () {
    window.removeEventListener("scroll", changeNavbarColor);
  };
});

    return (
      <nav className={colorChange ? "navbar navbar-expand-lg color-change pt-3 pb-3 pl-4" : "navbar navbar-expand-lg pt-3 pb-3 pl-4"} id="header">
        <Col id={onHomePage ? "home-logo" : "home-logo"}>
          <a className="navbar-brand ml-4" href="#">
            <img src="https://res.cloudinary.com/hellodewa/image/upload/v1616559517/Moviecritics/images/logos/moviecritics-logo-transparent-background_sjnfhk.png" width={180} height={50} alt="sitelogo" />
          </a>
        </Col>
        <Col>
          {/* <div>
            <i className="fas fa-bars"></i>
          </div> */}
            <ul className="navbar-nav d-flex justify-content-end align-items-center">
              {navLinks.map((link) => {
                let kebabLink = _.kebabCase(link);
                let lowerCaseLink = _.toLower(kebabLink);

                return (
                  <li className="nav-item" key={link}>
                    <Link href={lowerCaseLink == "home" ? "/" : `/${lowerCaseLink}`} key={link}>
                      <a className={onHomePage ? "nav-link home-nav-link" : "nav-link my-nav-link"}>{link}</a>
                    </Link>
                  </li>
                );
              })}
            </ul>
        </Col>
      </nav>
    );
}