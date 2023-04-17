import React from "react";
import { AiOutlineInstagram } from "react-icons/Ai";
import { SiApplepay } from "react-icons/Si";
import { RiVisaLine } from "react-icons/Ri";

const Footer = () => (
  <footer className=" bg-black text-white p-5">
    <section className="max-w-xs flex flex-row m-auto gap-6 justify-center">
      <AiOutlineInstagram size="56" aria-label="instagram" />
      <SiApplepay size="56" aria-label="apple pay" />
      <RiVisaLine size="56" aria-label="via" />
    </section>
  </footer>
);

export default Footer;
