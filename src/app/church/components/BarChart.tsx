"use client"

import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Feb', Offering: 600, Tithe: 700, Budget: 550 },
  { name: 'March', Offering: 500, Tithe: 900, Budget: 300 },
  { name: 'April', Offering: 900, Tithe: 1000, Budget: 500 },
  { name: 'May', Offering: 700, Tithe: 1000, Budget: 600 },
];

const GivingCategoryTrends = () => {
  return (
    <ResponsiveContainer width="100%" height={400} className="text-xs">
      <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Offering" fill="#f0c929" />
        <Bar dataKey="Tithe" fill="#10416b" />
        <Bar dataKey="Budget" fill="#43a047" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default GivingCategoryTrends;
