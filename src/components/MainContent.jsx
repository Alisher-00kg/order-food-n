import React from "react";
import styled from "styled-components";
import BackgroundImage from "../assets/images/kartinka.png";
import { CardItem } from "./UI/CardItem";
import { foods } from "../utils/constants/foods";
const MainContent = () => {
  return (
    <StdMain>
      <StyledBacgr>ugiuhk</StyledBacgr>
      <StyleDiv>
        <h1>Delicious Food, Delivered To You</h1>
        <p>
          Choose your favorite meal from our broad selection of available meals
          and enjoy a delicious lunch or dinner at home.
        </p>
        <p>
          All our meals are cooked with high-quality ingredients, just-in-time
          and of course by  experienced chefs!
        </p>
      </StyleDiv>
      <StyledFoods>
        {foods.map((item) => (
          <CardItem key={item.id} {...item} />
        ))}
      </StyledFoods>
    </StdMain>
  );
};

export default MainContent;
const StdMain = styled.main`
  background-color: #383838f4;
  display: flex;
  flex-direction: column;
  align-items: center; 
  gap: 150px;
`;
const StyledBacgr = styled.div`
  background-image: url(${BackgroundImage});
  width: 100%;
  height: 400px;
`;
const StyleDiv = styled.div`
  width: 854px;
  height: 270px;
  background-color: #383838;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 90px 40px 90px;
  gap: 30px;
  position: absolute;
  top: 220px;

  h1 {
    font-weight: 600;
    font-size: 36px;
    line-height: 100%;
    letter-spacing: 0%;
    color: #ffffff;
  }
  p {
    color: #ffffff;

    font-weight: 500;
    font-size: 16px;
    line-height: 100%;
    letter-spacing: 0%;
    text-align: center;
  }
`;
const StyledFoods = styled.div`
  width: 1039;
  height: 564;
  border-radius: 20px;
`;
