import React from "react";
import styled, { css } from "styled-components";

const Button = ({ children, type, onClick, variant, disabled, ...props }) => {
  return (
    <>
      <div>
        <StyledButton
          type={type}
          onClick={onClick}
          variant={variant}
          disabled={disabled}
          {...props}
        >
          {children}
        </StyledButton>
      </div>
    </>
  );
};

export default Button;

const StyledButton = styled.button`
  width: ${(props) =>
    props.variant === "sign"
      ? 440
      : props.variant === "add"
      ? 99
      : props.variant === "close"
      ? 110
      : props.variant === "cart"
      ? 249
      : "none"};
  height: ${(props) =>
    props.variant === "sign"
      ? 50
      : props.variant === "add"
      ? 41
      : props === "close"
      ? 44
      : props.variant === "cart"
      ? 59
      : "none"};
  border: ${(props) => (props.variant === "close" ? "#8A2B06" : "none")};
  cursor: pointer;
  border-radius: ${(props) =>
    props.variant === "sign"
      ? 15
      : props.variant === "add"
      ? 20
      : props.variant === "cart"
      ? 30
      : "none"};
  color: ${(props) =>
    props.variant === "sign"
      ? "#FAFAFA"
      : props.variant === "add"
      ? "#FFFFFF"
      : props.variant === "close"
      ? "#8A2B06"
      : props.variant === "cart"
      ? "#FFFFFF"
      : "none"};

  ${({ props }) => {
    switch (props.variant) {
      case "sign":
        return css`
          background-color: #060874;
          &:hover {
            background-color: #151783;
          }
          &:active {
            background-color: #101039;
          }
        `;
      case "add":
        return css`
          background-color: #8a2b06;
          &:hover {
            background-color: #7e2a0a;
          }
          &:active {
            background-color: #993108;
          }
          &:disabled {
            background-color: #ffffff;
          }
        `;
      case "close":
        return css`
          background-color: #fafafa0;
          &:hover {
            background-color: #8a2b06;
          }
          &:active {
            background-color: #993108;
          }
          &:disabled {
            background-color: #cac6c4;
          }
        `;
      case "card":
        return css`
          background-color: #5a1f08;
          &:hover {
            background-color: #782d10;
          }
          &:active {
            background-color: #431b0c;
          }
        `;
      default:
        return null;
    }
  }}
`;
