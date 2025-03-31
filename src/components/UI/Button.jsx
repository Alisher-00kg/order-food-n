import React from "react";
import styled from "styled-components";

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
  width: 440px;
  height: 44px;
  border: ${(props) => (props.variant === "close" ? "#8A2B06" : "none")};
  cursor: pointer;
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
  background: ${(props) =>
    props.variant === "outlined"
      ? "transparent"
      : props.variant === "sign"
      ? "#060874"
      : props.variant === "add"
      ? "#8A2B06"
      : props.variant === "close"
      ? "#FAFAFA"
      : props.variant === "cart"
      ? "#5A1F08"
      : "none"};
`;
