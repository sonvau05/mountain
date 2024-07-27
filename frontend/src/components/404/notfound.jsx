import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Notfound=()=>{
    return (
        <Container className="my-5">
          <Row className="justify-content-center">
            <Col md={6} className="text-center">
              <h1 className="display-1 font-weight-bold">404</h1>
              <h2 className="mb-4">Page Not Found</h2>
              <p className="mb-4">
                Oops! The page you are looking for does not exist. It might have been
                moved or deleted.
              </p>
              <Link to="/" className="btn btn-primary">
                Go to Home
              </Link>
            </Col>
          </Row>
        </Container>
      );
}
export default Notfound;