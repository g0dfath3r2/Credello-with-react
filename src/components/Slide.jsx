import React from "react";
import styled from "styled-components";
import Button from "./Button";
import PropTypes from "prop-types";

const StyledSlide = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: left;
  height: 400px;
  overflow: hidden;

  padding-top: 30px;
  padding-bottom: 50px;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    width: 100%;
    height: 100%;
  }

  div {
    width: 270px;
    color: #02254d;
    margin: 30px 73px 30px 0;

    @media (max-width: 1024px) {
      width: 100%;
      height: 100%;
      margin: 0 0 30px;
      position: relative;
      display: flex;
      flex-flow: column;
      justify-content: center;
      align-items: left;
      padding: 0 26px 0 33px;
    }
    @media (min-width: 768px) {
      margin-left: calc(-50 vw + 450 px);
      margin-right: calc(-50 vw + 450 px);
      padding-left: calc(50 vw - 450 px);
      padding-right: calc(50 vw - 450 px);
    }
  }

  p {
    font-weight: 300;
    @media (max-width: 1024px) {
      /* width: 100vw; */
      max-width: 100vw;
    }
  }

  img {
    width: 250px;
    height: 400px;
    border-radius: 14px;
    object-fit: contain;
  }

  h2 {
    margin: 0;
    @media (max-width: 1024px) {
      width: 300px;
    }
  }
`;

export default function Slide({ src, title, content, buttonText }) {
  return (
    <StyledSlide>
      <div>
        <h2>{title}</h2>
        <p>{content}</p>
        <Button buttonText={buttonText} />
      </div>
      <img src={src} alt="slide" />
    </StyledSlide>
  );
}

Slide.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
};
