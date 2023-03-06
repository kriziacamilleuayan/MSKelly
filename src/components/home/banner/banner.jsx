import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import ClientImage from "./assets/client.jpg";
import MeetingImage from "./assets/meeting.jpg";
import HandImage from "./assets/hand.jpg";
import ReportImage from "./assets/report.jpg";
import "./banner.css";

function Banner() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="banner-container">
      <Carousel fade activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item className="carousel-item">
          <Row>
            <Col>
              <Carousel.Caption className="caption">
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Col>
            <Col>
              <img
                className="d-block w-100"
                src={ClientImage}
                alt="First slide"
              />
            </Col>
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Row>
            <Col>
              <Carousel.Caption className="caption">
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Col>
            <Col>
              <img
                className="d-block w-100"
                src={ReportImage}
                alt="Second slide"
              />
            </Col>
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Row>
            <Col>
              <Carousel.Caption className="caption">
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Col>
            <Col>
              <img
                className="d-block w-100"
                src={MeetingImage}
                alt="Third slide"
              />
            </Col>
          </Row>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Banner;
