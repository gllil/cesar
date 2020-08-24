import React, { useState } from "react";
import firebase from "firebase";
import { Container, Row, Col, Jumbotron, Button, Form } from "react-bootstrap";

const Login = () => {
  const [form, setForm] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const { dataset, value } = e.target;
    console.log(dataset, value);
    setForm({ ...form, [dataset.property]: value });
  };

  return (
    <Container>
      <Row className="mt-5">
        <Col>
          <Jumbotron className="jumbotron">
            <Row className="mt-2">
              <Col>
                <Form onSubmit={(e) => handleSubmit(e)}>
                  <Form.Group>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      data-property="email"
                    />
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      data-property="password"
                    />
                  </Form.Group>

                  <Button variant="info" type="submit">
                    Login
                  </Button>
                </Form>
              </Col>
            </Row>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
