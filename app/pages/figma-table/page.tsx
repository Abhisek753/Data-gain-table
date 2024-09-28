"use client";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import Table from "../../components/Table";
import TableHeader from "@/app/components/TableHeader";

export default function Home() {
  return (
    <div className="flex flex-col   bg-[#f1f1f1]">
      <Navbar />

      <div className="flex flex-1 main-container w-[95%] mx-auto mt-4">
        <div className="sidebar  ">
        <Sidebar />

        </div>
        <div className="table-component w-full overflow-hidden bg-white px ">
          <div className="bg-[#f1f1f1]">
            <TableHeader/>
          </div>
          <div>
        <Table />
            
            </div>

        </div>

       
      </div>
    </div>
  );
}
