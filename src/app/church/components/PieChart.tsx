"use client"
import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const data = [
  { name: "God's Tithe", value: 40, color: "#82ca9d" },
  { name: "Offering", value: 30, color: "#8884d8" },
  { name: "Pledges", value: 20, color: "#0088FE" },
  { name: "Budget", value: 10, color: "#00C49F" },
];

const COLORS = ["#82ca9d", "#8884d8", "#0088FE", "#00C49F"];

const CustomPieChart = () => (
  <PieChart width={400} height={400} className="text-xs">
    <Pie
      data={data}
      dataKey="value"
      nameKey="name"
      cx="50%"
      cy="50%"
      outerRadius={100}
      fill="#8884d8"
      label
    >
      {data.map((entry, index) => (
        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
      ))}
    </Pie>
    <Tooltip />
    <Legend />
  </PieChart>
);

export default CustomPieChart;
