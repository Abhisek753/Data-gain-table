"use client";
import React from "react";
import Image from "next/image";
import summaryIcon from "../navlogo.png";
import GWLOGO from "../GW Logo 1.png";
import Bell from "../notification-bing.png";
import Stick from "../stick.png";
import Grid from "../grid.png";
import Ak from "../ak.png";

import { FaChevronDown } from "react-icons/fa";

const Navbar = () => {
  return (
    <div>
      <div className="navbar flex items-center bg-white w-[95%] mx-auto rounded-md py-2 flex-col md:flex-row md:justify-between">
        {/* Left Part */}
        <div className="left-part w-full md:w-[40%] flex justify-between px-4 items-center mb-4 md:mb-0">
          {/* Logo */}
          <div className="logo">
            <Image src={summaryIcon} alt="logo"  className="w-[85%]" />
          </div>

          {/* Client Workspace */}
          <div className="client-section flex items-center gap-2 text-xs font-semibold text-[#2c4e6c]">
            <div>Client Workspace :</div>

            <div className="relative flex items-center">
              <Image
                src={GWLOGO}
                alt="Left Logo"
                className="absolute left-2 w-5 h-5"
              />

              {/* Select Box */}
              <select
                name="workspace"
                id="workspace-select"
                className="pl-6 pr-6 py-2 border-[1px] border-[#edeff2] rounded-md appearance-none"
              >
                <option value=""></option>
                <option value="">Option 1</option>
                <option value="">Option 2</option>
                <option value="">Option 3</option>
                <option value="">Option 4</option>
              </select>

              {/* Right Icon */}
              <FaChevronDown className="absolute right-2 w-4 h-3 text-[#7e889e] pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Right Part */}
        <div className="right-part w-full md:w-[60%] flex flex-col md:flex-row md:justify-between items-center">
          {/* Input Box */}
          <div className="input-box w-full md:w-[75%] mb-4 md:mb-0">
            <input
              className="w-full px-4 py-2 border-[1px] border-[#edeff2] rounded-md"
              type="text"
              placeholder="Search"
            />
          </div>

          {/* Icons */}
          <div className="right-logo flex justify-end items-center gap-4 w-full md:w-[25%]">
            <Image src={GWLOGO} alt="logo" className="w-[25px] h-[25px]" />
            <Image src={Ak} alt="logo" className="w-[25px] h-[25px]" />
            <Image src={Stick} alt="divider" className="w-[2px] h-[25px]" />
            <Image src={Bell} alt="notification" className="w-[25px] h-[25px]" />
            <Image src={Stick} alt="divider" className="w-[2px] h-[25px]" />
            <Image src={Grid} alt="grid" className="w-[25px] h-[25px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
