import React from "react";
import "./DashboardCard.css";

export default function DashboardCard(props) {
  return (
    <>
      <div id="dashboardcard1">
        <div id="dashboardcard2">{props.title}</div>
        <div id="dashboardcard3">
          <h3>{props.quantity}</h3>
        </div>
        <small>{props.percentage}</small>
      </div>
    </>
  );
}
