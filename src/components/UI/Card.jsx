import React, { useState } from "react";
import styled from "styled-components";

export default function Card() {
  const [items, setItems] = useState([
    { id: 1, name: "Barbecue Burger", price: 22.99, quantity: 1 },
    { id: 2, name: "Schnitzel", price: 22.99, quantity: 1 },
  ]);

  const updateQuantity = (id, delta) => {
    setItems(
      items.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const totalAmount = items
    .reduce((sum, item) => sum + item.price * item.quantity, 0)
    .toFixed(2);

  return (
    <CartContainer>
      {items.map((item) => (
        <Item key={item.id}>
          <div>
            <ItemName>{item.name}</ItemName>
            <Price>${item.price.toFixed(2)}</Price>
          </div>
          <Quantity>
            <IconButton
              variant="close"
              onClick={() => updateQuantity(item.id, -1)}
            >
              -
            </IconButton>
            <span>x {item.quantity}</span>
            <IconButton
              variant="add"
              onClick={() => updateQuantity(item.id, 1)}
            >
              +
            </IconButton>
          </Quantity>
        </Item>
      ))}
      <Total>
        <span>Total Amount</span>
        <span>${totalAmount}</span>
      </Total>
      <ActionButtons>
        <IconButton variant="close">Close</IconButton>
        <IconButton variant="add">Order</IconButton>
      </ActionButtons>
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

const IconButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border: none;
  cursor: pointer;
  background-color: ${(props) =>
    props.variant === "add" ? "#8a2b06" : "transparent"};
  color: ${(props) => (props.variant === "add" ? "white" : "#8a2b06")};
  border: ${(props) =>
    props.variant === "close" ? "1px solid #8a2b06" : "none"};
  width: ${(props) => (props.variant === "add" ? "99px" : "48px")};
  height: ${(props) => (props.variant === "add" ? "41px" : "36px")};
  border-radius: ${(props) => (props.variant === "add" ? "20px" : "8px")};
  font-size: 14px;
  font-weight: 700;
  &:hover {
    background: ${(props) => (props.variant === "add" ? "#7e2a0a" : "#8a2b06")};
    color: white;
  }
  &:active {
    background: ${(props) => (props.variant === "add" ? "#993108" : "#992b06")};
  }
  &:disabled {
    background: #cac6c4;
    color: #fff;
  }
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
