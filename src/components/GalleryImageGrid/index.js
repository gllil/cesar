import React, { useState, useEffect } from "react";
import useFirestore from "../../hooks/useFirestore";
import { Container, Row, Col, Spinner, Button } from "react-bootstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";
// import { motion } from "framer-motion";

const GalleryImageGrid = ({ setSelectedImg, setOpen, scrollPosition }) => {
  const [limit, setLimit] = useState(16);
  const [disable, setDisable] = useState(false);
  const { docs } = useFirestore("images", limit);
  console.log(docs.length, limit);

  useEffect(() => {
    if (limit !== docs.length) {
      setDisable(true);
    } else {
      setDisable(false);
    }
  }, [limit, docs.length]);

  const handleClick = (e, doc) => {
    e.preventDefault();
    setSelectedImg(doc);
    setOpen(true);
  };

  const handleLoadMore = (e) => {
    e.preventDefault();
    setLimit(limit + 8);
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
      <Row>
        <Col className="text-center m-5">
          <Button hidden={disable} variant="info" onClick={handleLoadMore}>
            Load More
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default GalleryImageGrid;
