import React from "react";
import { Chart } from "react-google-charts";

const data = [
  ["Task", "Hours per Day"],
  ["Work", 50],
  ["Eat", 20],
  ["Commute", 10],
  ["Watch TV", 10],
  ["Sleep", 10], // CSS-style declaration
];

const options = {
  title: "My Daily Activities",
  pieHole: 0.4,
  is3D: false,
};

export default function GPieChart() {
  return (
    <>
      <Chart
        chartType="PieChart"
        width="100%"
        height="400px"
        data={data}
        options={options}
      />
    </>
  );
}
