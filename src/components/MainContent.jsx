import React, { useState } from "react";
import styled from "styled-components";
import BackgroundImage from "../assets/images/kartinka.png";
import { CardItem } from "./UI/CardItem";
import { foods } from "../utils/constants/foods";
import Modal from "./UI/modal/Modal";
import ModalItemCard from "./UI/ModalItemCard";
const MainContent = () => {
  const [selectedItems, setSelectedItems] = useState({});
  const [modalOpen, setModalOpen] = useState(false);

  const handleAddItem = (item) => {
    setSelectedItems((prevItems) => {
      const currentAmount = prevItems[item.id]?.amount || 0;
      const newAmount = currentAmount + item.amount;
      return {
        ...prevItems,
        [item.id]: { ...item, amount: newAmount },
      };
    });
    setModalOpen(true);
  };

  const handleIncrement = (id) => {
    setSelectedItems((prevItems) => ({
      ...prevItems,
      [id]: { ...prevItems[id], amount: prevItems[id].amount + 1 },
    }));
  };

  const handleDecrement = (id) => {
    setSelectedItems((prevItems) => {
      const newAmount = prevItems[id].amount - 1;
      if (newAmount <= 0) {
        const updateItems = { ...prevItems };
        delete updateItems[id];
        return updateItems;
      }
      return { ...prevItems, [id]: { ...prevItems[id], amount: newAmount } };
    });
  };
  const handleOrder = () => {
    setSelectedItems({});
  };
  return (
    <StdMain>
      <StyledBacgr></StyledBacgr>
      <StyleDiv>
        <h1>Delicious Food, Delivered To You</h1>
        <p>
          Choose your favorite meal from our broad selection of available meals
          and enjoy a delicious lunch or dinner at home.
        </p>

        <p>
          All our meals are cooked with high-quality ingredients, just-in-time
          and of course by experienced chefs!
        </p>
      </StyleDiv>
      <StyledFoods>
        {foods.map((item) => (
          <CardItem key={item.id} {...item} onAddItem={handleAddItem} />
        ))}
        {modalOpen && (
          <Modal handleOrder={handleOrder} onClose={() => setModalOpen(false)}>
            {Object.values(selectedItems).length > 0
              ? Object.values(selectedItems).map((item) => (
                  <ModalItemCard
                    key={item.id}
                    {...item}
                    onIncrement={() => handleIncrement(item.id)}
                    onDecrement={() => handleDecrement(item.id)}
                  />
                ))
              : null}
          </Modal>
        )}
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
