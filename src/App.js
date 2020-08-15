import React from "react";
import "./App.css";
import { Nav, Container, Jumbotron, Row, Col, Button } from "react-bootstrap";
import GMaps from "./components/Map";
// import background from "./assets/images/background.jpg";

function App() {
  return (
    <div className="main">
      <Nav className="justify-content-center">
        <Nav.Item className="text-center mt-4">
          <h3>
            <span className="title1">CESAR MARINE</span>
            <br />
            <span className="title2 mt-1">CANVAS & UPHOLSTERY</span>
          </h3>
        </Nav.Item>
      </Nav>
      <Container>
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
                    <li>Aluminum & Steel Frames</li>
                    <li>Bimini Tops</li>
                    <li>Enclosures</li>
                    <li>Mooring Covers</li>
                  </ul>
                </Col>
                <Col xs={12} md={6}>
                  <ul>
                    <li>Interior & Exterior Cushions</li>
                    <li>Eisenglass Replacement</li>
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
                    Get a Free Quote
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
                          href="mailto:CesarDesignWorks@gmail.com"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          CesarDesignWorks@gmail.com
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
    </div>
  );
}

export default App;
