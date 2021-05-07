import React, { useState } from "react";
import { auth, projectFirestore } from "../firebase/config";
import ImageGrid from "../components/ImageGrid";
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
} from "react-bootstrap";
import UploadForm from "../components/UploadForm.js";
import useFirestore from "../hooks/useFirestore";

const Admin = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  const [open, setOpen] = useState(false);
  const { docs } = useFirestore("customers");
  console.log(docs);
  const handleClose = () => {
    setOpen(false);
  };

  const handleClick = (e) => {
    e.preventDefault();

    auth.signOut();
  };

  const handleDelete = (id) => {
    const customerRef = projectFirestore.collection("customers");
    customerRef.doc(id).delete();
  };

  const convertToDate = (seconds) => {
    let epocMilliseconds = seconds * 1000;
    let currentDate = new Date(epocMilliseconds);
    let date = currentDate.getDate();
    let month = currentDate.getMonth();
    let year = currentDate.getFullYear();

    let dateString = month + "/" + date + "/" + year;
    return dateString;
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
                    responsive="md"
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
                            <td>{convertToDate(res.createdAt.seconds)}</td>
                            <td>{res.form.name}</td>
                            <td>{res.form.phone}</td>
                            <td>{res.form.email}</td>
                            <td>{res.form.service}</td>
                            <td>
                              <Button onClick={() => handleDelete(res.id)}>
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
                        className="customerCard"
                        bg="dark"
                        text="white"
                      >
                        <Container className="p-2">
                          <Row>
                            <Col>
                              <p>
                                <strong>Date:</strong>{" "}
                                <em>{convertToDate(res.createdAt.seconds)}</em>
                              </p>
                              <p>
                                <strong>Name:</strong> <em>{res.form.name}</em>
                              </p>
                              <p>
                                <strong>Phone:</strong>{" "}
                                <em>{res.form.phone}</em>
                              </p>
                              <p>
                                <strong>Email:</strong>{" "}
                                <em>{res.form.email}</em>
                              </p>
                              <p>
                                <strong>Message:</strong>{" "}
                                <em>{res.form.service}</em>
                              </p>
                              <Button onClick={() => handleDelete(res.id)}>
                                Delete
                              </Button>
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
