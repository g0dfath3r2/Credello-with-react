import React from "react";
import c3 from "../../images/c3.jfif";
import c4 from "../../images/c4.png";
import c5 from "../../images/c5.jfif";
import styled from "styled-components";

const StyledCard = styled.div`
  display: grid;
  grid-gap: 15px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: minmax(120px, 1fr);
  grid-row-gap: 15px;
  margin-top: 50px;
  line-height: 20px;

  @media (min-width: 1025px) {
    margin-left: calc(-50vw + 450px);
    margin-right: calc(-50vw + 450px);
    padding-left: calc(50vw - 450px);
    padding-right: calc(50vw - 450px);
  }
  @media (max-width: 1024px) {
    display: grid;
    gap: 34px;
    grid-template-columns: repeat(4, calc(20%));
    padding: 24px;
    margin: 0px -24px;
  }

  @media (max-width: 767px) {
    overflow: auto;
    ::-webkit-scrollbar {
      width: 0px;
    }
    scroll-snap-type: x;
    display: grid;
    gap: 2px;
    grid-template-columns: repeat(4, calc(50% - 30px));
    grid-template-rows: minmax(120px, 1fr);
    /* padding: 24px; */
    margin: 0px -20px;
    padding: 13px 0px 22px 20px;
  }

  p {
    margin: 10px 0px;
    color: rgb(108, 127, 135);
    font-weight: 400;

    @media (max-width: 1024px) {
      font-size: 14px;
    }
  }

  img {
    width: 100%;
    height: 127px;
    border-radius: 8px;
    object-fit: cover;

    @media (max-width: 767px) {
      max-height: 197px;
      width: 100%;
      border-radius: 8px;
      object-fit: cover;
    }
  }

  img:hover {
    opacity: 0.5;
    transition: 0.5s ease;
  }

  .card-style {
    width: 203px;
    height: 225px;
    color: rgb(108, 127, 135);
    text-align: left;
    margin-bottom: 15px;

    @media (max-width: 1024px) {
      margin-bottom: 15px;
      padding-right: 10px;
      height: 100%;
      width: 100%;
    }

    @media (max-width: 767px) {
      margin-bottom: 15px;
      padding-right: 10px;
      height: 100%;
      width: 100%;
    }
  }

  .card-style:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export default function Card() {
  return (
    <StyledCard>
      <div className="card-style">
        <img src={c3} alt="" />
        <p>Millennials Share Their Financial Resolutions of 2021</p>
      </div>
      <div className="card-style">
        <img src={c4} alt="" />
        <p>
          Does the Debt Snowball Really Work? Real-Life Debt Snowball Examples
          and Success Stories
        </p>
      </div>
      <div className="card-style">
        <img src={c5} alt="" />
        <p>
          SURVEY: Millennials & Men Are Most Likely to Be Overconfident About
          Their Tax Expertise
        </p>
      </div>
      <div className="card-style">
        <img src={c3} alt="" />
        <p>Does Debt Consolidation Hurt Your Credit Score?</p>
      </div>
    </StyledCard>
  );
}
