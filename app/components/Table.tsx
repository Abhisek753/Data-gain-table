"use client";

import React from "react";
import Dots from "../dots.png";
import Filter from "../fliter.png";
import Image from "next/image";
import Actiondot from "../actiondot.png"
const Table = () => {
  const data = [
    {
      year: 2017,
      company: "Alabama and Gulf Coast Railway LLC",
      state: "AL",
      assessor: "Wilcox County Tax Collector",
      account: "1_87060",
      appealedDeadline: "June 25, 2023",
      status: "Not Sent",
      appealedBy: "Jack Ryan",
      appealedDate: "May 11, 2023",
    },
    {
      year: 2018,
      company: "First Coast Railroad Inc.",
      state: "GA",
      assessor: "Camden County Tax",
      account: "UTIL150_",
      appealedDeadline: "June 25, 2023",
      status: "Sent",
      appealedBy: "Jack Ryan",
      appealedDate: "June 25, 2023",
    },
    {
      year: 2019,
      company: "Buffalo and Pittsburgh Railroad, Inc.",
      state: "NY",
      assessor: "City Of Buffalo Assessor",
      account: "10782900",
      appealedDeadline: "June 25, 2023",
      status: "Not Sent",
      appealedBy: "Jack Ryan",
      appealedDate: "May 15, 2023",
    },
    {
      year: 2020,
      company: "Conecuh Valley Railway, LLC",
      state: "OH",
      assessor: "Ellicottville Tax Collector",
      account: "043689 38.004-1-31",
      appealedDeadline: "June 25, 2023",
      status: "Sent",
      appealedBy: "Jack Ryan",
      appealedDate: "June 25, 2023",
    },
    {
      year: 2021,
      company: "Georgia Central Railway LP",
      state: "KY",
      assessor: "Pike County Revenue Commissioner",
      account: "PUBUT - 000780",
      appealedDeadline: "June 25, 2023",
      status: "Not Sent",
      appealedBy: "Jack Ryan",
      appealedDate: "May 20, 2023",
    },
    {
      year: 2022,
      company: "KWT Railway Inc.",
      state: "UT",
      assessor: "City Of Dublin",
      account: "400 294_400 294",
      appealedDeadline: "June 25, 2023",
      status: "Sent",
      appealedBy: "Jack Ryan",
      appealedDate: "June 25, 2023",
    },
    {
      year: 2023,
      company: "Red River Valley & Western RR",
      state: "ND",
      assessor: "Cass County Tax Assessor",
      account: "20130845",
      appealedDeadline: "July 1, 2023",
      status: "Sent",
      appealedBy: "Anna Blake",
      appealedDate: "July 5, 2023",
    },
    {
      year: 2024,
      company: "Birmingham Terminal Railway",
      state: "AL",
      assessor: "Jefferson County Tax Assessor",
      account: "123_87060",
      appealedDeadline: "June 10, 2024",
      status: "Not Sent",
      appealedBy: "Henry Matthews",
      appealedDate: "May 25, 2024",
    },
    {
      year: 2025,
      company: "Southwest Pennsylvania Railroad",
      state: "PA",
      assessor: "Westmoreland County Assessor",
      account: "PA33245",
      appealedDeadline: "June 20, 2025",
      status: "Sent",
      appealedBy: "Martha Jones",
      appealedDate: "June 20, 2025",
    },
    {
      year: 2026,
      company: "Western New York & Pennsylvania RR",
      state: "NY",
      assessor: "Allegany County Tax Office",
      account: "65482900",
      appealedDeadline: "June 25, 2026",
      status: "Not Sent",
      appealedBy: "Mark Doe",
      appealedDate: "June 25, 2026",
    },
    {
      year: 2027,
      company: "Kansas & Oklahoma Railroad",
      state: "KS",
      assessor: "Wichita County Tax Assessor",
      account: "KS_992830",
      appealedDeadline: "July 15, 2027",
      status: "Sent",
      appealedBy: "John Smith",
      appealedDate: "July 20, 2027",
    },
    {
      year: 2028,
      company: "Ohio Southern Railroad",
      state: "OH",
      assessor: "Athens County Tax Assessor",
      account: "OH_431255",
      appealedDeadline: "June 5, 2028",
      status: "Not Sent",
      appealedBy: "David White",
      appealedDate: "June 10, 2028",
    },
    {
      year: 2029,
      company: "Adirondack Railroad",
      state: "NY",
      assessor: "Oneida County Assessor",
      account: "NY_112233",
      appealedDeadline: "July 25, 2029",
      status: "Sent",
      appealedBy: "Samantha Brown",
      appealedDate: "July 30, 2029",
    },
    {
      year: 2030,
      company: "Florida Central Railroad",
      state: "FL",
      assessor: "Orange County Tax Collector",
      account: "FL_432165",
      appealedDeadline: "June 18, 2030",
      status: "Not Sent",
      appealedBy: "Jack Ryan",
      appealedDate: "May 11, 2030",
    },
    {
      year: 2031,
      company: "Arizona Eastern Railway",
      state: "AZ",
      assessor: "Graham County Tax Assessor",
      account: "AZ_560490",
      appealedDeadline: "June 25, 2031",
      status: "Sent",
      appealedBy: "Chris Evans",
      appealedDate: "June 25, 2031",
    },
    {
      year: 2032,
      company: "California Northern Railroad",
      state: "CA",
      assessor: "Sacramento County Tax Assessor",
      account: "CA_220033",
      appealedDeadline: "June 12, 2032",
      status: "Not Sent",
      appealedBy: "Emily Parker",
      appealedDate: "June 15, 2032",
    },
    {
      year: 2033,
      company: "Indiana Harbor Belt Railroad",
      state: "IN",
      assessor: "Lake County Tax Office",
      account: "IN_402244",
      appealedDeadline: "July 5, 2033",
      status: "Sent",
      appealedBy: "James Lee",
      appealedDate: "July 10, 2033",
    },
  ];

  return (
    <div className="flex flex-col px-4 pt-4">
      <div className="-m-1.5 overflow-x-auto">
        {/* Container that limits table width to 60% of the page */}
        <div className="p-1.5 w-full mx-auto">
          <div className="border rounded-lg divide-y divide-gray-200">
            {/* Search */}

            <div className="search-container flex items-center">
              <div className="search-left-part w-[55%] "></div>
              <div className="search-right-part w-[60%] ">
                <div className="py-3 px-4  flex items-center ">
                  <div className="relative w-[100%]">
                    <label className="sr-only">Search</label>
                    <input
                      type="text"
                      name="table-search"
                      id="table-search"
                      className="py-2 px-3 ps-9 block w-full border-[1px] border-[#edeff2] rounded-md text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                      placeholder="Search for items"
                    />
                    <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-3">
                      <svg
                        className="size-4 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="11" cy="11" r="8"></circle>
                        <path d="m21 21-4.3-4.3"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="search-icon w-[15%] flex items-center justify-end gap-4">
                    <Image
                      src={Filter}
                      alt="logo"
                      className="w-[25px] h-[25px]"
                    />
                    <Image
                      src={Dots}
                      alt="logo"
                      className="w-[25px] h-[25px]"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Scrollable Table */}
            <div className="overflow-x-auto h-[60vh]  overflow-scroll">
              <table className="min-w-[1500px] divide-y divide-gray-200 relative ">
                {/* Table's min width ensures horizontal scroll */}
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="py-3 px-4 pe-0 sticky left-0 bg-gray-50 z-10"
                    >
                      <div className="flex items-center h-5">
                        <input
                          id="select-all"
                          type="checkbox"
                          className="border-gray-200 rounded text-blue-600 focus:ring-blue-500"
                        />
                        <label htmlFor="select-all" className="sr-only">
                          Checkbox
                        </label>
                      </div>
                    </th>
                    <th className="px-2 py-3 text-start text-xs font-bold text-[#5F7181] uppercase ">
                      Tax Year
                    </th>
                    <th className="px-2 py-3 text-start text-xs font-bold text-[#5F7181] uppercase">
                      Company
                    </th>
                    <th className="px-2 py-3 text-start text-xs font-bold text-[#5F7181] uppercase">
                      State
                    </th>
                    <th className="px-2 py-3 text-start text-xs font-bold text-[#5F7181] uppercase">
                      Assessor
                    </th>
                    <th className="px-2 py-3 text-start text-xs font-bold text-[#5F7181] uppercase">
                      Account Number
                    </th>
                    <th className="px-2 py-3 text-start text-xs font-bold text-[#5F7181] uppercase">
                      Appealed Deadline
                    </th>
                    <th className="px-2 py-3 text-start text-xs font-bold text-[#5F7181] uppercase">
                      Status
                    </th>
                    <th className="px-2 py-3 text-start text-xs font-bold text-[#5F7181] uppercase">
                      Appealed Date
                    </th>
                    <th className="px-2 py-3 text-start text-xs font-bold text-[#5F7181] uppercase">
                      Appealed By
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3 text-end text-xs font-medium text-gray-500 uppercase sticky right-0 bg-gray-50 z-10"
                    >
                      Actions
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-200">
                  {data.map((row, index) => (
                    <tr key={index}>
                      <td className="py-3 ps-4 sticky left-0 bg-white z-10">
                        <div className="flex items-center h-5">
                          <input
                            id={`checkbox-${index}`}
                            type="checkbox"
                            className="border-gray-200 rounded text-blue-600 focus:ring-blue-500"
                          />
                          <label
                            htmlFor={`checkbox-${index}`}
                            className="sr-only"
                          >
                            Checkbox
                          </label>
                        </div>
                      </td>
                      <td className="px-2 py-4 whitespace-nowrap text-sm font-medium text-[#2D2E34]">
                        {row.year}
                      </td>
                      <td className="px-2 py-4 whitespace-nowrap text-sm text-[#2D2E34]">
                        {row.company}
                      </td>
                      <td className="px-2 py-4 whitespace-nowrap text-sm text-[#2D2E34]">
                        {row.state}
                      </td>
                      <td className="px-2 py-4 whitespace-nowrap text-sm text-[#2D2E34]">
                        {row.assessor}
                      </td>
                      <td className="px-2 py-4 whitespace-nowrap text-sm text-[#2D2E34]">
                        {row.account}
                      </td>
                      <td className="px-2 py-4 whitespace-nowrap text-sm text-[#2D2E34]">
                        {row.appealedDeadline}
                      </td>
                      <td
                        className={`px-2 py-4 whitespace-nowrap text-sm ${
                          row.status === "Not Sent" ? "text-red-500" : ""
                        }`}
                      >
                        {row.status}
                      </td>
                      <td className="px-2 py-4 whitespace-nowrap text-sm text-[#2D2E34]">
                        {row.appealedDate}
                      </td>
                      <td className="px-2 py-4 whitespace-nowrap text-sm text-[#2D2E34]">
                        {row.appealedBy}
                      </td>
                      <td className="px-2 py-4 whitespace-nowrap text-center cursor-pointer text-sm font-medium sticky right-0 bg-white z-10">
                        <button
                          type="button"
                          className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 focus:outline-none focus:text-blue-800"
                        >
                           <Image
                      src={Actiondot}
                      alt="logo"
                      className="w-[25px] h-[25px]"
                    />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="py-1 px-4 flex items-center justify-between bg-[#F6F7F8]">
              {/* Left: Displaying current range of items */}
              <div className="text-sm text-[#A5A8AF]">1-10 of 120</div>

              {/* Center: Pagination Controls */}
              <nav
                className="flex items-center space-x-1"
                aria-label="Pagination"
              >
                <button
                  type="button"
                  className="flex items-center gap-2 px-3 py-1.5 text-sm text-black rounded-lg hover:bg-white focus:outline-none focus:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none"
                  aria-label="Previous"
                >
                  <span>←</span>
                  <span>Previous</span>
                </button>
                <button
                  type="button"
                  className="min-w-[40px] flex justify-center items-center text-black  hover:bg-white focus:outline-none focus:bg-gray-200 px-2.5 py-1.5 text-sm border border-transparent"
                  aria-current="page"
                >
                  1
                </button>
                <button
                  type="button"
                  className="min-w-[40px] flex justify-center items-center text-[#A5A8AF]   hover:bg-white focus:outline-none focus:bg-gray-200 px-2.5 py-1.5 text-sm border border-transparent"
                >
                  2
                </button>
                <button
                  type="button"
                  className="min-w-[40px] flex justify-center items-center text-[#A5A8AF]  hover:bg-white focus:outline-none focus:bg-gray-200 px-2.5 py-1.5 text-sm border border-transparent"
                >
                  3
                </button>
                <span className="px-2 text-gray-500">...</span>
                <button
                  type="button"
                  className="min-w-[40px] flex justify-center items-center text-[#A5A8AF] hover:bg-white focus:outline-none focus:bg-gray-200 px-2.5 py-1.5 text-sm border border-transparent"
                >
                  9
                </button>
                <button
                  type="button"
                  className="min-w-[40px] flex justify-center items-center text-[#A5A8AF]  hover:bg-white focus:outline-none focus:bg-gray-200 px-2.5 py-1.5 text-sm border border-transparent"
                >
                  10
                </button>
                <button
                  type="button"
                  className="flex items-center gap-2 px-3 py-1.5 text-sm text-black rounded-lg  hover:bg-white focus:outline-none focus:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none"
                  aria-label="Next"
                >
                  <span>Next</span>
                  <span>→</span>
                </button>
              </nav>

              {/* Right: Go to page input */}
              <div className="flex items-center gap-2 text-sm">
                <span className="text-[#A5A8AF]">Go on to</span>
                <input
                  type="text"
                  className="w-12 border border-gray-300 rounded-md py-1 px-2 focus:outline-none focus:border-blue-500"
                  defaultValue="10"
                />
              </div>
            </div>

            {/* <div className="py-1 px-4">
              <nav className="flex items-center space-x-1" aria-label="Pagination">
                <button
                  type="button"
                  className="p-2.5 min-w-[40px] inline-flex justify-center items-center gap-x-2 text-sm rounded-full text-[#2D2E34] hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
                  aria-label="Previous"
                >
                  <span aria-hidden="true">«</span>
                  <span className="sr-only">Previous</span>
                </button>
                <button
                  type="button"
                  className="min-w-[40px] flex justify-center items-center text-[#2D2E34] hover:bg-gray-100 focus:outline-none focus:bg-gray-100 py-2.5 text-sm rounded-full"
                  aria-current="page"
                >
                  1
                </button>
                <button
                  type="button"
                  className="min-w-[40px] flex justify-center items-center text-[#2D2E34] hover:bg-gray-100 focus:outline-none focus:bg-gray-100 py-2.5 text-sm rounded-full"
                >
                  2
                </button>
                <button
                  type="button"
                  className="min-w-[40px] flex justify-center items-center text-[#2D2E34] hover:bg-gray-100 focus:outline-none focus:bg-gray-100 py-2.5 text-sm rounded-full"
                >
                  3
                </button>
                <button
                  type="button"
                  className="p-2.5 min-w-[40px] inline-flex justify-center items-center gap-x-2 text-sm rounded-full text-[#2D2E34] hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
                  aria-label="Next"
                >
                  <span className="sr-only">Next</span>
                  <span aria-hidden="true">»</span>
                </button>
              </nav>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
