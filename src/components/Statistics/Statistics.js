import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import React from "react";
import "./Statistics.css";
const Statistics = () => {
  const data = [
    {
      name: "Page A",
      marks: 590,
      quiz: 800,
      amt: 1400,
    },
    {
      name: "Page B",
      marks: 868,
      quiz: 967,
      amt: 1506,
    },
    {
      name: "Page C",
      marks: 1397,
      quiz: 1098,
      amt: 989,
    },
    {
      name: "Page D",
      marks: 1480,
      quiz: 1200,
      amt: 1228,
    },
    {
      name: "Page E",
      marks: 1520,
      quiz: 1108,
      amt: 1100,
    },
    {
      name: "Page F",
      marks: 1400,
      quiz: 680,
      amt: 1700,
    },
  ];
  return (
    <div className="statistics">
      <ComposedChart width={500} height={400} data={data}>
        <Line type="monotone" dataKey="marks" stroke="#ff7300" />
        <XAxis
          dataKey="name"
          label={{ value: "Pages", position: "insideBottomRight", offset: 0 }}
          scale="band"
        />
        <YAxis label={{ value: "Index", angle: -90, position: "insideLeft" }} />
        <Tooltip></Tooltip>
        <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
        <Bar dataKey="quiz" barSize={20} fill="#413ea0" />
        <Line type="monotone" dataKey="quiz" stroke="#ff7300" />
      </ComposedChart>
    </div>
  );
};

export default Statistics;
