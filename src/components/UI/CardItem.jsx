import React, { useContext } from "react";
import styled from "styled-components";
import Input from "./Input";
import { Icons } from "../../assets";
import IconButton from "./IconButtons";
import { MyContext } from "../../context/CardContext";

export const CardItem = ({ id, title, description, price, amount }) => {
  const { dispatch } = useContext(MyContext);

  return (
    <StyledLi key={id}>
      <TextContent>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Price>${price.toFixed(2)}</Price>
      </TextContent>
      <Actions>
        <StyledAmount>
          <label htmlFor={`amount-${id}`}>Amount</label>
          <AmountInput
            id={`amount-${id}`}
            type="number"
            min="1"
            max="5"
            defaultValue={amount}
          />
        </StyledAmount>
        <IconButton
          onClick={() => dispatch({ type: "ADD", payload: id })}
          variant="add"
        >
          <Icons.Whitepluse /> Add
        </IconButton>
      </Actions>
    </StyledLi>
  );
};

const StyledLi = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #ccc;
  background: white;
  width: 1039px;
`;

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Title = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
`;

const Description = styled.span`
  font-size: 0.9rem;
  color: #666;
`;

const Price = styled.span`
  font-size: 1.1rem;
  font-weight: bold;
  color: #b3581d;
`;

const Actions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 0.5rem;
`;

const AmountInput = styled(Input)`
  width: 50px;
  padding: 0.3rem;
  text-align: center;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const StyledAmount = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
