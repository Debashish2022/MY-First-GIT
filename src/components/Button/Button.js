import React from "react";
import "./Button.css";
function Button(props) {
  return (
    <div className="mainbuttonfielddiv">
      <button className="commonbtn">{props.btn}</button>
    </div>
  );
}

export default Button;