import React, { useState, useEffect } from 'react';

import Link from 'next/link';

import { Col } from "react-bootstrap";

let _ = require("lodash");

export default function NavBar({onHomePage}) {

  const [closeNav, setCloseNav] = useState(true);
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
      <nav className={colorChange || !closeNav ? "navbar navbar-expand-md color-change" : "navbar navbar-expand-md"} id="header">
        <Col xs={6} sm={6} md={3} id="home-logo">
          <a className="navbar-brand ml-4" href="#">
            <img src="https://res.cloudinary.com/hellodewa/image/upload/v1616559517/expeditemovers/images/logos/main_nav_logo_iotyev.png" alt="sitelogo" id="site-logo"/>
          </a>
        </Col>
        <Col xs={3} sm={3} md={9} id="large-devices-nav">
          <ul className="navbar-nav align-items-right">
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
        <Col xs={6} sm={6} md={9} id="sm-devices-nav">
          <div id="sm-nav-btn" onClick={() => setCloseNav(!closeNav)} className={closeNav ? "nav-visible" : "nav-hidden"}>
            <i className="fas fa-bars 2x"></i>
          </div>
          <div id="sm-nav-btn" onClick={() => setCloseNav(!closeNav)} className={!closeNav ? "nav-visible" : "nav-hidden"}>
            <i class="fas fa-times 2x"></i>
          </div>
        </Col>
        <div className={!closeNav ? "nav-visible sm-devices-nav-list" : "nav-hidden"}>
          <ul className="navbar-nav align-items-origin">
            {navLinks.map((link) => {
              let kebabLink = _.kebabCase(link);
              let lowerCaseLink = _.toLower(kebabLink);

              return (
                <li className="nav-item" key={link}>
                  <div className="nav-item-container">
                    <Link href={lowerCaseLink == "home" ? "/" : `/${lowerCaseLink}`} key={link}>
                      <a className={onHomePage ? "nav-link home-nav-link" : "nav-link my-nav-link"}>{link}</a>
                    </Link>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    );
}