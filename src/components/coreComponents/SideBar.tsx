import { MdDashboard } from "react-icons/md";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { LuUsers } from "react-icons/lu";
import { FiBarChart2, FiFileText } from "react-icons/fi";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { CiSettings } from "react-icons/ci";

function SideBar({ sidebarOpen }: { sidebarOpen: boolean }) {
  return (
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
            <AvatarImage src="images/avatar.jpg" />
            <AvatarFallback>John Doe</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="font-semibold font-sm">John Doe</span>
            <span className="font-light font-xs text-smtext">Intermediate</span>
          </div>
        </div>
        <hr className="my-5 " />
        <div className="flex flex-col gap-4 items-center font-sf-pro ">
          <div className="flex justify-start items-center  mx-auto w-full h-10 gap-x-2 cursor-pointer ">
            <span className="bg-primeblue rounded-full w-8 h-8 flex justify-center items-center">
              <MdDashboard color="white" size={18} />
            </span>
            <span className="font-semibold hover:font-boldld ">Dashboard</span>
          </div>
          <div className="flex justify-start items-center  mx-auto w-full h-10 gap-x-2 cursor-pointer ">
            <span className="bg-bggray rounded-full w-8 h-8 flex justify-center items-center">
              <LuUsers color="black" size={18} />
            </span>
            <span className="font-medium hover:font-semibold">All classes</span>
          </div>
          <div className="flex justify-start items-center  mx-auto w-full h-10 gap-x-2 cursor-pointer ">
            <span className="bg-bggray rounded-full w-8 h-8 flex justify-center items-center">
              <FiFileText color="black" size={18} />
            </span>
            <span className="font-medium hover:font-semibold">Assignments</span>
          </div>
          <div className="flex justify-start items-center  mx-auto w-full h-10 gap-x-2 cursor-pointer ">
            <span className="bg-bggray rounded-full w-8 h-8 flex justify-center items-center">
              <FiBarChart2 color="black" size={18} />
            </span>
            <span className="font-medium hover:font-semibold">Performance</span>
          </div>
          <div className="flex justify-start items-center  mx-auto w-full h-10 gap-x-2 cursor-pointer ">
            <span className="bg-bggray rounded-full w-8 h-8 flex justify-center items-center">
              <LiaRupeeSignSolid color="black" size={18} />
            </span>
            <span className="font-medium hover:font-semibold">Fee details</span>
          </div>
          <div className="flex justify-start items-center  mx-auto w-full h-10 gap-x-2 cursor-pointer ">
            <span className="bg-bggray rounded-full w-8 h-8 flex justify-center items-center">
              <CiSettings color="black" size={18} />
            </span>
            <span className="font-medium hover:font-semibold">Settings</span>
          </div>
        </div>
      </div>
    </div>
  );
}



// mobile view nav items
export const MobileNavBar = () => {
  return (
    <>
      <div
        className={`lg:static   w-full h-20 lg:hidden absolute bottom-0 z-10  bg-white border-t-default border-brgray`}
      >
        <>
          <div className="flex items-center font-sf-pro h-full ">
            <div className="flex flex-col justify-center items-center  h-full mx-auto   cursor-pointer ">
              <MdDashboard color="#2080F6" size={25} />
              <span className="text-primeblue text-sm">Dashboard</span>
            </div>
            <div className="flex flex-col text-smtext justify-center items-center  h-full mx-auto   cursor-pointer ">
              <FiFileText color="#737475" size={25} />
              <span className="font-medium text-xs">
                Assignments
              </span>
            </div>
            <div className="flex flex-col text-smtext justify-center items-center  h-full mx-auto   cursor-pointer ">
              <FiBarChart2 color="#737475" size={25} />
              <span className="font-medium text-xs">
                Performance
              </span>
            </div>
            <div className="flex flex-col justify-center items-center  h-full mx-auto   cursor-pointer ">
              <div className="flex flex-col justify-center items-center">
                <Avatar className="w-6 h-6">
                  <AvatarImage src="images/avatar.jpg" />
                </Avatar>
                  <span className="font-medium text-xs text-smtext font-sf-pro">Profile</span>
              </div>
            </div>
          </div>
        </>
      </div>
    </>
  );
};

export default SideBar;
