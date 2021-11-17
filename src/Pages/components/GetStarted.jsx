import React from "react";
import Button from "../../components/Button";
import cre from "../../images/cre.jpg";
import styled from "styled-components";

const StyledGetStarted = styled.div`
  display: flex;
  padding: 40px 0;
  justify-content: space-between;

  @media (max-width: 1024px) {
    width: 100%;
    align-items: flex-end;
    justify-content: unset;
  }

  .getStarted {
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: space-between;
    text-align: left;
    width: 240px;

    @media (max-width: 1024px) {
      width: 100%;
      min-width: 140px;
      max-width: 240px;
    }
  }

  h2 {
    font-size: 24px;
    font-weight: 500;
    margin: 0;
    @media (max-width: 1024px) {
      font-size: 16px;
    }
  }

  p {
    font-size: 20px;
    font-weight: 300;
    @media (max-width: 1024px) {
      font-size: 16px;
    }
  }

  img {
    width: 463px;
    height: 183px;
    object-fit: cover;

    @media (max-width: 1024px) {
      width: 188px;
      height: 150px;
      margin-right: 10px;
    }
  }
`;

export default function GetStarted() {
  return (
    <StyledGetStarted>
      <img src={cre} alt="" />

      <div className="getStarted">
        <h2>Take Control of Your Debt Today</h2>
        <p>Find your best options now</p>
        <Button buttonText="Get Started" />
      </div>
    </StyledGetStarted>
  );
}
