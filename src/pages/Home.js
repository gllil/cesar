import React, { useState } from "react";
import {
  Container,
  Jumbotron,
  Row,
  Col,
  Button,
  Form,
  Modal,
  Spinner,
} from "react-bootstrap";
import GMaps from "../components/Map";
import Slides from "../components/Slides";
import { functions } from "../firebase/config";
// import background from "./assets/images/background.jpg";

function Home() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
  });
  const [showMap, setShowMap] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showSpinner, setShowSpinner] = useState(false);
  const [validated, setValidated] = useState(false);

  function handleForm(e) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }

  const openMaps = (e) => {
    e.preventDefault();
    setShowMap(true);
  };

  const mapClose = (e) => {
    setShowMap(false);
  };

  const successClose = (e) => {
    setShowSuccess(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const formVal = e.currentTarget;
    setShowSpinner(true);
    if (formVal.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    } else {
      setValidated(true);
    }

    const contactEmail = functions.httpsCallable("contactEmail");

    const formInfo = document.getElementById("form");

    contactEmail(form).then((res) => {
      setShowSuccess(true);
      setShowSpinner(false);
      formInfo.reset();
      setValidated(false);
    });
  };

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
                    <p onClick={openMaps}>
                      Address:
                      <br />
                      <span className="address">
                        330 Gilbert Street
                        <br />
                        Mansfield, MA 02048
                      </span>
                    </p>
                    <Modal show={showMap} onHide={mapClose}>
                      <Modal.Body>
                        <Container>
                          <Row>
                            <Col>
                              <span>
                                <GMaps />
                              </span>
                            </Col>
                          </Row>
                        </Container>
                      </Modal.Body>
                    </Modal>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <p>
                      Phone:
                      <br />
                      <a
                        href="tel:401-834-5632"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="emailLink"
                      >
                        (401) 834-5632
                      </a>
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
              </Col>
              <Col xs={12} md={6}>
                <Row>
                  <Col>
                    <Form
                      onSubmit={handleSubmit}
                      onChange={handleForm}
                      validated={validated}
                      id="form"
                    >
                      <h4>Get a quote</h4>
                      <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" name="name" />
                      </Form.Group>
                      <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" name="email" />
                      </Form.Group>
                      <Form.Group>
                        <Form.Label>Phone</Form.Label>
                        <Form.Control
                          name="phone"
                          placeholder="(###) ###-####"
                        />
                      </Form.Group>
                      <Form.Group>
                        <Form.Label>
                          Describe the service are you needing?
                        </Form.Label>
                        <Form.Control as="textarea" name="service" />
                      </Form.Group>
                      <Button variant="info" type="submit">
                        {showSpinner ? (
                          <Spinner animation="border" />
                        ) : (
                          <div>
                            Send <i className="fas fa-paper-plane ml-2" />
                          </div>
                        )}
                      </Button>
                      <Modal show={showSuccess} onHide={successClose}>
                        <Modal.Body>
                          <Container>
                            <Row>
                              <Col className="text-center">
                                <h2>Sent Successfully</h2>
                              </Col>
                            </Row>
                          </Container>
                        </Modal.Body>
                      </Modal>
                    </Form>
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
