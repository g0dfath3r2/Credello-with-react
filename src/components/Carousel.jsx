import React from "react";
import { carouselData } from "../CarouselData";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Slide from "./Slide";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledCarouselContainer = styled.div`
  position: relative;
  height: 400px;
  width: 900px;

  @media (max-width: 1024px) {
    width: 100%;
    height: 100%;
    padding-top: 30px;
    padding-bottom: 50px;
  }
`;
const StyledCarousel = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  @media (min-width: 1025px) {
    position: absolute;
    top: -53px;
  }

  @media (max-width: 1024px) {
    width: 100%;
    height: 100%;
  }

  .styled-slider {
    height: 400px;
    width: 900px;
    @media (max-width: 1024px) {
      width: 100%;
      height: 100%;
    }
  }
  .styled-right-arrow {
    position: absolute;
    top: 50%;
    cursor: pointer;
    right: 0px;
    z-index: 10;
    /* transform: translateY(-50%); */
    @media (max-width: 1024px) {
      top: 60%;
    }
  }
  .styled-left-arrow {
    position: absolute;
    top: 50%;
    cursor: pointer;
    left: 0px;
    z-index: 10;
    /* transform: translateY(-50%); */
    @media (max-width: 1024px) {
      top: 60%;
    }
  }
`;

function PrevArrow({ onClick }) {
  return (
    // <div className="styled-arrows">
    <i
      className="fal fa-angle-left fa-3x styled-left-arrow"
      onClick={onClick}
    ></i>
    // </div>
  );
}

function NextArrow({ onClick }) {
  return (
    // <div className="styled-arrows">
    <i
      className="fal fa-angle-right fa-3x styled-right-arrow"
      onClick={onClick}
    ></i>
    // </div>
  );
}

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

export default function Carousel() {
  return (
    <StyledCarouselContainer>
      <StyledCarousel>
        <Slider {...settings} className="styled-slider">
          {carouselData.map((img, index) => {
            return (
              <Slide
                key={index}
                title={img.title}
                src={img.src}
                content={img.content}
                buttonText={img.buttonText}
              />
            );
          })}
        </Slider>
      </StyledCarousel>
    </StyledCarouselContainer>
  );
}

PrevArrow.propTypes = {
  onClick: PropTypes.func.isRequired,
  // className: PropTypes.string,
  // style: PropTypes.obj,
};
NextArrow.propTypes = {
  onClick: PropTypes.func.isRequired,
  // className: PropTypes.string,
  // style: PropTypes.obj,
};
