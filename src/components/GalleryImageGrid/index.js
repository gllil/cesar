import React from "react";
import useFirestore from "../../hooks/useFirestore";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import { motion } from "framer-motion";

const GalleryImageGrid = ({ setSelectedImg, setOpen }) => {
  const { docs } = useFirestore("images");

  const handleClick = (e, doc) => {
    e.preventDefault();
    setSelectedImg(doc);
    setOpen(true);
  };
  return (
    <Container className="mt-5">
      <Row>
        {docs &&
          docs.map((doc) => (
            <Col xs={12} sm={6} md={4} key={doc.id}>
              <Row>
                <Col
                  className="imageWrap mt-2 text-center"
                  onClick={(e) => handleClick(e, doc.url)}
                >
                  <motion.img
                    whileHover={{ scale: 1.2 }}
                    src={doc.url}
                    rounded
                    className="images"
                  />
                </Col>
              </Row>
            </Col>
          ))}
        {docs.length === 0 && (
          <Col className="text-center mt-3 text-white">
            <Spinner animation="border" />
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default GalleryImageGrid;
