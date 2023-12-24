"use client"; // Error components must be Client Components

import { Button } from "@/components/ui/button";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="h-screen flex flex-col justify-center items-center gap-4 ">
      <h1 className="text-4xl text-red-700">Oops!⚠️</h1>
      <h2 className="text-3xl text-red-600">Something went wrong ☢️</h2>
      <p className="text-gray-500 text-sm md:w-1/2 text-center">
        {error.message || "Unknown error"}
      </p>

      <Button
        size={"lg"}
        variant={"destructive"}
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </Button>
    </div>
  );
}
