import React from "react";
import styled from "styled-components";

const Input = ({ type, onChange, style, placeholder, ...rest }) => {
  return (
    <StyledInput
      type={type}
      onChange={onChange}
      placeholder={placeholder}
      style={style}
      {...rest}
    />
  );
};

export default Input;

const StyledInput = styled.input`
  width: 100%;
  border-radius: 8px;
  border: 1px solid #ccc;
  padding: 10px;
  outline: none;
  box-shadow: 0px 0px 5px 0px #98d5f1;
  padding: 10px;
  margin: 10px 0;
`;
