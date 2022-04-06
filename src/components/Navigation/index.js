import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../../assets/images/cesarlogo4.png";

const Navigation = () => {
  return (
    <Container>
      <Row className="justify-content-center mx-auto">
        <Col className="text-left mt-4  d-none d-md-block">
          <a className="nav-link-head" href="/about">
            <p>About Us</p>
          </a>
        </Col>

        <Col xs={12} md={8} className="text-center mt-4">
          <a href="/" className="nav-link-head">
            <h3>
              <span className="title1">
                CES
                <img
                  src={logo}
                  width="45px"
                  alt="Cesar Logo"
                  // style={{ paddingBott }}
                  className="pb-3"
                />
                R MARINE
              </span>
              <br />
              <span className="title2">
                CANVAS & UPHOLSTERY <span className="title2Sub">LLC</span>
              </span>
              <br />
              <span className="title2">(774) 328-9327</span>
              <br />
              <span className="slogan">"Workmanship you can be proud of!"</span>
            </h3>
          </a>
        </Col>

        <Col className="text-right mt-4 d-none d-md-block">
          <a href="/gallery" className="nav-link-head">
            <p>Our Work</p>
          </a>
        </Col>
      </Row>
    </Container>
  );
};

export default Navigation;
