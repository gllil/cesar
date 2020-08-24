import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <Container fluid>
      <Row>
        <Col className="footer text-center">
          <p>
            <span>©</span> Copyright 2020-2023 <br /> Cesar Upholstery & Canvas
            LLC <br /> Insured <br />{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/cesarcanvasupholstery/"
            >
              <i class="fab fa-facebook-square fa-lg"></i>
            </a>
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
