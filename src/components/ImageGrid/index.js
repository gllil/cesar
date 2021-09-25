import React, { useState, useEffect } from "react";
import useFirestore from "../../hooks/useFirestore";
import { projectFirestore, projectStorage } from "../../firebase/config";
import { LazyLoadImage } from "react-lazy-load-image-component";
// import useStorage from "../../hooks/useStorage";
import { Container, Row, Col, Button } from "react-bootstrap";

const ImageGrid = ({ setSelectedImg, setOpen, scrollPosition }) => {
  const [limit, setLimit] = useState(16);
  const [disable, setDisable] = useState(false);
  const { docs } = useFirestore("images", limit);
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

  const handleDelete = (e, id, url) => {
    e.preventDefault();
    const imageRef = projectStorage.refFromURL(url);
    imageRef
      .delete()
      .then(() => {
        console.log("Document successfully deleted!");
      })
      .catch((error) => console.error("Error removing document: ", error));
    projectFirestore
      .collection("images")
      .doc(id)
      .delete()
      .then(() => {
        console.log("Document successfully deleted!");
      })
      .catch((error) => console.error("Error removing document: ", error));
  };

  const handleLoadMore = (e) => {
    e.preventDefault();
    setLimit(limit + 8);
  };

  return (
    <Container>
      <Row className="justify-content-center">
        {docs &&
          docs.map((doc) => (
            <Col xs={12} sm={4} md={3} lg={2} className="imageContentWrap m-1">
              <Row className="justify-content-center">
                <Col
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
              </Row>
              <Row className="justify-content-center">
                <Col className="text-center">
                  <Button
                    variant="warning"
                    size="small"
                    onClick={(e) => handleDelete(e, doc.id, doc.url)}
                  >
                    Delete
                  </Button>
                </Col>
              </Row>
            </Col>
          ))}
        {docs.length === 0 && (
          <Col className="text-center mt-3 text-white">
            <h3>Click Upload to add photos to your gallery</h3>
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

export default ImageGrid;
