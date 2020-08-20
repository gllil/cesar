import React from "react";
import useFirestore from "../../hooks/useFirestore";
import firebase from "firebase";
// import useStorage from "../../hooks/useStorage";
import { Container, Row, Col, Image, Button } from "react-bootstrap";

const ImageGrid = ({ setSelectedImg, setOpen }) => {
  const { docs } = useFirestore("images");
  const db = firebase.firestore();
  const storage = firebase.storage();

  const handleClick = (e, doc) => {
    e.preventDefault();
    setSelectedImg(doc);
    setOpen(true);
  };

  const handleDelete = (e, id, url) => {
    e.preventDefault();
    const imageRef = storage.refFromURL(url);
    imageRef
      .delete()
      .then(() => {
        console.log("Document successfully deleted!");
      })
      .catch((error) => console.error("Error removing document: ", error));
    db.collection("images")
      .doc(id)
      .delete()
      .then(() => {
        console.log("Document successfully deleted!");
      })
      .catch((error) => console.error("Error removing document: ", error));
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
              <Row>
                <Col className="text-center m-1">
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
    </Container>
  );
};

export default ImageGrid;
