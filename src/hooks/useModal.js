import { useState } from "react";

export const useModal = (initialValue = false) => {
  const [isOpen, setIsOpen] = useState(initialValue);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  const handlePropagationModal = (e) => e.stopPropagation();
  return [isOpen, openModal, closeModal, handlePropagationModal];
};
