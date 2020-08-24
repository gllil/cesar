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
            whileTap={{ scale: 0.8 }}
            href="/"
            className="nav-link-icon"
          >
            <i className="fas fa-home"></i>
          </motion.a>
        </Col>
        <Col className=" d-block d-medium-none p-2 aboutBtn">
          <a href="/about" className="nav-link">
            About Us
          </a>
          <motion.a
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            href="/about"
            className="nav-link-icon"
          >
            <i className="fas fa-users"></i>
          </motion.a>
        </Col>
        <Col className=" d-block d-medium-none p-2 galleryBtn">
          <a href="/gallery" className="nav-link">
            Our Work
          </a>
          <motion.a
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            href="/gallery"
            className="nav-link-icon"
          >
            <i className="fas fa-images"></i>
          </motion.a>
        </Col>
      </Row>
    </Container>
  );
};

export default BottomNav;
