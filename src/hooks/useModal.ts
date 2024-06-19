import { useState } from "react";

interface UseModal {
  isOpenModal: boolean;
  toggleModal: () => void;
}
export const useModal = (): UseModal => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const toggleModal = () => {
    setIsOpenModal(!isOpenModal);
  };

  return { isOpenModal, toggleModal };
};
