import React from "react";
import styled from "styled-components";

const StyledFooter = styled.div`
  padding-top: 32px;
  padding-bottom: 40px;
  text-align: left;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));

  @media (min-width: 1024px) {
    margin-left: calc(-50 vw + 450 px);
    margin-right: calc(-50 vw + 450 px);
    padding-left: calc(50 vw - 450 px);
    padding-right: calc(50 vw - 450 px);
  }

  @media (max-width: 1024px) {
    grid-gap: 20px;

    text-align: left;
  }

  h2 {
    font-size: 14px;
    margin-bottom: 20px;
  }

  p {
    font-size: 12px;
    color: #6c7f87;
    margin-bottom: 5px;
  }
  p:hover {
    color: rgb(21, 219, 149);
    cursor: pointer;
    text-decoration: underline;
  }
`;

const StyledCopyright = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  align-items: flex-end;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 200px;
  }

  a {
    margin-left: 5px;
    color: #6c7f87;
  }
  a:hover {
    color: #4b4b4b;
  }

  p {
    font-size: 10px;
    color: #6c7f87;
    margin: 0px;
  }
`;

export default function Footer() {
  return (
    <div>
      <StyledFooter>
        <div>
          <h2>Credello</h2>
          <p>About Us</p>
          <p>Privacy Policy</p>
          <p>Terom of Use</p>
        </div>
        <div>
          <h2>Debt Help Tools</h2>
          <p>About Us</p>
          <p>Privacy Policy</p>
          <p>Terom of Use</p>
        </div>
        <div>
          <h2>Products</h2>
          <p>About Us</p>
          <p>Privacy Policy</p>
          <p>Terom of Use</p>
        </div>
        <div>
          <h2>Debt Management</h2>
          <p>About Us</p>
          <p>Privacy Policy</p>
          <p>Terom of Use</p>
        </div>
        <div>
          <h2>Credit Card Debt</h2>
          <p>About Us</p>
          <p>Privacy Policy</p>
          <p>Terom of Use</p>
        </div>
      </StyledFooter>

      <StyledCopyright>
        <div>
          <a href="">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="">support@credello.com</a>
        </div>
        <p>copyright 2021 all right are reserved</p>
      </StyledCopyright>
    </div>
  );
}
