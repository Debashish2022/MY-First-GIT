import { Button, Grid,  TextField, Typography } from "@mui/material";
import React from "react";
import "./Sponsorship.css";

import Sponsorimage from "../../components/Sponsorimage/Sponsorimage";
import Sponsersecond from "../../components/Sponsersecond/Sponsersecond";
import Sponsorshipimg from "../../components/Sponsorshipimg/Sponsorshipimg";
function Sponsorship() {
  return (
    <>
      <div id="spon">
        <Typography id="spon1">Sponsorship</Typography>
        <div id="spon10">
        <Grid container>
          <Grid item md={4} lg={3} xs={12} id="spon9"><input className="spon9" type="file" id="myfile" name="myfile" /></Grid>
          <Grid item md={4} lg={3} xs={12} id="spon9"> <TextField
                xs={12}
                sm={12}
                md={4}
                lg={4}
                label="Paste your sponsered link here"
                variant="outlined"
                id="spon8"
              /></Grid>
          <Grid item md={4} lg={3} xs={12} id="spon9"><Button id="addbtn" fullWidth variant="contained" >Add</Button></Grid>
        </Grid>
        <div id="spons4">Saved Links</div>
        <Sponsorimage />
        <Sponsorimage />
        <Sponsorimage />
        <Sponsorimage />
        <Sponsorimage />
        <Sponsorimage />
        <Sponsorimage />
        <Sponsorimage />
        <Sponsorimage />
        <Sponsorimage />
        <Sponsorimage />
        <Sponsorimage />
        <Sponsorimage />
        <Sponsorimage />
        <Sponsorimage />
        <Sponsorimage />
        <Sponsorimage />
        <Sponsorimage />
        <Sponsorimage />
        <Sponsorimage />
        <div id="spons7">Game Zone</div>
        <div id="spons2">
        <Grid container>
          <Grid item md={4} lg={3} xs={12} id="spon9"><input className="spon9" type="file" id="myfile" name="myfile" /></Grid>
          <Grid item md={4} lg={3} xs={12} id="spon9"> <TextField
                xs={12}
                sm={12}
                md={4}
                lg={4}
                label="Paste your sponsered link here"
                variant="outlined"
                id="spon8"
              /></Grid>
          <Grid item md={4} lg={3} xs={12} id="spon9"><Button id="addbtn" fullWidth variant="contained" >Add</Button></Grid>
        </Grid>
        </div>
        <Sponsersecond />
        <Sponsersecond />
        <div id="spons7">Banner Section</div>
        <div id="spons2">
        <Grid container>
          <Grid item md={4} lg={3} xs={12} id="spon9"><input className="spon9" type="file" id="myfile" name="myfile" /></Grid>
          <Grid item md={4} lg={3} xs={12} id="spon9"><Button id="addbtn" fullWidth variant="contained" >Add</Button></Grid>
        </Grid>
         
        </div>
       < Sponsorshipimg/>
       < Sponsorshipimg/>
       < Sponsorshipimg/>
       < Sponsorshipimg/>
       < Sponsorshipimg/>
       < Sponsorshipimg/>
        </div>
      </div>
    </>
  );
}

export default Sponsorship;
