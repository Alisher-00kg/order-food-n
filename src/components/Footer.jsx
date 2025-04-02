import React, { useState } from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: #8a2b06;
  color: #fff;
  padding: 40px;
`;

const DropdownButton = styled.button`
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
      <DropdownButton onClick={toggleDropdown}>
        О Комапании
      </DropdownButton>
      <DropdownContent isOpen={isOpen}>
        {menuItems.map((item, index) => (
          <DropdownItem key={index}>{item}</DropdownItem>
        ))}
      </DropdownContent>
    </FooterContainer>
  );
}

export default Footer;
