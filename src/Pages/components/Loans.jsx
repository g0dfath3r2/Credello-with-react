import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  padding: 40px 0px;
  background-color: rgb(234, 244, 255);
  z-index: 1;

  @media (min-width: 1025px) {
    margin-left: calc(-50vw + 450px);
    margin-right: calc(-50vw + 450px);
    padding-left: calc(50vw - 450px);
    padding-right: calc(50vw - 450px);
  }

  @media (max-width: 1024px) {
    /* width: 100%; */
    height: 100%;
    padding: 24px;
    margin: 0 -24px;
  }

  p {
    font-size: 24px;
    line-height: 28px;
    margin: 0;
    @media (max-width: 1024px) {
      font-size: 16px;
    }
  }

  .styleIconsContainer {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin: 30px auto auto;

    @media (max-width: 1024px) {
      width: 100%;
    }
  }

  i {
    color: rgb(2, 37, 77);
  }

  .styleIconsContainer p {
    color: rgb(0, 89, 171);
    margin-top: 5px;
    @media (max-width: 764px) {
      width: 106px;
      line-height: 1.5rem;
    }
  }

  .styleIconsContainer div {
    cursor: pointer;
  }
  .styleIconsContainer div:hover {
    text-decoration: underline;
    text-decoration-color: #0059ab;
  }
`;

export default function Loan() {
  return (
    <StyledContainer>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          width: "444px",
        }}
      >
        <p>Not Your First Rodeo?</p>
        <p
          style={{
            margin: "0 0 0 8px ",
            color: "rgb(2, 37, 77)",
            fontWeight: "300",
          }}
        >
          Explore Products
        </p>
      </div>
      <div className="styleIconsContainer">
        <div>
          <i className="fas fa-sack-dollar fa-4x"></i>
          <p>Personal Loans</p>
        </div>
        <div>
          <i className="fas fa-landmark fa-4x"></i>
          <p>Home Equity Loans</p>
        </div>
        <div>
          <i className="fas fa-piggy-bank fa-4x"></i>
          <p>Balance Transfer Cards</p>
        </div>
      </div>
    </StyledContainer>
  );
}
