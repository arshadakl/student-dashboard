import { useState, useEffect } from "react";

import { toast } from "sonner";
import moment from "moment";
import { ClassesData, initialClassesData } from "../utils/ClassData";
import { formatClassDate } from "../utils/Services";
import Classes from "../components/coreComponents/Classes";
import DashboardLayout from "../components/coreComponents/DashboardLayout";
import PaginationComponent from "../components/coreComponents/Pagination";
import Assignments from "../components/coreComponents/Assignments";
import { MobileNavBar } from "../components/coreComponents/SideBar";

function Dashboard() {
  const [classesData, setClassesData] =
    useState<ClassesData[]>(initialClassesData);
  const [bookedOnly, setBookedOnly] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(5);

  useEffect(() => {
    const timer = setInterval(() => {
      setClassesData((prevData) =>
        prevData.map((classItem) => {
          if (classItem.isLive) {
            const newTimeLeft = moment
              .duration(classItem.timeLeft)
              .subtract(1, "second");
            return { ...classItem, timeLeft: newTimeLeft };
          }
          return classItem;
        })
      );
    }, 1000);

    return () => clearInterval(timer);
  }, []);



  const filteredClasses = bookedOnly
    ? classesData.filter((c) => c.isBooked)
    : classesData;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredClasses.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    // Booking function
  // -------------------------
  const handileBooking = (id: number, date: moment.Moment) => {
    setClassesData((prevData) => {
      return prevData.map((classItem) => {
        if (classItem.id === id) {
          return { ...classItem, isBooked: !classItem.isBooked };
        }
        return classItem;
      });
    });

    toast.message("Booking is confirmed", {
      description: `${formatClassDate(date)}`,
    });
  };

  return (
    <div>
       <MobileNavBar/>
      <DashboardLayout>
        <div className="flex flex-col md:flex-row w-full gap-3">
          <Classes
            currentItems={currentItems}
            handileBooking={handileBooking}
            bookedOnly={bookedOnly}
            setBookedOnly={setBookedOnly}
          />
          <Assignments />
        </div>
        <div className="flex font-inter lg:w-1/2 w-full justify-between my-2">
          <PaginationComponent
            itemsPerPage={itemsPerPage}
            totalItems={filteredClasses.length}
            paginate={paginate}
            currentPage={currentPage}
          />

          <div className="flex items-center justify-end gap-6  w-full ">
            <label htmlFor="results" className="text-sm font-medium">
              Result per page
            </label>
            <div className="relative">
              <select
                id="results"
                onChange={(e) => setItemsPerPage(Number(e.target.value))}
                className="appearance-none bg-white border border-gray-300 rounded-[7px]  text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value={5}>5</option>
                <option value={8}>8</option>
                <option value={10}>10</option>
                <option value={15}>15</option>
              </select>
            </div>
          </div>
        </div>
      </DashboardLayout>
    </div>
  );
}

export default Dashboard;
