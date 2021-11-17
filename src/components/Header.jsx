import React, { useState } from "react";
import c1 from "../images/c1.png";
import styled from "styled-components";

const StyledHeader = styled.div`
  display: flex;
  position: relative;
  padding: 8px 16px;
  background-color: rgb(255, 255, 255);
  width: 100%;
  box-shadow: none;
  align-items: center;
  height: 65px;

  @media (max-width: 1024px) {
    display: flex;
    position: relative;
    padding: 8px 16px;
    background-color: rgb(255, 255, 255);
    width: 100%;
    box-shadow: none;
    align-items: center;
  }
  @media (max-width: 767px) {
  }

  img {
    position: absolute;
    top: 0;
    left: 40%;
    height: 50px;
    width: 250px;
    object-fit: cover;
  }

  p {
    margin: 4px 0px;
  }

  i {
    cursor: pointer;
  }

  .menu {
    width: 300px;
    position: fixed;
    z-index: 1100;
    padding: 3em 1em;
    height: 100%;
    background-color: rgb(255, 255, 255);
    transform: translateX(-150%);
    transition: all 0.5s ease 0s;
    text-align: left;
    overflow-x: hidden;
    overflow-y: scroll;
    top: 0px;
    left: 0px;
  }

  .menu-text {
    margin: 4px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 600;
    font-size: 16px;
    padding: 8px 16px;
    cursor: pointer;
  }
  .menu-text:hover {
    background-color: #f3f3f3;
  }
  .menu .menu-dropdown {
    padding: 8px 16px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);
    font-size: 1rem;
    margin: 4px 0px;
    line-height: 1.5;
    color: rgb(2, 37, 77);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .menu .menu-dropdown:hover {
    background-color: #f3f3f3;
  }
  .active {
    transform: translateX(0%);
  }

  .menu-mask {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0px;
    left: 0px;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 1000;
    opacity: 1;
    transition: opacity 0.3s ease 0s;
  }
  .close-icon {
    position: absolute;
    top: 8px;
    right: 8px;
    cursor: pointer;
  }

  .collapsed {
    max-height: 0;
    height: auto;
    transition: max-height 500ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  }

  .collapsed-menu-links {
    padding: 0 0 0 20px;
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;
    line-height: 2.3rem;
    color: #02254d;
    font-weight: 300;
    min-height: 100%;
    /* transition: height 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms; */
  }

  .collapsed-menu-links .menu-links {
    width: 100%;
    cursor: pointer;
  }
  .collapsed-menu-links .menu-links p {
    width: 200px;
    padding: 8px 16px;
    display: flex;
    flex-wrap: wrap;
    font-size: 14px;
    font-weight: 400;
  }
  .collapsed-menu-links .menu-links:hover {
    background-color: #f3f3f3;
  }

  .collapsed-menu-links span {
    font-weight: 700;
    padding: 0px 16px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .collapsed-menu-links span:hover {
    cursor: pointer;
    background-color: #f3f3f3;
  }

  .collapsed-sub-menu {
    width: 100%;
  }
  .collapsed-sub-menu span {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .collapsed-sub-menu-links {
    padding: 0 0 0 20px;
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;
    line-height: 2.3rem;
    color: #02254d;
    /* font-weight: 300; */
    min-height: 100%;
    font-size: 14px;
    font-weight: 400;
  }
  .collapsed-sub-menu-links div {
    width: 100%;
    padding: 8px 16px;
  }
  .collapsed-sub-menu-links div:hover {
    cursor: pointer;
    background-color: #f3f3f3;
  }
`;

