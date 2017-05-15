import React from 'react';
import Work from '../../work/Work';
import Contact from '../../contact/Contact';
import About from '../../about/About';
import { Col, Nav, NavItem, Row } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './navigation.css';

const handleSelect = selected => (
  console.log(`Selected: ${selected}`)
);

const Navigation = () => (
  <Router>
    <div>
      <Col lg={12}>
      <Nav bsStyle="pills" className="mainNav fade-in third" onSelect={handleSelect}>
        <LinkContainer to="/about"><NavItem eventKey={'about'}>About</NavItem></LinkContainer>
        <LinkContainer to="/work"><NavItem eventKey={'work'}>Work</NavItem></LinkContainer>
        <LinkContainer to="/contact"><NavItem eventKey={'contact'}>Contact</NavItem></LinkContainer>
      </Nav>
      </Col>
      <div className="fade-in last">
        <Route path="/about" component={About} />
        <Route exact path="/work" component={Work} />
        <Route path="/contact" component={Contact} />
      </div>
    </div>
  </Router>
);
export default Navigation;
