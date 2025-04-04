import React from "react";
import styled from "styled-components";
import { Icons } from "../../assets";

export default function HeaderButton() {
  return (
    <StyledButton>
      <Icons.Basket />
      <span>Your Cart</span>
      <CartCount>{array} </CartCount>
    </StyledButton>
  );
}
const StyledButton = styled.button`
  background-color: #5a1f08;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  border-radius: 50px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  width: 249px;
  justify-content: center;
  border: none;
  color: white;
  font-size: 1rem;
  cursor: pointer;
`;

const CartCount = styled.span`
  background-color: #7e2a0a;
  padding: 6px 11px;
  border-radius: 50%;
  font-size: 0.9rem;
  font-weight: bold;
  color: white;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;
