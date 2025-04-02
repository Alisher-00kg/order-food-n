import React, { createContext, useState } from "react";

export const ModalContext = createContext({});

export const ModalProvider = ({ children }) => {
  const [isopenModal, setIsOpenModal] = useState(false);
  const [content, setContent] = useState(null);

  const openModal = (modalContent) => {
    setContent(modalContent);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpenModal(false);
    setContent(null);
  };

  return (
    <ModalContext.Provider value={{ isopenModal, openModal, closeModal, content }}>
      {children}
    </ModalContext.Provider>
  );
};
