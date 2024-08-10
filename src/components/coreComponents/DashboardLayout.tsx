

import React, { useState } from "react";
import SideBar from "./SideBar";
import { FiBell } from "react-icons/fi";


interface DashboardProps {
    children: React.ReactNode;
  }

const DashboardLayout: React.FC<DashboardProps> = ({children }) => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

  const toggleSidebar = (): void => setSidebarOpen(!sidebarOpen);

  return (
    <>
   
    <div className="flex h-screen bg-white">
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-20 transition-opacity bg-black opacity-50 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      <SideBar sidebarOpen={sidebarOpen}/>
      
      
      {/* menue items */}
      <div className="flex flex-col flex-1 overflow-hidden  bg-white">
        <header className="hidden lg:flex flex-col py-4 border-l-default">
          <div className="hidden md:flex w-2/6 px-6 text-sm  font-inter justify-between ">
            <span>Blogs</span>
            <span>News</span>
            <span>Help center</span>
            <span>Customer care</span>
          </div>
        </header>
        <div className="flex justify-between border-b-default px-6 lg:py-3 py-4 border-l-default ">
          <h1 className="text-xl font-sf-pro font-bold text-gray-700 ">
            Dashboard
          </h1>
          <div className="flex items-center">
          <FiBell className="lg:hidden" size={21} />
          </div>
        </div>
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-smgray">
          <div className="lg:container lg:p-2 mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
    </>

  );
};

export default DashboardLayout;
