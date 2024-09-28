"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaSignOutAlt, FaCog } from "react-icons/fa";
import DashboardIcon from "../dashboard.png";
import AccountsIcon from "../account.png";
import BatchesIcon from "../batch.png";
import ResolutionIcon from "../resolution.png";
import AssessmentsIcon from "../note.png";
import AppealIcon from "../appeal.png";
import SummaryIcon from "../summary.png";
import Image from "next/image";

const sidebarItems = [
  { name: "Dashboard", icon: DashboardIcon, route: "/" },
  { name: "Accounts", icon: AccountsIcon, route: "/" },
  { name: "Batches", icon: BatchesIcon, route: "/" },
  { name: "Resolution", icon: ResolutionIcon, route: "/" },
  { name: "Assessments", icon: AssessmentsIcon, route: "/" },
  { name: "Appeal Letter", icon: AppealIcon, route: "/" },
  { name: "Summary",icon: SummaryIcon, route: "/" },
];

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={`bg-[#2C4E6C] text-white h-[100%] flex flex-col justify-between ${
        isExpanded ? "w-[212px]" : "w-[64px]"
      } p-4 rounded-lg transition-all duration-300`}
      // Removed relative positioning and top, left styles
    >
      {/* Toggle Button */}
      <div className="flex items-center justify-end mb-6">
        <button onClick={toggleSidebar} className="focus:outline-none text-teal-600  bg-white px-2 rounded-full">
          {isExpanded ? "<" : ">"}
        </button>
      </div>

      {/* Sidebar Items */}
      <ul className="flex-grow mt-2 space-y-2">
        {sidebarItems.map((item, index) => (
          <li
            key={index}
            className={`flex items-center  font-medium text-sm ${
              isExpanded ? "justify-start" : "justify-center"
            } px-2 py-3 rounded-lg hover:bg-[#567189] ${
              item.name === "Appeal Letter" ? "bg-[#567189]" : ""
            }`}
          >
            {/* Icon */}
            <div className="flex items-center">
              <Image src={item.icon} alt={`${item.name} icon`} width={24} height={24} />
            </div>
            {/* Text (hidden when collapsed) */}
            {isExpanded && (
              <Link href={item.route}>
                <span className="ml-4 text-sm">{item.name}</span>
              </Link>
            )}
          </li>
        ))}
      </ul>

      {/* Settings and Logout at the Bottom */}
      <div className="flex flex-col items-center mt-auto">
        {/* Settings */}
        <div className="flex items-center w-full px-4 py-2 text-sm text-white">
          <FaCog className="text-xl" />
          {isExpanded && <span className="ml-4">Settings</span>}
        </div>

        {/* Logout */}
        <button className="mt-4 flex items-center justify-center w-full px-4 py-2 text-sm bg-teal-500 rounded-lg hover:bg-teal-400">
          <FaSignOutAlt className="text-xl" />
          {isExpanded && <span className="ml-4">Logout</span>}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
