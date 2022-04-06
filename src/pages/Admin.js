import React, { useState } from "react";
import { auth, projectFirestore } from "../firebase/config";
import ImageGrid from "../components/ImageGrid";
import { DateTime } from "luxon";
import {
  Modal,
  Image,
  Button,
  Container,
  Tab,
  Tabs,
  Table,
  Row,
  Col,
  Card,
  Accordion,
  ModalBody,
} from "react-bootstrap";
import UploadForm from "../components/UploadForm.js";
import useFirestore from "../hooks/useFirestore";

const Admin = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  const [open, setOpen] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [toggle, setToggle] = useState(false);
  const { docs } = useFirestore("customers");
  const [id, setId] = useState(null);

  console.log(docs);
  const handleClose = () => {
    setOpen(false);
  };

  const handleClick = (e) => {
    e.preventDefault();

    auth.signOut();
  };

  const toggleAccordion = () => {
    setToggle(!toggle);
  };

  const handleDeleteClose = () => {
    setOpenDelete(false);
  };
  const handleDeleteOpen = (idInfo) => {
    setId(idInfo);
    setOpenDelete(true);
  };

  const handleDelete = () => {
    const customerRef = projectFirestore.collection("customers");
    customerRef
      .doc(id)
      .delete()
      .then(() => setOpenDelete(false));
  };

  return (
    <div>
      <Container className="text-right">
        <Button
          variant="dark"
          onClick={(e) => handleClick(e)}
          style={{ color: "white" }}
          size="md"
        >
          Logout
        </Button>
      </Container>
      <Tabs defaultActiveKey="customers" transition={false} className="mt-3">
        <Tab eventKey="customers" title="Customers">
          <Container>
            {docs.length ? (
              <Row className="mt-3">
                <Col>
                  <Table
                    striped
                    bordered
                    variant="dark"
                    className="customerTable"
                  >
                    <thead>
                      <tr>
                        <th>Date</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Message</th>
                        <th>Delete</th>
                      </tr>
                    </thead>
                    <tbody>
                      {docs &&
                        docs.map((res) => (
                          <tr key={res.id}>
                            <td>
                              {DateTime.fromSeconds(
                                res.createdAt.seconds
                              ).toLocaleString(DateTime.DATETIME_FULL)}
                            </td>
                            <td>{res.form.name}</td>
                            <td>{res.form.phone}</td>
                            <td>{res.form.email}</td>
                            <td>{res.form.service}</td>
                            <td>
                              <Button onClick={() => handleDeleteOpen(res.id)}>
                                Delete
                              </Button>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </Table>

                  {docs &&
                    docs.map((res) => (
                      <Card
                        key={res.id}
                        className="customerCard mt-3"
                        bg="dark"
                        text="white"
                      >
                        <Container className="p-2">
                          <Row>
                            <Col>
                              <p>
                                <strong>Date:</strong>{" "}
                                <em>
                                  {DateTime.fromSeconds(
                                    res.createdAt.seconds
                                  ).toLocaleString(DateTime.DATETIME_FULL)}
                                </em>
                              </p>
                              <p>
                                <strong>Name:</strong> <em>{res.form.name}</em>
                              </p>
                              <p>
                                <strong>Phone:</strong>{" "}
                                <em>
                                  <a
                                    className="customerContact"
                                    href={`tel:${res.form.phone}`}
                                  >
                                    {res.form.phone}
                                  </a>
                                </em>
                              </p>
                              <p>
                                <strong>Email:</strong>{" "}
                                <em>
                                  <a
                                    className="customerContact"
                                    href={`mailto:${res.form.email}`}
                                  >
                                    {res.form.email}
                                  </a>
                                </em>
                              </p>

                              <Accordion onSelect={toggleAccordion}>
                                <Card bg="dark">
                                  <Accordion.Toggle
                                    as={Card.Header}
                                    eventKey={res.id}
                                  >
                                    <p className="text-center">
                                      {toggle && (
                                        <strong>
                                          Message{" "}
                                          <i className="fas fa-chevron-up"></i>
                                        </strong>
                                      )}

                                      {!toggle && (
                                        <strong>
                                          Message{" "}
                                          <i className="fas fa-chevron-down"></i>
                                        </strong>
                                      )}
                                    </p>
                                  </Accordion.Toggle>
                                  <Accordion.Collapse eventKey={res.id}>
                                    <Card.Body>
                                      <em>{res.form.service}</em>
                                    </Card.Body>
                                  </Accordion.Collapse>
                                </Card>
                              </Accordion>
                              <Button
                                className="m-3"
                                onClick={() => handleDeleteOpen(res.id)}
                                variant="secondary"
                              >
                                Delete Customer
                              </Button>
                              <Modal
                                show={openDelete}
                                onHide={handleDeleteClose}
                              >
                                <Modal.Header closeButton>
                                  Notification
                                </Modal.Header>
                                <ModalBody>
                                  <Container>
                                    <Row>
                                      <Col>
                                        <p>
                                          Are you sure you want to delete
                                          customer?
                                        </p>
                                      </Col>
                                    </Row>
                                  </Container>
                                </ModalBody>
                                <Modal.Footer>
                                  <Button onClick={handleDelete}>
                                    Confirm Delete
                                  </Button>
                                  <Button onClick={handleDeleteClose}>
                                    Cancel
                                  </Button>
                                </Modal.Footer>
                              </Modal>
                            </Col>
                          </Row>
                        </Container>
                      </Card>
                    ))}
                </Col>
              </Row>
            ) : (
              <Row>
                <Col className="text-center">
                  <h3>No Customer Information Yet</h3>
                </Col>
              </Row>
            )}
          </Container>
        </Tab>
        <Tab eventKey="photos" title="Photos">
          <UploadForm />
          <ImageGrid setSelectedImg={setSelectedImg} setOpen={setOpen} />
          <Modal show={open} onHide={handleClose}>
            <Image src={selectedImg} rounded className="modalImage" />
          </Modal>
        </Tab>
      </Tabs>
    </div>
  );
};

export default Admin;
