import React from "react";
import styled from "styled-components";
import IconButton from "./IconButtons";
import { Button } from "./Button";
import { Icons } from "../../assets";

export default function ModalItemCard({ id, title, price, quantity }) {
  return (
    <CartContainer>
      <Item key={id}>
        <div>
          <ItemName>{title}</ItemName>
          <Price>${price.toFixed(2)}</Price>
        </div>
        <Quantity>
          <IconButton variant="close">
            <Icons.Minus />
          </IconButton>
          <span>x {quantity}</span>
          <IconButton variant="close">
            <Icons.Plus />
          </IconButton>
        </Quantity>
      </Item>
      <Total></Total>
    </CartContainer>
  );
}

const CartContainer = styled.div`
  width: 400px;
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
`;

const Quantity = styled.div`
  display: flex;
  align-items: center;
`;

const Total = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  margin-top: 20px;
`;

const ActionButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;
