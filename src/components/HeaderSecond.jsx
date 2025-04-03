import React from "react";
import styled from "styled-components";
import HeaderButton from "./UI/HeaderButton";

export default function Header() {
  return (
    <HeaderContainer>
      <Title>ReactMeals</Title>
      <HeaderButton />
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
