import React from "react";
import styled from "styled-components";
import HeaderButton from "./UI/HeaderButton";

export default function Header({ isAuth, onAuthToggle }) {
  return (
    <HeaderContainer>
      <Title>ReactMeals</Title>
      <ButtonBox>
        <HeaderButton />
        <Button onClick={onAuthToggle}>{isAuth ? "Выйти" : "Войти"}</Button>
      </ButtonBox>
    </HeaderContainer>
  );
}
const HeaderContainer = styled.header`
  background-color: #8a2b06;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
  height: 86px;
  color: white;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
`;

const Button = styled.button`
  width: 96px;
  height: 59px;
  border-radius: 30px;
  border: none;
  color: #ffff;
  background: #5a1f08;
  &:hover{
    background: #7E2A0A;
  }
  &:active{
    background: #993108;
  }
`;

const ButtonBox = styled.div`
  display: flex;
  gap: 30px;
`
