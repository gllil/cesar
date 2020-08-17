import React from "react";
import "./App.css";
import { Nav, Container, Jumbotron, Row, Col, Button } from "react-bootstrap";
import GMaps from "./components/Map";
import logo from "./assets/images/cesarlogo4.png";
// import background from "./assets/images/background.jpg";

function App() {
  return (
    <div className="main">
      <Container>
        <Nav className="justify-content-center">
          <Nav.Item className="text-center mt-4">
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
            </h3>
          </Nav.Item>
        </Nav>
        <Row className="mt-5">
          <Col>
            <Jumbotron className="jumbotron">
              <Row>
                <Col>
                  <h3 className="title3">Custom Canvas and Upholstery</h3>
                  <p>
                    We can customize your canvas and upholstery to fit any of
                    your marine needs.
                  </p>
                </Col>
              </Row>
              <Row className="mt-2">
                <Col>
                  <Button variant="info" size="lg" href="#services">
                    Checkout Our Services
                  </Button>
                </Col>
              </Row>
            </Jumbotron>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col>
            <Jumbotron className="jumbotron" id="services">
              <Row>
                <Col>
                  <h3 className="title4">Services</h3>
                </Col>
              </Row>
              <Row>
                <Col xs={12} md={6}>
                  <ul>
                    <li>Commercial & Residential Awnings</li>
                    <li>Bimini Tops</li>
                    <li>Enclosures</li>
                    <li>Mooring Covers</li>
                  </ul>
                </Col>
                <Col xs={12} md={6}>
                  <ul>
                    <li>Interior & Exterior Cushions</li>
                    <li>Eisenglass/Isinglass Replacement</li>
                    <li>Zipper Replacement</li>
                    <li>And Much More</li>
                  </ul>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Button
                    variant="info"
                    size="lg"
                    className="mt-2"
                    href="#contact"
                  >
                    Contact Us For More Information
                  </Button>
                </Col>
              </Row>
            </Jumbotron>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col>
            <Jumbotron className="jumbotron" id="contact">
              <Row>
                <Col>
                  <h3 className="title4">Contact Us</h3>
                </Col>
              </Row>
              <Row>
                <Col xs={12} md={6}>
                  <Row>
                    <Col>
                      <p>
                        Address:
                        <br />
                        330 Gilbert Street
                        <br />
                        Mansfield, MA 02048
                      </p>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <p>
                        Phone:
                        <br />
                        (401) 834-5632
                      </p>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <p>
                        Email:
                        <br />
                        <a
                          href="mailto:CesarSignWorks@gmail.com"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          CesarSignWorks@gmail.com
                        </a>
                      </p>
                    </Col>
                  </Row>
                </Col>
                <Col xs={12} md={6}>
                  <GMaps />
                </Col>
              </Row>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <Row>
          <Col className="footer text-center">
            <p>
              <span>©</span> Copyright 2020-2023 <br /> Cesar Upholstery &
              Canvas LLC <br /> Insured
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
