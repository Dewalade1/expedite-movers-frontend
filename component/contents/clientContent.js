import { RowingSharp } from '@material-ui/icons';
import React from 'react';

import { Row, Col } from 'react-bootstrap';

export default function ClientContent ({onHomePage}) {
    
    return (
      <div id="client-section">
        {onHomePage ? null : (
          <div id="client-title">
            <h3> Trusted By </h3>
            <div className="colored-line"></div>
          </div>
        )}
        <div>
          <Row className="align-items-origin">
            <Col xs={6} sm={6} md={2} lg={2} xl={2}>
              <img src="https://res.cloudinary.com/hellodewa/image/upload/v1621641313/expeditemovers/images/logos/usaid-logo-greyscale_bhx281.png" alt="USAID" className="client-logo" />
            </Col>
            <Col xs={6} sm={6} md={2} lg={2} xl={2}>
              <img src="https://res.cloudinary.com/hellodewa/image/upload/v1622234008/expeditemovers/images/logos/who-logo-greyscale_hybdci.png" alt="WHO" className="client-logo" />
            </Col>
            <Col xs={6} sm={6} md={2} lg={2} xl={2}>
              <img src="https://res.cloudinary.com/hellodewa/image/upload/v1622234009/expeditemovers/images/logos/planet-projects-logo-greyscale_qt3vfn.png" alt="Planet Projects" className="client-logo" />
            </Col>
            <Col xs={6} sm={6} md={2} lg={2} xl={2}>
              <img src="https://res.cloudinary.com/hellodewa/image/upload/v1621641313/expeditemovers/images/logos/usaid-logo-greyscale_bhx281.png" alt="USAID" className="client-logo" />
            </Col>
            <Col xs={6} sm={6} md={2} lg={2} xl={2}>
              <img src="https://res.cloudinary.com/hellodewa/image/upload/v1622234008/expeditemovers/images/logos/who-logo-greyscale_hybdci.png" alt="WHO" className="client-logo" />
            </Col>
            <Col xs={6} sm={6} md={2} lg={2} xl={2}>
              <img src="https://res.cloudinary.com/hellodewa/image/upload/v1622234009/expeditemovers/images/logos/planet-projects-logo-greyscale_qt3vfn.png" alt="Planet Projects" className="client-logo" />
            </Col>
          </Row>
        </div>
      </div>
    );
};