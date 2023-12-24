import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-screen flex flex-col justify-center items-center gap-4 ">
      <h1 className="  text-6xl">⛔ </h1>
      <h2 className="text-red-600 text-4xl">Not Found 404 </h2>
      <p className="text-gray-500 text-xl">
        The page you are looking for does not exist.
      </p>

      <Link href="/">
        <Button>Return Home</Button>
      </Link>
    </div>
  );
}
