"use client";

import { AvatarImage } from "@radix-ui/react-avatar";
import toast from "react-hot-toast";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const Hero = () => {
  return (
    <div className="grid grid-cols-12 gap-4 py-10 ">
      <div className="col-span-12  md:col-span-7 border p-24 bg-white rounded-xl shadow-md">
        <div className="flex gap-2 p-2 bg-[#F4F4F5] rounded-xl border-2 border-[#A4A4A4]  ">
          <Input
            className="shadow-inner rounded-lg focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-ring focus-visible:ring-offset-0"
            placeholder="Enter a join code "
          />
          <Button
            onClick={() => {
              toast.success("Code join Coming soong");
            }}
            className="bg-[#A076CC] hover:bg-[#7c39c4] shadow-2xl shadow-[#432c5b]   text-white px-4 py-2 rounded-lg"
          >
            Join
          </Button>
        </div>
      </div>
      <div className="flex  md:col-span-4 border justify-center items-center px-12 bg-white rounded-xl shadow-md">
        <div className="flex flex-col gap-2 justify-center items-center">
          <Avatar>
            <AvatarImage src="" alt="f4Faysal" />
            <AvatarFallback>fQ</AvatarFallback>
          </Avatar>
          <p className="text-sm">
            <span className="text-[#A076CC] underline cursor-pointer hover:text-[#9b68d2]">
              Sign up
            </span>
            &nbsp;
            <span className="text-sm text-gray-500">
              now to unlock your own avatar
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
