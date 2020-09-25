import React from "react";
import useFirestore from "../../hooks/useFirestore";
import { Carousel, Image } from "react-bootstrap";

const Slides = () => {
  const { docs } = useFirestore("images");
  return (
    <div>
      <Carousel className="carouselWrapper" indicators={false}>
        {docs &&
          docs.map((doc) => (
            <Carousel.Item key={doc.id}>
              <Image src={doc.url} className="d-block w-100 carouselImage" />
            </Carousel.Item>
          ))}
      </Carousel>
    </div>
  );
};

export default Slides;
