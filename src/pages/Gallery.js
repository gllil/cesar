import React, { useState } from "react";
import { Modal, Image } from "react-bootstrap";
import GalleryImageGrid from "../components/GalleryImageGrid";

const Gallery = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <GalleryImageGrid setSelectedImg={setSelectedImg} setOpen={setOpen} />
      <Modal show={open} onHide={handleClose}>
        <Image src={selectedImg} rounded className="modalImage" />
      </Modal>
    </div>
  );
};

export default Gallery;
