import { RowingSharp } from '@material-ui/icons';
import React from 'react';

import { Row, Col } from 'react-bootstrap';

export default function ClientContent () {
    
    return (
      <div className="d-flex justify-content-center text-center" id="client-section">
        <Row>
          <h2 className="main-title pt-4 mt-2">
            <b>Our Clientelle</b>
          </h2>
        </Row>
        <Row>
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
        </Row>
      </div>
    );
};