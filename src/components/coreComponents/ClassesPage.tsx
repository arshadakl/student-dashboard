import { useState, useEffect } from "react";
import Pagination from "./Pagination";
import { ClassesData, initialClassesData } from "../../utils/ClassData";
import { toast } from "sonner";
import moment from "moment";
import Classes from "./Classes";
import { formatClassDate } from "../../utils/Services";

function ClassesPage() {
  const [classesData, setClassesData] = useState<ClassesData[]>(initialClassesData);
  const [bookedOnly, setBookedOnly] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(5);

  useEffect(() => {
    setItemsPerPage(5)
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
      <Classes currentItems={currentItems} handileBooking={handileBooking} bookedOnly={bookedOnly} setBookedOnly={setBookedOnly} />
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={filteredClasses.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
}

export default ClassesPage;