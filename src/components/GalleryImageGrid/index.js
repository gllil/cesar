import React from "react";
import useFirestore from "../../hooks/useFirestore";
import { Container, Row, Col, Image } from "react-bootstrap";

const GalleryImageGrid = ({ setSelectedImg, setOpen }) => {
  const { docs } = useFirestore("images");

  const handleClick = (e, doc) => {
    e.preventDefault();
    setSelectedImg(doc);
    setOpen(true);
  };
  return (
    <Container>
      <Row>
        {docs &&
          docs.map((doc) => (
            <Col xs={12} sm={6} md={4} key={doc.id}>
              <Row>
                <Col
                  className="imageWrap mt-2 text-center"
                  onClick={(e) => handleClick(e, doc.url)}
                >
                  <Image src={doc.url} rounded className="images" />
                </Col>
              </Row>
            </Col>
          ))}
        {docs.length === 0 && (
          <Col className="text-center mt-3 text-white">
            <h3>Photos coming soon</h3>
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default GalleryImageGrid;
