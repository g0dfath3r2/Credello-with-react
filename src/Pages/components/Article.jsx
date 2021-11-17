import React from "react";
import c2 from "../../images/c2.jpg";
import Card from "./Card";
import styled from "styled-components";

const StyledArticle = styled.div`
  display: flex;
  align-items: start;
  justify-content: flex-start;
  flex-direction: column;
  margin-top: 50px;
  width: 900px;
  @media (max-width: 1024px) {
    cursor: pointer;
    width: 100%;
  }
  @media (max-width: 767px) {
    width: 100%;
  }

  p {
    color: rgb(108, 127, 135);
    margin: 0 0 10px;
    line-height: 1.6;

    @media (max-width: 1024px) {
      margin: 10px 0px 8px 0px;
      font-size: 16px;
    }

    @media (max-width: 767px) {
      margin: 10px 0px 8px 0px;
      font-size: 12px;
      letter-spacing: 0.01071em;
    }
  }

  h2 {
    color: rgb(2, 37, 77);
    font-weight: 700;
    margin: 0 0 10px;
    line-height: 24px;
    font-size: 20px;
    text-align: initial;
    margin-bottom: 20px;
    max-width: 278px;

    @media (max-width: 1024px) {
      font-size: 20px;
      margin-bottom: 8px;
      width: 278px;
      color: black;
    }

    @media (max-width: 767px) {
      font-size: 20px;
      margin-bottom: 8px;
      width: 278px;
      color: black;
    }
  }

  img {
    width: 500px;
    height: 210px;
    @media (max-width: 1024px) {
      width: 100%;
      height: 215px;
      object-fit: cover;
    }

    @media (max-width: 767px) {
      width: 100%;
      /* height: 100%; */
    }
  }

  .text {
    color: rgb(108, 127, 135);
    margin: 0;

    @media (max-width: 767px) {
      margin-bottom: 8px;
      font-size: 16px;
    }
  }
  .text span:hover {
    cursor: pointer;
    text-decoration: underline;
    text-decoration-color: rgb(21, 219, 149);
  }

  .articleStyle {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 900px;

    @media (max-width: 1024px) {
      width: 100%;

      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: space-between;
      text-align: left;
    }

    @media (max-width: 767px) {
      width: 100%;
      /* margin-left: -24px;
      margin-right: -24px; */
      /* padding: 10px; */
    }
  }

  .article {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 370px;
    margin-left: 20px;
    height: 210px;
    text-align: left;

    @media (max-width: 1024px) {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      text-align: left;
      margin-left: 0px;
    }

    @media (max-width: 767px) {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      margin: 0px;
      line-height: 24px;
    }
  }
`;

export default function Article() {
  let text =
    " Lorem Ipsum is simply dummy text of the printing and typesetting\
    industry. Lorem Ipsum has been the industry's standard dummy\
    text ever since the 1500s, when an unknown printer took a galley\
    of type and scrambled it to make a type specimen book. It has\
    survived not only five centuries, but also the leap into\
    electronic typesetting, remaining essentially unchanged. It was\
    popularised in the 1960s with the release of Letraset sheets\
    containing Lorem Ipsum passages, and more recently with desktop\
    publishing software like Aldus PageMaker including versions of\
    Lorem Ipsum.";
  text = text.substring(0, 100);
  return (
    <div>
      <StyledArticle>
        <h2>Featured articles</h2>

        <div className="articleStyle">
          <img src={c2} alt="article" />
          <div className="article">
            <p>
              <span style={{ color: "rgb(21, 219, 149)" }}> Debt</span> June 29,
              2021
            </p>
            <h2>
              SURVEY: Millenials Still Have No Regrets About Going In To Travel
              Debt
            </h2>
            <p className="text">
              {text}...
              <span style={{ color: "rgb(21, 219, 149)" }}>Read More</span>
            </p>
          </div>
        </div>
      </StyledArticle>
      <Card />
    </div>
  );
}
