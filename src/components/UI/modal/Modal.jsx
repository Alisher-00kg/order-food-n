import React, { useContext } from "react";

import styled from "styled-components";
import { ModalContext } from "../../../context/ModalContext";

export const Modal = () => {
  const { isOpenModal, closeModal, content } = useContext(ModalContext);

  if (!isOpenModal) return null;

  return (
    <StyledModal>
      <StyledCloseModal onClick={closeModal}>
        <StyledMiniCard>
          <StdTotAm>Total Amount</StdTotAm>
          <span className="price">$200.99</span>
        </StyledMiniCard>
        <StyledContent>
          <StyledButtonClose onClick={closeModal}>Close</StyledButtonClose>
          <StyledButtonOrder>Order</StyledButtonOrder>
        </StyledContent>
        {content}
      </StyledCloseModal>
    </StyledModal>
  );
};

const StyledModal = styled.div`
  background-color: #383838;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledCloseModal = styled.div`
  width: 671px;
  height: 437px;
  background-color: #ffffff;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: end;
  gap: 20px;
  padding: 0px 20px 0px 20px;
  span.price {
    color: #ad5502;
    font-size: 18px;
    font-weight: 600;
  }
`;

const StyledContent = styled.div`
  width: 550px;
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 20px;
`;
const StyledButtonClose = styled.button`
  width: 110px;
  height: 44px;
  border-radius: 20px;
  border: 1px;
`;
const StyledButtonOrder = styled.button`
  width: 110px;
  height: 44px;
  background-color: #8a2b06;
  border-radius: 20px;
  border: 1px;
`;

const StdTotAm = styled.span`
  font-weight: 700;
  font-size: 20px;
`;
const StyledMiniCard = styled.div`
  display: flex;
  gap: 25px;
  width: 550px;
  align-items: center;
  justify-content: space-between;
`;

export default Modal;
