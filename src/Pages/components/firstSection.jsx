import React from "react";
import styled from "styled-components";

const StyledFirstSectionContainer = styled.div`
  background-color: rgb(2, 37, 77);
  color: rgb(255, 255, 255);
  height: 225px;
  display: flex;
  align-items: center;
  justify-content: left;
  z-index: 10;

  @media (min-width: 1024px) {
    margin-left: calc(-50vw + 450px);
    margin-right: calc(-50vw + 450px);
    padding-left: calc(50vw - 450px);
    padding-right: calc(50vw - 450px);
  }

  @media only screen and (max-width: 1024px) {
    background-color: rgb(2, 37, 77);
    color: rgb(255, 255, 255);
    display: flex;
    align-items: left;
    text-align: left;
    justify-content: center;
    z-index: 1;
    padding: 34px 54px;
    margin-left: -24px;
    margin-right: -24px;
    /* width: 100%; */
  }

  @media only screen and (max-width: 767px) {
    background-color: rgb(2, 37, 77);
    color: rgb(255, 255, 255);
    display: flex;
    align-items: left;
    text-align: left;
    justify-content: center;
    z-index: 1;
    /* width: 100%; */
    padding: 34px 54px;

    /* max-width: 100%; */
    margin-left: -24px;
    margin-right: -24px;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 478px;
    line-height: 1;
    margin: 0 0 0 126px;

    @media (max-width: 1024px) {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      width: 100%;
      max-width: 100%;
      line-height: 1;
      margin: 0;
    }
  }

  h2 {
    font-size: 30px;
    line-height: 39px;
    font-weight: bold;
    margin: 0;

    @media (max-width: 1024px) {
      font-size: 30px;
      line-height: 34px;
      max-width: 250px;
      text-align: left;
      margin-bottom: 10px;
    }

    @media (max-width: 767px) {
      font-size: 30px;
      line-height: 34px;
      max-width: 250px;
      text-align: left;
      margin-bottom: 10px;
    }
  }

  h3 {
    width: 335px;
    font-size: 20px;
    line-height: 1.4;
    text-align: left;
    margin: 5px 0 0;
    font-weight: 300;

    @media (max-width: 1024px) {
      width: 100%;
      max-width: 100%;
      text-align: left;
      font-weight: 300;
      font-size: 16px;
    }
  }
`;

export default function FirstSection() {
  return (
    <StyledFirstSectionContainer>
      <div>
        <h2>Take Control Of Your Finances</h2>
        <h3>
          Get personalized guidance that helps make
          <span style={{ color: "rgb(21, 219, 149)" }}> debt decision </span>
          simple
        </h3>
      </div>
    </StyledFirstSectionContainer>
  );
}
