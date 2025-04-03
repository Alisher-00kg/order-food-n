import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "./UI/Button";

function Footer() {
  const [isOpen, setIsOpen] = useState(false);
  const [menuItems] = useState([
    "Люди которые принимали участие при создании сайта либо помогали:",
    "Алишер",
    "Данияр",
    "Кубания",
    "Нуриза",
    "Сымбат",
    "Нурболя",
  ]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <FooterContainer>
      <DropdownButton onClick={toggleDropdown}>О Комапании</DropdownButton>
      <h3>JS-5 | 2025</h3>
      <DropdownContent isOpen={isOpen}>
        {menuItems.map((item, index) => (
          <DropdownItem key={index}>{item}</DropdownItem>
        ))}
      </DropdownContent>
    </FooterContainer>
  );
}

export default Footer;

const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #8a2b06;
  color: #fff;
  padding: 40px;
`;

const DropdownButton = styled(Button)`
  background-color: #682004;
  color: #fff;
  border: none;
  padding: 10px 15px;
  cursor: pointer;
`;

const DropdownContent = styled.ul`
  list-style: none;
  padding: 0;
  margin: 10px 0 0;
  border: 1px solid #ffffff;
  display: ${(props) => (props.isOpen ? "block" : "none")};
`;

const DropdownItem = styled.li`
  padding: 8px 12px;
  &:hover {
    background-color: #555;
  }
`;
