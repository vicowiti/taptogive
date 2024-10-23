import React from "react";
import DashboardCards from "./components/DashboardCards";
import ChurchTables from "./components/ChurchTables";

const page = () => {
  return <div>
    <DashboardCards/>
    <ChurchTables />
  </div>;
};

export default page;
