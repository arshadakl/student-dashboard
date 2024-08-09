import React, { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { MdDashboard } from "react-icons/md";
import { LuUsers } from "react-icons/lu";
import { FiBarChart2, FiFileText } from "react-icons/fi";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { CiSettings } from "react-icons/ci";


interface DashboardProps {
  // Add any props if needed
}

const Dashboard: React.FC<DashboardProps> = () => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

  const toggleSidebar = (): void => setSidebarOpen(!sidebarOpen);

  return (
    <div className="flex h-screen bg-white">
      {/* Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-20 transition-opacity bg-black opacity-50 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed  border-r-default border-brgray inset-y-0 left-0 z-30 w-[220px] overflow-y-auto transition duration-300 transform bg-white lg:translate-x-0 lg:static lg:inset-0 ${
          sidebarOpen ? "translate-x-0 ease-out" : "-translate-x-full ease-in"
        }`}
      >
        {/* Sidebar content */}
        <div className="flex flex-col  mx-auto  w-5/6  ">
          <div className="flex gap-4  items-center h-24">
            <h1 className="font-sf-pro text-2xl font-bold">Logo</h1>
          </div>
          <div className="flex flex-col font-inter mx-4">
            <Avatar className="w-12 h-12">
              <AvatarImage src="images/avatat.jpg" />
              <AvatarFallback>John Doe</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <span className="font-semibold font-sm">John Doe</span>
              <span className="font-light font-xs text-smtext">
                Intermediate
              </span>
            </div>
          </div>
          <hr className="my-5 " />
          <div className="flex flex-col gap-4 items-center font-sf-pro " >
            <div className="flex justify-start items-center  mx-auto w-full h-10 gap-x-2">
              <span className="bg-blue-600 rounded-full w-8 h-8 flex justify-center items-center"><MdDashboard color="white" size={18} /></span>
              <span className="font-semibold">Dashboard</span>
            </div>
            <div className="flex justify-start items-center  mx-auto w-full h-10 gap-x-2">
              <span className="bg-bggray rounded-full w-8 h-8 flex justify-center items-center"><LuUsers color="black" size={18} /></span>
              <span className="font-semibold">All classes</span>
            </div>
            <div className="flex justify-start items-center  mx-auto w-full h-10 gap-x-2">
              <span className="bg-bggray rounded-full w-8 h-8 flex justify-center items-center"><FiFileText color="black" size={18} /></span>
              <span className="font-semibold">Assignments</span>
            </div>
            <div className="flex justify-start items-center  mx-auto w-full h-10 gap-x-2">
              <span className="bg-bggray rounded-full w-8 h-8 flex justify-center items-center"><FiBarChart2 color="black" size={18} /></span>
              <span className="font-semibold">Performance</span>
            </div>
            <div className="flex justify-start items-center  mx-auto w-full h-10 gap-x-2">
              <span className="bg-bggray rounded-full w-8 h-8 flex justify-center items-center"><LiaRupeeSignSolid color="black" size={18} /></span>
              <span className="font-semibold">Fee details</span>
            </div>
            <div className="flex justify-start items-center  mx-auto w-full h-10 gap-x-2">
              <span className="bg-bggray rounded-full w-8 h-8 flex justify-center items-center"><CiSettings color="black" size={18} /></span>
              <span className="font-semibold">Settings</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col flex-1 overflow-hidden  bg-white">
        <header className="flex flex-col py-4 border-l-default">
          {/* <button onClick={toggleSidebar} className="text-gray-500 focus:outline-none lg:hidden">
              click
            </button> */}
          <div className="hidden md:flex w-2/6 px-6 text-sm  font-inter justify-between ">
            <span>Blogs</span>
            <span>News</span>
            <span>Help center</span>
            <span>Customer care</span>
          </div>
        </header>
        <div className=" border-b-default px-6 py-3 border-l-default ">
          <h1 className="text-xl font-sf-pro font-bold text-gray-700 ">
            Dashboard
          </h1>
        </div>
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-smgray">
          <div className="container px-6 py-8 mx-auto">
            {/* Dashboard content */}
            {/* Add your statistics cards, charts, and tables here */}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
