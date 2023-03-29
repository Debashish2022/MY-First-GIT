import React from "react";
import "./Sponsorimage.css";
import logo2 from "../../assets/Rectangle120.png";
import { Button } from "@mui/material";
// import logo3 from "../../assets/Rectangle152.png";
export default function Sponsorimage(props) {
  return (
    <>
      <img src={logo2} alt="logo" id="myimg" />
      <Button  color="error" id="removebtn">
        Remove
      </Button>
      {/* <img src={logo3} alt="logo"  /> */}
    </>
  );
}
