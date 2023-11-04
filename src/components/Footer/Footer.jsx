import React from "react";
import { Typography } from "@material-tailwind/react";

function Footer() {
  return (
    <footer className="flex w-full flex-col items-center bg-black justify-center gap-y-2 gap-x-12 text-white py-6 text-center md:justify-between">
      <Typography className="font-normal ">
        &copy; 2023{" "}
        <span className="text-blue-800 text-3xl">React Movies,</span> All Rights
        Reserved
      </Typography>
      <ul className="flex flex-wrap items-center gap-y-2 gap-x-4 ">
        <li>
          <Typography as="a" href="#" className=" text-red-500 font-bold">
            About Us
          </Typography>
        </li>
        <li>
          <Typography as="a" href="#" className=" text-red-500 font-bold">
            Terms of Use
          </Typography>
        </li>
        <li>
          <Typography as="a" href="#" className=" text-red-500 font-bold">
            Privacy
          </Typography>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
