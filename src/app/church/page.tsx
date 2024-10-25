import React from "react";
import BarChart from "./components/BarChart"
import PieChart from "./components/PieChart"

const page = () => {
  return <div >
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10">
      <div className="border rounded-lg p-3 shadow">
        <BarChart/>
      </div>
      <div className="border rounded-lg p-3 shadow">
        <PieChart/>
        <PieChart/>
      </div>
    </section>
  </div>;
};

export default page;
