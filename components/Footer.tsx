import Image from "next/image";
import Link from "next/link";

import { BiLogoLinkedin } from "react-icons/bi";
import { BsFacebook, BsTwitter } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { IoMail } from "react-icons/io5";
import { MdCall } from "react-icons/md";
import Container from "./ui/container";

const Footer = () => {
  return (
    <footer className="bg-[#EBF6FF]">
      <Container>
        <div className="pt-48 pb-10">
          <div className="grid grid-cols-1 md:grid-cols-6  gap-4 px-10">
            <div className=" md:col-span-3 ">
              <h1 className="text-[20px] font-bold mb-1 text-[#26aae1]">
                Discover
              </h1>

              <ul className="list-none">
                <li className="text-1xl hover:text-[#0091FF]">
                  {" "}
                  <Link href="/">Home</Link>
                </li>
                <li className="text-1xl hover:text-[#0091FF]">
                  {" "}
                  <Link href="/packages">Packages</Link>
                </li>
                <li className="text-1xl hover:text-[#0091FF]">
                  {" "}
                  <Link href="/contact">Contact</Link>
                </li>

                <li className=" text-[#26aae1] hover:text-[#0091FF] mt-2">
                  {" "}
                  <Link href="mailto:info@estateease.com">
                    <span className="flex items-center gap-2">
                      <IoMail /> info@estateease.com
                    </span>
                  </Link>
                </li>
                <li className="text-[#26aae1] hover:text-[#0091FF]">
                  {" "}
                  <Link href="tel:+12 3456 7890">
                    <span className="flex items-center gap-2">
                      <MdCall /> + 12 3456 7890
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h1 className="text-[20px] font-bold mb-1 text-[#26aae1]">
                Payment Methods
              </h1>
              <div className="flex gap-3 mt-4 ">
                <div>
                  <Image
                    src="/assets/logos-mastercard.png"
                    alt="mastercard"
                    width={30}
                    height={30}
                  />
                </div>
                <div className="flex justify-center items-center">
                  <Image
                    src="/assets/vector.png"
                    alt="mastercard"
                    width={30}
                    height={30}
                  />
                </div>
                <div className="flex justify-center items-center">
                  <Image
                    src="/assets/bkash-log.png"
                    alt="mastercard"
                    width={40}
                    height={20}
                  />
                </div>
                <div className="flex justify-center items-center">
                  <Image
                    src="/assets/nagad-logo.png"
                    alt="mastercard"
                    width={40}
                    height={25}
                  />
                </div>
              </div>
            </div>
            <div>
              <h1 className="text-[20px] font-bold mb-1 text-[#26aae1]">
                Help ?
              </h1>
              <p className="text-[#384652] font-semibold">
                We are Always here for you! Knock us on Messenger anytime or
                Call our Hotline (10AM - 11PM).
              </p>
            </div>
            <div>
              <h1 className="text-[20px] font-bold mb-1 text-[#26aae1]">
                Address
              </h1>
              <ul className="list-none">
                <li className="">123 Lorem Ipsum Street</li>
                <li className="">Jakarta, Indonesia</li>
              </ul>
              <div className="mt-10 flex justify-between">
                <div className="h-10 w-10  border   rounded-full flex items-center justify-center ">
                  <Link href="/" className="text-[#4267B2] text-4xl">
                    <BsFacebook />
                  </Link>
                </div>
                <div className="h-10 w-10  border border-[#26aae1] rounded-full flex items-center justify-center ">
                  <Link href="/" className="text-[#1DA1F2] text-xl">
                    <BsTwitter />
                  </Link>
                </div>
                <div className="h-10 w-10  border border-[#26aae1] rounded-full flex items-center justify-center ">
                  <Link href="/" className="text-xl">
                    <FcGoogle />
                  </Link>
                </div>
                <div className="h-10 w-10  border border-[#26aae1] rounded-full flex items-center justify-center ">
                  <Link href="/" className="text-[#0A66C2] text-xl">
                    <BiLogoLinkedin />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <hr className="h-px mt-8 mb-2 bg-black border-0 " />
          <div className="md:flex md:justify-between text-center md:px-20 items-center">
            <div className="text-2xl font-bold">
              <h1>
                <Link href="/">
                  <span className="text-[#384652]">Estate</span>
                  <span className="text-[#26aae1]"> Ease</span>
                </Link>
              </h1>
            </div>
            <div>
              <p className="text-[#384652] font-semibold">
                © Copyright 2023 Estate Ease
              </p>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
