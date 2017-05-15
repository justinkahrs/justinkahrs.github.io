import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './header.css';

const Header = props => (
  <Col lg={12}>
    <Row>
      <Col lg={4}>
        <h1 className="fade-in one">{props.main}</h1>
        <h2 className="fade-in two">{props.sub}</h2>
      </Col>
    </Row>
  </Col>
);
export default Header;
