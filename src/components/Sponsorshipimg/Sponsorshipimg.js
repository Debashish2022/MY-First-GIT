import { Button } from '@mui/material';
import React from 'react'
import logo8 from "../../assets/Rectangle 158 (1).png";
import "./Sponsorshipimg.css";
export default function Sponsorshipimg() {
  return (
    <>
       <img src={logo8} alt="logo" id="img8"  />
      <Button  color="error" id="rmvebtn">
        Remove
      </Button>
    </>
  )
}
