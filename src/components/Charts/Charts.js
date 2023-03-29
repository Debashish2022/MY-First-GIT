import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { useSelector } from "react-redux";
import { getResellerId, getResellerToken } from "../../redux/Slice/userSlice";
import { apicaller } from "../../utils/api";
import "./Charts.css";

export function Charts(props) {
  const [allpayin, setAllpayin] = useState([]);
  const [allpayout, setAllpayout] = useState([]);

  useEffect(() => {
    getPayin();
    getPayout();
  }, []);

  const Token = useSelector(getResellerToken);
  const userId = useSelector(getResellerId);

  const getPayin = async () => {
    await apicaller(`payment/payin/${userId}`, null, "get", Token).then(
      (res) => {
        // console.log("payin response....", res.data.values);
        setAllpayin(res.data.values);
      }
    );
  };

  const getPayout = async () => {
    await apicaller(`payment/payout/${userId}`, null, "get", Token).then(
      (res) => {
        // console.log("payout response....", res.data.values);
        setAllpayout(res.data.values);
      }
    );
  };

  const [chartData, setChartData] = useState({
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: [
          "JAN",
          "FEB",
          "MAR",
          "APR",
          "MAY",
          "JUN",
          "JUL",
          "AUG",
          "SEP",
          "OCT",
          "NOV",
          "DEC",
        ],
      },
    },
  });

  const series = [
    {
      name: "PAYIN",
      data: allpayin,
    },
    {
      name: "PAYOUT",
      data: allpayout,
    },
  ];

  const ChartSmall = () => {
    return (
      <Box sx={{ display: { sm: "none" },marginBottom:'2rem'  }}>
        <Chart
          options={chartData.options}
          series={series}
          type="line"
          width={340}
          height={260}
          id="char1"
        />
      </Box>
    );
  };

  const ChartBig = () => {
    return (
      <Box sx={{ display: { xs: "none", sm: "block" } }}>
        <Chart
          options={chartData.options}
          series={series}
          type="line"
          width={1000}
          height={500}
          id="char1"
        />
      </Box>
    );
  };

  return (
    <>
      <ChartSmall />
      <ChartBig />
    </>
  );
}
