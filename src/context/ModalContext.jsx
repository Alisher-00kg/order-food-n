import React, { createContext, useState } from "react";

export const ModalContext = createContext({});

export const ModalProvider = ({ children }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const openModal = () => {
    setIsOpenModal(!isOpenModal);
  };

  const closeModal = () => {
    setIsOpenModal(!isOpenModal);
  };

  return (
    <ModalContext.Provider value={{ isOpenModal, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};
