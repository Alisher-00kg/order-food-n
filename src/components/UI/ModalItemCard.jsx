import React from "react";
import styled from "styled-components";
import IconButton from "./IconButtons";
import { Icons } from "../../assets";

export const ModalItemCard = ({ id, title, price, amount }) => {
  return (
    <CartContainer>
      <Item key={id}>
        <StyledNameAndPrice>
          <ItemName>{title}</ItemName>
          <StyledPrice>
            <Price>${price.toFixed(2)}</Price>
            <StyledPTag>x{amount}</StyledPTag>
          </StyledPrice>
        </StyledNameAndPrice>
        <Quantity>
          <IconButton variant="close">
            <Icons.Minus />
          </IconButton>
          <IconButton variant="close">
            <Icons.Plus />
          </IconButton>
        </Quantity>
      </Item>
    </CartContainer>
  );
};

const CartContainer = styled.div`
  width: 671px;
  background: white;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  border-bottom: 1px solid #ddd;
  padding-bottom: 10px;
`;

const ItemName = styled.div`
  font-weight: bold;
`;

const Price = styled.div`
  color: #b26a1c;
  font-weight: bold;
  font-size: 18px;
`;

const Quantity = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;

const Total = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  margin-top: 20px;
`;

const StyledNameAndPrice = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const StyledPrice = styled.div`
  display: flex;
  align-items: center;
  gap: 47px;
`;

const StyledPTag = styled.p`
  width: 46px;
  height: 36px;
  border: 1px solid #d6d6d6;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
