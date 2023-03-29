import React from 'react'
import "./DashboardCard.css";

export default function DashboardCard(props) {
  return (
    <>
        <div id="dashcard1" style={{backgroundColor: props.colour}}>
            <div>{props.type}</div>
            <div>₹{props.quantity ? props.quantity : "0"}</div>
        </div>
    </>
  )
}
