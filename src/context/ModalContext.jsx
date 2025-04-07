import React, { createContext, useContext, useState } from "react";
import { foods } from "../utils/constants/foods";

export const ModalContext = createContext({});

export const ModalProvider = ({ children }) => {
  // const [order, setOrder] = useState([...foods]);
  const [isOpenModal, setIsOpenModal] = useState(false);

  // const orderClick = () => setOrder([]);

  const openModal = () => setIsOpenModal(true);

  const closeModal = () => setIsOpenModal(false);

  return (
    <ModalContext.Provider value={{ isOpenModal, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);
