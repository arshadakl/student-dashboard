import React from "react";
import DashboardLayout from "../components/coreComponents/DashboardLayout";
import Classes from "../components/coreComponents/Classes";

const Dashboard: React.FC = () => {
  return (
    <>
      <DashboardLayout>
        <div className="flex flex-col md:flex-row w-full gap-2">
            <Classes/>
            <Classes/>
        </div>
      </DashboardLayout>
    </>
  );
};

export default Dashboard;
