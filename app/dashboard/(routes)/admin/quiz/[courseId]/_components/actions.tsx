"use client";

import { Trash } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

import { ConfirmModal } from "@/components/modals/confirm-modal";
import { Button } from "@/components/ui/button";

import {
  useDeleteQuizMutation,
  useUpdateQuizMutation,
} from "@/redux/api/quizApi";
import { onClose, onOpen } from "@/redux/features/modal/modalSlice";
import { useDispatch } from "react-redux";

interface ActionsProps {
  disabled: boolean;
  quizId: string;
  isPublished: boolean;
}

export const Actions = ({ disabled, quizId, isPublished }: ActionsProps) => {
  const router = useRouter();

  const [deleteQuiz] = useDeleteQuizMutation();
  const [updateCourse] = useUpdateQuizMutation();
  const dispatch = useDispatch();

  const handleOpenModal = () => {
    dispatch(onOpen());
  };

  // const confetti = useConfettiStore();

  const [isLoading, setIsLoading] = useState(false);

  const onClick = async () => {
    try {
      setIsLoading(true);

      if (isPublished) {
        await updateCourse({
          id: quizId,
          data: {
            isPublished: false,
          },
        });
      } else {
        await updateCourse({
          id: quizId,
          data: {
            isPublished: true,
          },
        });
        toast.success("Course published");
        dispatch(onClose());
      }
      router.refresh();
    } catch {
      toast.error("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  const onDelete = async () => {
    try {
      setIsLoading(true);
      await deleteQuiz(quizId);
      router.push(`/dashboard/admin/quiz`);
      toast.success("Quiz deleted");
      router.refresh();
    } catch {
      toast.error("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center gap-x-2">
      <Button
        onClick={onClick}
        className="bg-green-800 hover:bg-green-600 text-white hover:text-white"
        disabled={disabled || isLoading}
        variant="outline"
        size="sm"
      >
        {isPublished ? "Unpublished" : "Publish"}
      </Button>
      <ConfirmModal onConfirm={onDelete}>
        <Button size="sm" disabled={isLoading}>
          <Trash className="h-4 w-4" />
        </Button>
      </ConfirmModal>
    </div>
  );
};
