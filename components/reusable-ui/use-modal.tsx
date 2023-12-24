"use client";

import { useDispatch, useSelector } from "react-redux";

import { onClose } from "@/redux/features/modal/modalSlice";
import { Modal } from "./modal";

interface ModalProps {
  children: React.ReactNode;
  title: string;
  description: string;
}

const UseModal: React.FC<ModalProps> = ({ children, title, description }) => {
  const dispatch = useDispatch();
  const isModalOpen = useSelector((state: any) => state.modal.isOpen);

  const handleCloseModal = () => {
    dispatch(onClose());
  };

  return (
    <Modal
      title={title}
      description={description}
      isOpen={isModalOpen}
      onClose={handleCloseModal}
    >
      {children}
    </Modal>
  );
};

export default UseModal;
