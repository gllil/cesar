import React, { useState } from "react";
import ImageGrid from "../components/ImageGrid";
import { Modal, Image } from "react-bootstrap";
import UploadForm from "../components/UploadForm.js";

const Admin = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg} setOpen={setOpen} />
      <Modal show={open} onHide={handleClose}>
        <Image src={selectedImg} rounded className="modalImage" />
      </Modal>
    </div>
  );
};

export default Admin;
