import React from "react";
import { Container, Row, Jumbotron, Col, Button } from "react-bootstrap";

const About = () => {
  return (
    <Container className="aboutMe">
      <Row className="mt-5">
        <Col>
          <Jumbotron className="jumbotron">
            <Row>
              <Col>
                <h3 className="title3">About Us</h3>
                <p>
                  We are a local business in the New England Area. We have 25
                  years of experience with upholstery, canvas, and awnings. We
                  work on cars, boats, and anything that needs a cover.
                  Everything is custom to fit what you need. The company owner,
                  Julio Abreu, is focused on attention to detail and the highest
                  quality workmanship. We prepare meticulously to ensure our
                  work is delivered on time and avoid delays. Please check out
                  the Our Work link to see our craft.
                </p>
              </Col>
            </Row>
            <Row className="mt-2">
              <Col>
                <Button variant="info" size="lg" href="/gallery">
                  Checkout Our Work
                </Button>
              </Col>
            </Row>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