export default function Header() {
  const [sidebarIsClicked, setSidebarIsClicked] = useState(false);
  const [collapsedMenu, setCollapsedMenu] = useState([]);

  function handleClick() {
    setSidebarIsClicked(!sidebarIsClicked);
  }

  const handleMenuClick = (e) => {
    const elementId = e.target.id;

    setCollapsedMenu((prevValues) =>
      collapsedMenu.includes(elementId)
        ? collapsedMenu.filter((htmlElementId) => {
            return htmlElementId !== elementId;
          })
        : [...prevValues, elementId]
    );
  };

  console.log(collapsedMenu);

  return (
    <StyledHeader>
      <div
        className={` ${sidebarIsClicked ? "menu-mask" : ""}`}
        onClick={handleClick}
      >
        <div className={`menu ${sidebarIsClicked ? "active" : ""}`}>
          <i className="fal fa-times  close-icon" onClick={handleClick}></i>
          <div className="menu-dropdown">
            <p>Home</p>
          </div>

          {/* -------- Manage Debts ------- */}

          <div>
            <div
              id="dropdownLink1"
              onClick={handleMenuClick}
              className="menu-dropdown menu-text"
            >
              Manage Debt
              <i
                className={`${
                  collapsedMenu.includes("dropdownLink1")
                    ? "fas fa-angle-up"
                    : "fas fa-angle-down"
                }`}
              ></i>
            </div>
            <div
              className="collapsed"
              style={{
                maxHeight: collapsedMenu.includes("dropdownLink1") && "1000px",
                overflow: " hidden ",
              }}
            >
              <div className="collapsed-menu-links">
                <div className="menu-links">
                  <p>Debt Consolidation</p>
                </div>
                <div className="menu-links">
                  <p>Debt Consolidation Loans</p>
                </div>
                <div className="menu-links">
                  <p>Credit Card Debt Consolidation</p>
                </div>
                <div className="menu-links">
                  <p>Debt Consolidation Calculator</p>
                </div>
                <div className="menu-links">
                  <p>Debt Payoff Calculator</p>
                </div>
                <div className="collapsed-sub-menu">
                  <div
                    onClick={handleMenuClick}
                    id="subDropdownLink1"
                    className="menu-text"
                  >
                    Debt 101
                    <i
                      className={`${
                        collapsedMenu.includes("subDropdownLink1")
                          ? "fas fa-angle-up"
                          : "fas fa-angle-down"
                      }`}
                    ></i>
                  </div>
                  <div
                    className="collapsed"
                    style={{
                      maxHeight:
                        collapsedMenu.includes("subDropdownLink1") && "1000px",
                      overflow: " hidden ",
                    }}
                  >
                    <div className="collapsed-sub-menu-links">
                      <div>
                        <p>How To Get Out Of Debt</p>
                      </div>
                      <div>
                        <p>How To Pay Off Debt Fast</p>
                      </div>
                      <div>
                        <p>How To Pay Off Debt Fast With Low Income</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* -------- Personal Loans ------- */}

          <div>
            <div
              id="dropdownLink2"
              onClick={handleMenuClick}
              className="menu-dropdown menu-text"
            >
              Personal Loans
              <i
                className={`${
                  collapsedMenu.includes("dropdownLink2")
                    ? "fas fa-angle-up"
                    : "fas fa-angle-down"
                }`}
              ></i>
            </div>
            <div
              className="collapsed"
              style={{
                maxHeight: collapsedMenu.includes("dropdownLink2") && "1000px",
                overflow: "hidden",
              }}
            >
              <div className="collapsed-menu-links">
                <div className="menu-links">
                  <p>Best Personal Loans</p>
                </div>
                <div className="collapsed-sub-menu">
                  <div
                    onClick={handleMenuClick}
                    id="subDropdownLink2"
                    className="menu-text"
                  >
                    Personal Loan Reviews
                    <i
                      className={`${
                        collapsedMenu.includes("subDropdownLink2")
                          ? "fas fa-angle-up"
                          : "fas fa-angle-down"
                      }`}
                    ></i>
                  </div>
                  <div
                    className="collapsed"
                    style={{
                      maxHeight:
                        collapsedMenu.includes("subDropdownLink2") && "1000px",
                      overflow: "hidden",
                    }}
                  >
                    <div className="collapsed-sub-menu-links">
                      <div>
                        <p>Marcus Review</p>
                      </div>
                      <div>
                        <p>LightStream Review</p>
                      </div>
                      <div>
                        <p>Sofi Review</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="collapsed-sub-menu">
                  <div
                    onClick={handleMenuClick}
                    id="subDropdownLink3"
                    className="menu-text"
                  >
                    Personal Loans 101
                    <i
                      className={`${
                        collapsedMenu.includes("subDropdownLink3")
                          ? "fas fa-angle-up"
                          : "fas fa-angle-down"
                      }`}
                    ></i>
                  </div>
                  <div
                    className="collapsed"
                    style={{
                      maxHeight:
                        collapsedMenu.includes("subDropdownLink3") && "1000px",
                      overflow: "hidden",
                    }}
                  >
                    <div className="collapsed-sub-menu-links">
                      <div>
                        <p>Personal Loans for Bad Credit</p>
                      </div>
                      <div>
                        <p>Personal Loan for Debt Consolidation</p>
                      </div>
                      <div>
                        <p>Secured vs Unsecured Personal Loans</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* -------- Credit Cards ------- */}

          <div>
            <div
              onClick={handleMenuClick}
              id="DropdownLink3"
              className="menu-dropdown"
            >
              Credit Cards
              <i
                className={`${
                  collapsedMenu.includes("DropdownLink3")
                    ? "fas fa-angle-up"
                    : "fas fa-angle-down"
                }`}
              ></i>
            </div>
            <div
              className="collapsed"
              style={{
                maxHeight: collapsedMenu.includes("DropdownLink3") && "1000px",
                overflow: "hidden",
              }}
            >
              <div className="collapsed-menu-links ">
                <div className="menu-links">
                  <p>Balance Transfer Credit Cards</p>
                </div>
                <div className="collapsed-sub-menu">
                  <div
                    onClick={handleMenuClick}
                    id="subDropdownLink4"
                    className="menu-text"
                  >
                    Credit Card Reviews
                    <i
                      className={`${
                        collapsedMenu.includes("subDropdownLink4")
                          ? "fas fa-angle-up"
                          : "fas fa-angle-down"
                      }`}
                    ></i>
                  </div>
                  <div
                    className="collapsed"
                    style={{
                      maxHeight:
                        collapsedMenu.includes("subDropdownLink4") && "1000px",
                      overflow: "hidden",
                    }}
                  >
                    <div className="collapsed-sub-menu-links">
                      <div>
                        <p>Citi DoubleCash Review</p>
                      </div>
                      <div>
                        <p>Citi Diamond Preferred Review</p>
                      </div>
                      <div>
                        <p>U.S. Bank Platinum Review</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="collpased-sub-menu">
                  <div
                    className="menu-text"
                    onClick={handleMenuClick}
                    id="subDropdownLink5"
                  >
                    Credit Cards 101
                    <i
                      className={`${
                        collapsedMenu.includes("subDropdownLink5")
                          ? "fas fa-angle-up"
                          : "fas fa-angle-down"
                      }`}
                    ></i>
                  </div>
                  <div
                    className="collapsed"
                    style={{
                      maxHeight:
                        collapsedMenu.includes("subDropdownLink5") && "1000px",
                      overflow: "hidden",
                    }}
                  >
                    <div className="collapsed-sub-menu-links">
                      <div>
                        <p>Credit Card Payment</p>
                      </div>
                      <div>
                        <p>Credit Cards Interest Rates</p>
                      </div>
                      <div>
                        <p>Credit Cards for Bad Credit</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* -------- Home Equity Loans ------- */}
          <div>
            <div
              className="menu-dropdown menu-text"
              id="dropDownlink4"
              onClick={handleMenuClick}
            >
              Home Equity Loans
              <i
                className={`${
                  collapsedMenu.includes("dropDownlink4")
                    ? "fas fa-angle-up"
                    : "fas fa-angle-down"
                }`}
              ></i>
            </div>
            <div
              className="collapsed"
              style={{
                maxHeight: collapsedMenu.includes("dropDownlink4") && "1000px",
                overflow: "hidden",
              }}
            >
              <div className="collapsed-menu-links">
                <div className="menu-links">
                  <p>Home Equity Loans Rates</p>
                </div>
                <div className="collapsed-sub-menu">
                  <div
                    className="menu-text"
                    id="subDropdownLink6"
                    onClick={handleMenuClick}
                  >
                    Home Equity Loans 101
                    <i
                      className={`${
                        collapsedMenu.includes("subDropdownLink6")
                          ? "fas fa-angle-up"
                          : "fas fa-angle-down"
                      }`}
                    ></i>
                  </div>
                  <div
                    className="collapsed"
                    style={{
                      maxHeight:
                        collapsedMenu.includes("subDropdownLink6") && "1000px",
                      overflow: "hidden",
                    }}
                  >
                    <div className="collapsed-sub-menu-links">
                      <div>
                        <p>How to Apply for a Home Equity Loan</p>
                      </div>
                      <div>
                        <p>Pros and Cons of Home Equity Loan</p>
                      </div>
                      <div>
                        <p>Home Equity Loan for Bad Credit</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ---------Financial Resources --------- */}

          <div>
            <div
              className="menu-dropdown menu-text"
              onClick={handleMenuClick}
              id="dropDownLink6"
            >
              Financial Resources
              <i
                className={`${
                  collapsedMenu.includes("dropDownLink6")
                    ? "fas fa-angle-up"
                    : "fas fa-angle-down"
                }`}
              ></i>
            </div>
            <div
              className="collapsed"
              style={{
                maxHeight: collapsedMenu.includes("dropDownLink6") && "1000px",
                overflow: "hidden",
              }}
            >
              <div className="collapsed-menu-links">
                <div className="menu-links">
                  <p>Trending</p>
                </div>
                <div className="collapsed-sub-menu">
                  <div
                    className="menu-text"
                    onClick={handleMenuClick}
                    id="subDropdownLink7"
                  >
                    Credit 101
                    <i
                      className={`${
                        collapsedMenu.includes("subDropdownLink7")
                          ? "fas fa-angle-up"
                          : "fas fa-angle-down"
                      }`}
                    ></i>
                  </div>
                  <div
                    className="collapsed"
                    style={{
                      maxHeight:
                        collapsedMenu.includes("subDropdownLink7") && "1000px",
                      overflow: "hidden",
                    }}
                  >
                    <div className="collapsed-sub-menu-links">
                      <div>
                        <p>Credit Score Ranges</p>
                      </div>
                      <div>
                        <p>What is a Bad Credit Score</p>
                      </div>
                      <div>
                        <p>What is a Good Credit Score</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <i className="fas fa-bars" onClick={handleClick}></i>
      <a href="" style={{ marginLeft: "550px" }}>
        <img src={c1} alt="" />
      </a>
    </StyledHeader>
  );
}
