import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";

const BottomNav = () => {
  return (
    <Container fluid className="bottom-nav text-center mt-5">
      <Row>
        <Col className=" d-block d-medium-none p-2 homeBtn">
          <a href="/" className="nav-link">
            Home
          </a>
          <motion.a
            whileHover={{ scale: 1.2 }}
            href="/"
            className="nav-link-icon"
          >
            <i className="fas fa-home fa-lg m-2"></i>
            <span className="iconLabel">Home</span>
          </motion.a>
        </Col>
        <Col className=" d-block d-medium-none p-2 aboutBtn">
          <a href="/about" className="nav-link">
            About Us
          </a>
          <motion.a
            whileHover={{ scale: 1.2 }}
            href="/about"
            className="nav-link-icon"
          >
            <i className="fas fa-users fa-lg m-2"></i>
            <span className="iconLabel">About Us</span>
          </motion.a>
        </Col>
        <Col className=" d-block d-medium-none p-2 galleryBtn">
          <a href="/gallery" className="nav-link">
            Our Work
          </a>
          <motion.a
            whileHover={{ scale: 1.2 }}
            href="/gallery"
            className="nav-link-icon"
          >
            <i className="fas fa-images fa-lg m-2"></i>
            <span className="iconLabel">Gallery</span>
          </motion.a>
        </Col>
      </Row>
    </Container>
  );
};

export default BottomNav;
