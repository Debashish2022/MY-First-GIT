import React from "react";

import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import "./Dashboard.css";
import DashComponent from "../../components/DashComponent/DashComponent";
import Alltransaction from "../../pages/Alltransaction/Alltransaction";
export default function Dashboard() {
  return (
    <>
      <Typography paragraph>
        <Grid container spacing={0.5}>
          <Grid item lg={3} md={3} sm={12} xs={12}>
            <DashComponent
              design="one"
              icon="icon1"
              title="Total Number of User"
              count="2342"
              timeduration="23mins"
            />
          </Grid>

          <Grid item lg={3} md={3} sm={12} xs={12}>
            <DashComponent
              design="dashcomp7"
              icon="icon2"
              title="Total Transaction amount"
              count="234342"
              timeduration="2mins"
            />
          </Grid>
          <Grid item lg={3} md={3} sm={12} xs={12}>
            <DashComponent
              design="dashcomp8"
              icon="icon3"
              title="Number of Transaction"
              count="2345"
              timeduration="12mins"
            />
          </Grid>
          <Grid item lg={3} md={3} sm={12} xs={12}>
            <DashComponent
              design="dashcomp9"
              icon="icon4"
              title="Total Sponsorships"
              count="235"
              timeduration="7hrs"
            />
          </Grid>
        </Grid>
      </Typography>
      <Grid item lg={12} xs={12} sm={12} md={12} id="title">
        Recent Payments
      </Grid>
      <Alltransaction/>
    </>
  );
}
