// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";
import Carousel from 'react-bootstrap/Carousel';

import React from "react";



function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 "
          src="https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_TVOD_777Charlie_Hi/31facd80-5bdc-4de8-9035-74836ecdb7f5._UR3000,600_SX1500_FMwebp_.jpeg"
          alt="First slide"
        />
        <Carousel.Caption>
          {/* <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_TVOD_BulletTrain_199/a5227e10-c155-4d80-ac7b-3ec71ebfc78d._UR3000,600_SX1500_FMwebp_.jpeg"
          alt="Second slide"
        />

        <Carousel.Caption>
          {/* <h3>Second slide label</h3> */}
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_TVOD_GoodBoss/4a228135-db5e-4e7f-a3f0-d1bb5efba97a._UR3000,600_SX1500_FMwebp_.jpeg"
          alt="Third slide"
        />

        <Carousel.Caption>
          {/* <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_TVOD_TopGunMaverick/2b8ef907-7906-4b01-b9a1-a658072d7b9a._UR3000,600_SX1500_FMwebp_.jpeg"
          alt="Second slide"
        />

        <Carousel.Caption>
          {/* <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      {/* from here change */}
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_TVOD_PawsOfFury/566f71ec-9366-4068-ab56-c878c9afa04c._UR3000,600_SX1500_FMwebp_.jpeg"
          alt="Second slide"
        />

        <Carousel.Caption>
          {/* <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_TVOD_ZackSnyderJusticeLeague/6450b104-9933-41d6-ae2d-0c3f446b8159._UR3000,600_SX1500_FMwebp_.jpeg"
          alt="Second slide"
        />

        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_TVOD_MinionsTheRiseOfTheGru119/7a32f088-cf7a-4340-8357-9faa520e7394._UR3000,600_SX1500_FMwebp_.jpeg"
          alt="Second slide"
        />

        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src=" https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_TVOD_Hunt_EmergencyDeclaration/168fa362-8b18-45d8-b2d3-4482cf2cef28._UR3000,600_SX1500_FMwebp_.jpeg"
          alt="Second slide"
        />

        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;
