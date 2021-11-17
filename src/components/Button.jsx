import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledButton = styled.button`
  padding: 8px 18px;
  background-color: rgb(21, 219, 149);
  border: 0;
  outline: 0;
  font-size: 16px;
  border-radius: 4px;
  cursor: pointer;
  letter-spacing: 0.14px;
  box-shadow: none;
  color: rgb(255, 255, 255);
  height: 50px;

  :hover {
    background-color: rgb(0, 185, 121);
  }
`;

export default function Button({ buttonText }) {
  return <StyledButton>{buttonText}</StyledButton>;
}

Button.propTypes = {
  buttonText: PropTypes.string.isRequired,
};
