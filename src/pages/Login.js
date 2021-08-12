import React, { useState, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import { AuthContext } from "../Auth";

import { auth } from "../firebase/config";
import { Container, Row, Col, Jumbotron, Button, Form } from "react-bootstrap";

const Login = ({ history }) => {
  const [form, setForm] = useState({});

  //get user info
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const loginForm = document.querySelector(".loginForm");

  const handleSubmit = (e) => {
    e.preventDefault();
    let email = form.email;
    let password = form.password;

    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        loginForm.reset();
        history.push("/admin");
      })
      .catch((error) => alert(error));
  };

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/admin" />;
  }

  return (
    <Container>
      <Row className="mt-5">
        <Col>
          <Jumbotron className="jumbotron">
            <Row className="mt-2">
              <Col>
                <Form
                  className="loginForm"
                  onChange={handleChange}
                  onSubmit={(e) => handleSubmit(e)}
                >
                  <Form.Group>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      name="email"
                      type="email"
                      placeholder="Enter email"
                    />
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      name="password"
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

export default withRouter(Login);
