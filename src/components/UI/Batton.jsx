import React from "react";
import styled from "styled-components";

const Batton = ({ children, type, onClick, variant, disabled, ...props }) => {
  return (
    <>
      <div>
        <StyledBatton
          type={type}
          onClick={onClick}
          variant={variant}
          disabled={disabled}
          {...props}
        >
          {children}
        </StyledBatton>
      </div>
    </>
  );
};

export default Batton;

const StyledBatton = styled.button`
  width: 110px;
  height: 44px;

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
