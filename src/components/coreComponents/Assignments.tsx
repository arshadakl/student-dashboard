
import { AssignmentsData, } from "../../utils/ClassData";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";

function Assignments() {
  return (
    <Card className="   w-full hidden lg:flex flex-col bg-white lg:rounded-xl ">
      <CardHeader>
        <div className="flex flex-col justify-between w-full ">
          <CardTitle className="text-lg font-sf-pro">
            Assignments <span className="font-normal text-smtext">({AssignmentsData.length})</span>
          </CardTitle>
          <CardContent className=" flex my-5 p-0 w-full flex-col gap-2 justify-center">
            {AssignmentsData.map((data) => {
              return (
                <Card className="rounded-[9px] shadow w-full h-20 flex items-center">
                  <CardHeader>
                    <CardTitle className="text-md text-md font-inter">{data.title}</CardTitle>
                    <CardDescription className="text-sm text-smtext font-inter">Deadline {data.deadline}</CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </CardContent>
        </div>
      </CardHeader>
    </Card>
  );
}

export default Assignments;
