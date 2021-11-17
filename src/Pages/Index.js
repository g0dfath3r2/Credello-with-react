import React from "react";
import styled from "styled-components";
import Carousel from "../components/Carousel";
import FirstSection from "./components/firstSection";
import Loan from "./components/Loans";
import Article from "./components/Article";
import Privacy from "./components/Privacy";
import GetStarted from "./components/GetStarted";
import Footer from "../components/Footer";

const StyledContainer = styled.div`
  padding: 0;
  margin: auto;
  /* margin: 0; */
  width: 900px;
  height: 100%;

  @media (max-width: 1024px) {
    justify-content: left;
    width: 100%;
    padding: 40px 24px;
    /* margin: 0px; */
  }
  @media (max-width: 768px) {
    justify-content: left;
  }
`;

export default function Home() {
  return (
    <StyledContainer>
      <FirstSection />
      <Carousel />
      <Loan />
      <Article />
      <Privacy />
      <GetStarted />
      <Footer />
    </StyledContainer>
  );
}
