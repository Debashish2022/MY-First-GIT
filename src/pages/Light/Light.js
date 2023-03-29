import React from "react";
import "./Light.css";
import TextField from "@mui/material/TextField";
import Grid  from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { Button, Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import logo from "../../assets/logo.png";


export default function Light() {
  return (
    <>
    <div id="pagetitle">Light Section</div>
      <Grid container spacing={2} style={{padding:"2rem"}}id="lightcontainer">
      
        <Grid item xs={12} lg={6} md={6}>
          <TextField id="outlined-basic" label="Service provide name " variant="outlined" style={{width:"100%"}}/>
        </Grid>
        <Grid item xs={12} lg={6} md={6}>
          <TextField id="outlined-basic" label="Service Tax number" variant="outlined" style={{width:"100%"}}/>
        </Grid>
        <Grid item xs={12} lg={6} md={6}>
          <TextField id="outlined-basic" label="Account number" variant="outlined" style={{width:"100%"}}/>
        </Grid>
        <Grid item xs={12} lg={6} md={6}>
          <TextField id="outlined-basic" label="IFSC code" variant="outlined" style={{width:"100%"}}/>
        </Grid>
        <Grid item xs={12} lg={6} md={6}>
          <TextField id="outlined-basic" label="Branch Detaiils" variant="outlined" style={{width:"100%"}}/>
        </Grid>
        <Grid item xs={12} lg={6} md={6}>
          {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" style={{width:"100%"}}> */}
          <div variant="outlined" id="two">
            <Button variant="contained" component="label"  id="btn">
            Choose file
            <input hidden accept="image/*" multiple type="file" />
          </Button>
          </div>
          </Grid>
          <Grid item xs={12} lg={6} md={6} id="btn1">
           {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" style={{width:"100%"}}> 
          <div variant="outlined"> */}
          <Button variant="contained" disableElevation>
          Add
          </Button>
          {/* </div> */}
          {/* </TextField>  */}
          </Grid>
          
          <Grid container id="provider">
            <Typography>
            Existing Providers
            </Typography>
         
      </Grid>
      <TableContainer  id="four">
          <TableHead>
            <TableRow>
              <TableCell align="left" id="three">
                SL
              </TableCell>
              <TableCell align="left" id="three">
               Logo
              </TableCell>
              <TableCell align="left" id="three">
               Service Provider
              </TableCell>
              <TableCell align="left" id="three">
                Account Number
              </TableCell>
              <TableCell align="left" id="three">
                Actions
              </TableCell>
              </TableRow>
              </TableHead>
              <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="left">01</TableCell>
              <TableCell align="left">
                <div><img src={logo}/></div></TableCell>
              <TableCell align="left">SouthCo Electricity Supply Pvt. Ltd</TableCell>
              <TableCell align="left" id="account">32452352345235 </TableCell>
              <TableCell align="left" id="remove">Remove</TableCell>
             </TableRow>
             <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="left">02</TableCell>
              <TableCell align="left">
                <div><img src={logo}/></div></TableCell>
              <TableCell align="left">SouthCo Electricity Supply Pvt. Ltd</TableCell>
              <TableCell align="left" id="account">32452352345235 </TableCell>
              <TableCell align="left" id="remove">Remove</TableCell>
              </TableRow>
              <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="left">03</TableCell>
              <TableCell align="left">
                <div><img src={logo}/></div></TableCell>
              <TableCell align="left">SouthCo Electricity Supply Pvt. Ltd</TableCell>
              <TableCell align="left" id="account">32452352345235 </TableCell>
              <TableCell align="left" id="remove">Remove</TableCell>
              </TableRow>
              </TableContainer>
              
      </Grid>
    </>
  );
}