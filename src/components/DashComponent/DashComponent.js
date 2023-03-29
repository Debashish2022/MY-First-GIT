import { Grid} from "@mui/material";
import React from "react";
import "./DashComponent.css";
import PersonIcon from "@mui/icons-material/Person";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import SellIcon from "@mui/icons-material/Sell";
// import Alltransaction from "../../pages/Alltransaction/Alltransaction";
export default function DashComponent(props) {
  return (
    <>
      <Grid container id={props.design}>
        <Grid item md={8} lg={8} xs={8} id="dashcomp5">
          {props.title}
        </Grid>
        <Grid item md={4} lg={4} xs={4} id="dashcomp10">
          <div id="dashcomp2">
            {props.icon === "icon1" ? <PersonIcon id="dashcomp11" /> : null}
            {props.icon === "icon2" ? (
              <VolunteerActivismIcon id="dashcomp12" />
            ) : null}
            {props.icon === "icon3" ? (
              <AttachMoneyIcon id="dashcomp13" />
            ) : null}
            {props.icon === "icon4" ? <SellIcon id="dashcomp14" /> : null}
          </div>
        </Grid>

        <Grid item md={12} lg={12} xs={12} id="dashcomp4">
          {props.count}
        </Grid>

        <Grid item md={10} lg={10} xs={10} id="dashcomp15">
          Updated {props.timeduration} ago
        </Grid>

        <Grid item md={2} lg={2}>
          <ArrowRightAltIcon id="dashcomp6" />
        </Grid>
        {/* <Alltransaction/> */}
      </Grid>
    </>
  );
}
