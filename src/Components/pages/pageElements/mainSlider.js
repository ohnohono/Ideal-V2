import React from 'react';
import Carousel from 'react-bootstrap/Carousel';


function MainSlider() {
  return (
      <div className="slider">
        <Carousel>
          <Carousel.Item>
            <img  
            className="d-block w-100"
            src="/images/slides/slide_01.png"
            alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
            className="d-block w-100"
            src="/images/03slide.png"
            alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
            className="d-block w-100"
            src="/images/14slide.png"
            alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
  );
}

export default MainSlider;
