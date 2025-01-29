"use client";

import { createContext, useContext, useState } from "react";

const ModalContext = createContext();   

export const ModalProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const openModal = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setModalContent(null);
    setIsModalOpen(false);
  };

  return (
    <ModalContext.Provider value={{ isModalOpen, modalContent, openModal, closeModal }}>
      {children}
      {isModalOpen && <div className="modal">{modalContent}</div>}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);
