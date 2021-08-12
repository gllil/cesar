import React from "react";
import useFirestore from "../../hooks/useFirestore";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";
// import { motion } from "framer-motion";

const GalleryImageGrid = ({ setSelectedImg, setOpen, scrollPosition }) => {
  const { docs } = useFirestore("images");

  const handleClick = (e, doc) => {
    e.preventDefault();
    setSelectedImg(doc);
    setOpen(true);
  };

  // const setBackgroundImage = (url, id) => {
  //   const imageId = document.getElementById(id);
  //   imageId.style.backgroundImage = `url(${url})`;
  //   imageId.classList.add("blur-image");
  // };
  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        {docs &&
          docs.map((doc) => (
            <Col
              id={doc.id}
              xs={12}
              sm={4}
              md={3}
              lg={2}
              key={doc.id}
              className="imageWrap m-1"
              onClick={(e) => handleClick(e, doc.url)}
            >
              <LazyLoadImage
                src={doc.url}
                className="images"
                alt={doc.url}
                effect="blur"
                scrollPosition={scrollPosition}
                // afterLoad={() => setBackgroundImage(doc.url, doc.id)}
              />
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
