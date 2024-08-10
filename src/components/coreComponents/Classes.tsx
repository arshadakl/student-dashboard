
import moment from "moment";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Checkbox } from "../ui/checkbox";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { FiExternalLink } from "react-icons/fi";
import { FaRegClock } from "react-icons/fa";
import useWindowSize from "../../hooks/useWindowSize";
import { GoDotFill } from "react-icons/go";

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/alert-dialog";
import { AlertDialogAction } from "@radix-ui/react-alert-dialog";
import { ClassesData } from "../../utils/ClassData";
import { formatClassDate, formatTimeLeft } from "../../utils/Services";


//class interface
interface ClassesProps {
  currentItems: ClassesData[];
  handileBooking: (id: number, date: moment.Moment) => void;
  bookedOnly: boolean;
  setBookedOnly: (value: boolean) => void;
}

function Classes({ currentItems, handileBooking, bookedOnly, setBookedOnly }: ClassesProps) {
  const size = useWindowSize();
  // console.log(currentItems,handileBooking, bookedOnly, setBookedOnly);
  return (
    <Card className="w-full bg-white lg:rounded-xl">
      <CardHeader>
        <div className="flex justify-between w-full">
          <div>
            <CardTitle className="text-lg font-sf-pro">
              Upcoming classes
            </CardTitle>

            <CardDescription className="font-inter font-xs text-smtext">
              For next 7 days
            </CardDescription>
          </div>
          <div className="flex items-center space-x-2">
            <label
              htmlFor="booked"
              className="text-sm font-medium cursor-pointer font-sf-pro leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Booked only
            </label>
            <Checkbox
              id="booked"
              className="border-2 border-zinc-300 rounded-[5px]"
              checked={bookedOnly}
              onCheckedChange={(checked) => setBookedOnly(checked as boolean)}
            />
          </div>
        </div>
      </CardHeader>
      <CardContent>

        {/* checking the window size */}
        {size.width && size.width > 768 ? (
          <Table>
            <TableHeader className="font-inter text-smtext bg-smgray">
              <TableRow>
                <TableHead>Class name</TableHead>
                <TableHead>Instructor</TableHead>
                <TableHead className="text-center">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {currentItems?.map((data, index) => (
                <TableRow key={data.id}>
                  <TableCell className="font-medium">
                    <div className="flex items-center gap-3 font-inter">
                      <span className="font-normal text-smtext mr-2">
                        {index + 1}
                      </span>
                      <div>
                        <div className="">{data.className}</div>
                        {data.isLive ? (
                          <div className="text-red-500 flex items-center font-semibold text-xs">
                            <GoDotFill color="red" /> Live{" "}
                            <span className="text-smtext font-normal">
                              ({formatTimeLeft(data.timeLeft)})
                            </span>
                          </div>
                        ) : (
                          <div className="text-smtext font-normal text-xs">
                            {formatClassDate(data.date)}
                          </div>
                        )}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-3 items-center">
                      <Avatar className="w-9 h-9">
                        <AvatarImage src={`/images/${data.staffImage}`} />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-semibold">{data.staffName}</div>
                        <div className="text-xs text-gray-500">
                          Additional details
                        </div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="text-center">
                    {data.isLive ? (
                      <Button className="bg-primeblue hover:bg-primeblue/85 rounded-[7px] font-inter font-semibold text-white">
                        Join now
                        <FiExternalLink className="ml-2 h-5 w-5" />
                      </Button>
                    ) : data.isBooked ? (
                      <Button className="font-inter bg-smgray/50 hover:bg-smgray/40 font-semibold text-primeblue rounded-[7px]">
                        {data.timeLeft.asDays() >= 1
                          ? `${Math.floor(data.timeLeft.asDays())} days`
                          : formatTimeLeft(data.timeLeft)}{" "}
                        <FaRegClock className="ml-2 h-5 w-5" />
                      </Button>
                    ) : (
                      <>
                        <AlertDialog>
                          <AlertDialogTrigger>
                            <Button className="shadow font-inter hover:bg-smgray/40 font-semibold border-default border-t-brgray rounded-[7px]">
                              Book now
                            </Button>
                          </AlertDialogTrigger>
                          <AlertDialogContent className="bg-white rounded-[12px]">
                            <AlertDialogHeader>
                              <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                              <AlertDialogDescription>
                                {`Are you sure you want to book the ${data.className} class? Please review your selected class details before proceeding.`}
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <hr />
                            <AlertDialogFooter className="w-full flex ">
                              <div className=" w-1/2 flex justify-end gap-2">
                                <AlertDialogCancel className="shadow font-inter hover:bg-smgray/40 font-semibold border-default border-t-brgray rounded-[7px]">
                                  Close
                                </AlertDialogCancel>
                                <AlertDialogAction>
                                  <Button
                                    onClick={() => {
                                      handileBooking(data.id, data.date);
                                    }}
                                    className="bg-primeblue hover:bg-primeblue/85 rounded-[7px] font-inter text-white "
                                  >
                                    Confirm
                                  </Button>
                                </AlertDialogAction>
                              </div>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                      </>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        ) : (
          <div className="space-y-4">
            {currentItems.map((data) => (
              <div
                key={data.id}
                className="bg-white shadow border-t-default border-brgray rounded-xl p-4"
              >
                <div className="flex items-center justify-between">
                  <div className="font-semibold text-lg">{data.className}</div>
                  {data.isLive ? (
                    <div className="text-red-500 flex items-center font-semibold text-xs">
                      <GoDotFill color="red" /> Live{" "}
                      <span className="text-smtext font-normal">
                        ({formatTimeLeft(data.timeLeft)})
                      </span>
                    </div>
                  ) : (
                    <div className="text-smtext font-normal text-[12px]">
                      {formatClassDate(data.date)}
                    </div>
                  )}
                </div>
                <div className="mt-2 flex items-center gap-3">
                  <Avatar className="w-9 h-9">
                    <AvatarImage src={`/images/${data.staffImage}`} />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold font-inter text-sm">
                      by {data.staffName}
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  {data.isLive ? (
                    <Button className="bg-primeblue hover:bg-primeblue/85 rounded-[7px] font-inter font-semibold text-white w-full">
                      Join now
                      <FiExternalLink className="ml-2 h-5 w-5" />
                    </Button>
                  ) : data.isBooked ? (
                    <Button className="font-inter bg-smgray hover:bg-smgray/40 font-semibold text-primeblue rounded-[7px] w-full">
                      {data.timeLeft.asDays() >= 1
                        ? `${Math.floor(data.timeLeft.asDays())} days`
                        : formatTimeLeft(data.timeLeft)}{" "}
                      <FaRegClock className="ml-2 h-5 w-5" />
                    </Button>
                  ) : (
                    <>
                      <AlertDialog>
                        <AlertDialogTrigger className="w-full ">
                          <Button className="shadow font-inter hover:bg-smgray/40 font-semibold border-default border-t-brgray rounded-[7px] w-full">
                            Book now
                          </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent className="bg-white rounded-[12px] w-11/12 mx-auto">
                          <AlertDialogHeader>
                            <AlertDialogTitle className="text-start">
                              Are you sure?
                            </AlertDialogTitle>
                            <AlertDialogDescription className="text-start">
                              {`Are you sure you want to book the ${data.className} class? Please review your selected class details before proceeding.`}
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <hr />
                          <AlertDialogFooter className="w-full flex ">
                            <div className=" w-full  flex justify-end items-center gap-2">
                              <AlertDialogCancel className="shadow font-inter hover:bg-smgray/40 font-semibold border-default border-t-brgray rounded-[7px]">
                                Close
                              </AlertDialogCancel>
                              <AlertDialogAction onClick={() => {
                                  handileBooking(data.id, data.date);
                                }}>
                                <Button className="bg-primeblue hover:bg-primeblue/85 rounded-[7px] font-inter text-white ">
                                  Confirm
                                </Button>
                              </AlertDialogAction>
                            </div>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export default Classes;