import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './header.css';

const Header = props => (
  <Col lg={12}>
    <Row>
      <Col lg={4}>
        <h1 id="header">{props.main}</h1>
        <h2 id="subHeader">{props.sub}</h2>
      </Col>
    </Row>
  </Col>
);
export default Header;
