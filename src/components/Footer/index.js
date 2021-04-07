import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <Container fluid>
      <Row>
        <Col className="footer text-center">
          <p>
            <span>©</span> Copyright {currentYear} <br /> Cesar Upholstery &
            Canvas LLC <br /> Insured <br />{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/cesarcanvasupholstery/"
            >
              <i className="fab fa-facebook-square fa-lg"></i>
            </a>
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
