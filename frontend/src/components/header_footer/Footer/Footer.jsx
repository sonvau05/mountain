import React from 'react';
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <Navbar bg="dark" variant="dark" className="py-3">
      <Container>
        <Row>
          <Col className="text-white">
            <p className="mb-0">Alpine Ascents International | 109 W. Mercer St. - Seattle, WA 98119 | phone: 206.378.1927 | Climb@AlpineAscents.com</p>
          </Col>
          <Col className="text-right text-white">
            <Nav className="justify-content-end">
              <Nav.Link href="#" className="text-white">
                <FontAwesomeIcon icon={faFacebook} />
              </Nav.Link>
              <Nav.Link href="#" className="text-white">
                <FontAwesomeIcon icon={faInstagram} />
              </Nav.Link>
              <Nav.Link href="#" className="text-white">
                <FontAwesomeIcon icon={faYoutube} />
              </Nav.Link>
            </Nav>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
}

export default Footer;