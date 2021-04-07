import React, { useState } from "react";
import { auth } from "../firebase/config";
import ImageGrid from "../components/ImageGrid";
import { Modal, Image, Button, Container } from "react-bootstrap";
import UploadForm from "../components/UploadForm.js";

const Admin = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  const handleClick = (e) => {
    e.preventDefault();

    auth.signOut();
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
      <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg} setOpen={setOpen} />
      <Modal show={open} onHide={handleClose}>
        <Image src={selectedImg} rounded className="modalImage" />
      </Modal>
    </div>
  );
};

export default Admin;
