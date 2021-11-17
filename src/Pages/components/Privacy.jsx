import React from "react";
import privacy from "../../images/privacy.png";
import styled from "styled-components";

const Container = styled.div`
  padding: 40px 0px;
  display: flex;
  background-color: #eaf4ff;

  @media (min-width: 1024px) {
    margin-left: calc(-50vw + 450px);
    margin-right: calc(-50vw + 450px);
    padding-left: calc(50vw - 450px);
    padding-right: calc(50vw - 450px);
  }

  @media (max-width: 1024px) {
    /* width: 100%; */
    margin: 0px -24px;
    padding: 31px 21px;
  }

  .privacy-container {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    text-align: left;
    width: 584px;
  }

  p {
    font-size: 20px;
    color: #02254d;
    font-weight: 400;

    @media (max-width: 1024px) {
      color: rgb(108, 127, 135);
      font-size: 16px;
    }
  }
  img {
    width: 150px;
    height: 176px;
    margin-left: 50px;
    object-fit: cover;
  }

  .heading {
    font-size: 24px;
    font-weight: 700;

    @media (max-width: 1024px) {
      font-size: 20px;
      color: black;
    }
  }
`;

export default function Privacy() {
  return (
    <Container>
      <div className="privacy-container">
        <p className="heading">No need to share personal data</p>
        <p>
          we get it- Financial decisions take time. Credello lets you explore
          customized recommendations with only your basic info
        </p>
        <p>
          Then, once you’re ready to take the next step, you can share more
          specifics to get a quote.
        </p>
      </div>
      <img src={privacy} alt="" style={{}} />
    </Container>
  );
}
