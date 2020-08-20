import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const BottomNav = () => {
  return (
    <Container fluid className="bottom-nav text-center">
      <Row>
        <Col className=" d-block d-medium-none p-3 homeBtn">
          <a href="/" className="nav-link">
            Home
          </a>
        </Col>
        <Col className=" d-block d-medium-none p-3 aboutBtn">
          <a href="/about" className="nav-link">
            About Us
          </a>
        </Col>
        <Col className=" d-block d-medium-none p-3 galleryBtn">
          <a href="/gallery" className="nav-link">
            Our Work
          </a>
        </Col>
      </Row>
    </Container>
  );
};

export default BottomNav;
