import { PuffLoader } from "react-spinners";
export default function Loading() {
  // Or a custom loading skeleton component
  return (
    <div className=" h-screen w-screen flex justify-center items-center ">
      <PuffLoader color="#36d7b7" />
    </div>
  );
}
