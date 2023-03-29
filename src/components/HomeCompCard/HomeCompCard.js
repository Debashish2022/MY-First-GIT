import React from "react";
import "./HomeCompCard.css";

export default function HomeCompCard(props) {
  return (
    <>
        <div id="homecompcard1">
          <div id="homecompcard4"><img src={props.img} alt="card_img" id="homecompcard2" /></div>
          <div id="homecompcard3">{props.text}</div>
        </div>
    </>
  );
}
