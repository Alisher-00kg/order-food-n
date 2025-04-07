import styled from "styled-components";
import { useModal } from "../../../context/ModalContext";
import { Button } from "../Button";

export const Modal = ({ children, handleOrder }) => {
  const { isOpenModal, closeModal } = useModal();

  if (!isOpenModal) return null;

  return (
    <StyledModal onClick={closeModal}>
      <StyledCloseModal onClick={(event) => event.stopPropagation()}>
        {children}
        <StyledMiniCard>
          <StdTotAm>Total Amount</StdTotAm>
          <span className="price">$200.99</span>
        </StyledMiniCard>

        <StyledContent>
          <Button onClick={closeModal} variant={"close"}>
            Close
          </Button>
          <Button variant={"add"} onClick={handleOrder}>
            Order
          </Button>
        </StyledContent>
      </StyledCloseModal>
    </StyledModal>
  );
};

const StyledModal = styled.div`
  background-color: #383838;
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  z-index: 2;
`;

const StyledCloseModal = styled.div`
  width: 711px;
  max-height: 80vh;
  background-color: #ffffff;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  gap: 20px;
  padding: 0px 20px 0px 20px;
  overflow-y: auto;

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
const StdTotAm = styled.span`
  font-weight: 700;
  font-size: 20px;
`;
const StyledMiniCard = styled.div`
  display: flex;
  gap: 25px;
  width: 540px;
  align-items: center;
  justify-content: space-between;
`;

export default Modal;
