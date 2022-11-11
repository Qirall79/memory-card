import React from "react";
import { BsGithub } from "react-icons/bs";
const Footer = (props) => {
  return (
    <div className="w-full  h-[87px] bg-gradient-to-t from-black to-transparent flex justify-center items-center">
      <a href="https://github.com/Qirall79" className="flex items-center gap-4">
        <p className="text-white font-semibold">Walid Belfatmi</p>
        <BsGithub size={30} className="text-white" />
      </a>
    </div>
  );
};

export default Footer;
