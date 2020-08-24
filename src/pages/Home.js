import React from "react";
import { Container, Jumbotron, Row, Col, Button } from "react-bootstrap";
import GMaps from "../components/Map";
import Slides from "../components/Slides";
// import background from "./assets/images/background.jpg";

function Home() {
  return (
    <Container>
      <Row className="mt-5">
        <Col>
          <Jumbotron className="jumbotron">
            <Row>
              <Col>
                <h3 className="title3">
                  Custom Canvas, Upholstery, and Awnings
                </h3>
                <p>
                  We customize Upholstery and Canvas for Boats, Cars, or
                  anything that needs to be covered. We also custom fabricate
                  Awnings for commercial and residential needs. Everything is
                  handcrafted with the best materials to stand the test of time.
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
                <h3 className="title4 mb-3">Services</h3>
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
              <Col className="text-center">
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
          <Jumbotron className="jumbotron" id="services">
            <Row>
              <Col>
                <h3 className="title4">Gallery</h3>
              </Col>
            </Row>
            <Row>
              <Slides />
            </Row>
            <Row>
              <Col className="text-center">
                <Button
                  variant="info"
                  size="lg"
                  className="mt-2"
                  href="/gallery"
                >
                  See Full Gallery
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
                <h3 className="title4 mb-3">Contact Us</h3>
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
                        className="emailLink"
                      >
                        CesarSignWorks@gmail.com
                      </a>
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <p className="pb-4">
                      Social Media:
                      <br />
                      <a
                        href="https://www.facebook.com/cesarcanvasupholstery/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="socialMediaLink"
                      >
                        <i class="fab fa-facebook-square fa-lg"></i>
                        <span> @cesarcanvasupholstery</span>
                      </a>
                    </p>
                  </Col>
                </Row>
              </Col>
              <Col xs={12} md={6}>
                <Row>
                  <Col className="text-center pb-3">
                    <p className="googleReviewContainer">
                      <a
                        href="https://g.page/cesarcanvasupholstery/review?rc"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="socialMediaLink mb-3"
                      >
                        <i className="fab fa-google fa-2x"></i>
                        <br />
                        Leave a review on Google
                        <br />
                        <span className="stars">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                        </span>
                      </a>
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <span>
                      <GMaps />
                    </span>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
