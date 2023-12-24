"use client";

import ReactConfetti from "react-confetti";

// import { useConfettiStore } from "@/hooks/use-confetti-store";
import { onClose } from "@/redux/features/modal/modalSlice";
import { useDispatch, useSelector } from "react-redux";

export const ConfettiProvider = () => {
  //   const confetti = useConfettiStore();

  const isModalOpen = useSelector((state: any) => state.modal.isOpen);
  const dispatch = useDispatch();

  console.log(isModalOpen, "hello");

  if (!false) return null;

  return (
    <ReactConfetti
      className="pointer-events-none z-[100]"
      numberOfPieces={500}
      recycle={false}
      onConfettiComplete={() => {
        dispatch(onClose());
      }}
    />
  );
};
