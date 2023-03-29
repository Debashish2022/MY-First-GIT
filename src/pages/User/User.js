import React from 'react'
import "./User.css";
import {
    Button,
    FormControl,
    Grid,
    InputLabel,
    MenuItem,
    Paper,
    Select,
    TextField,
  } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";

import TableRow from "@mui/material/TableRow";
import { Box } from '@mui/system';


export default function User() {
  return (
    <>

<Box>

<Grid>


 <Grid container>
  <div> UserBase</div>
 <TableContainer  id="userbase1">
  
  <div  id="userbase2"><TextField id="userbase3" label="Search" variant="standard" /></div>
 
        <div id="">
        <Table sx={{ minWidth: 650}} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left" id="">
                SL
              </TableCell>
              <TableCell align="left" id="">
                Name
              </TableCell>
              <TableCell align="left" id="">
               Email
              </TableCell>
              <TableCell align="left" id="">
                Phone Number
              </TableCell>
              <TableCell align="left" id="">
              Gender
              </TableCell>
              <TableCell align="left" id="">
                DOB
              </TableCell>
              <TableCell align="left" id="">
               User Join On
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="left">02</TableCell>
              <TableCell align="left">Dinesh Johnson</TableCell>
              <TableCell align="left">dineshpanda@gmail.com</TableCell>
              <TableCell align="left">4564325336</TableCell>
              <TableCell align="left">Male</TableCell>
              <TableCell align="left">28-05-1999</TableCell>
              <TableCell align="left">02-02-2023</TableCell>
             </TableRow>
              <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="left">02</TableCell>
              <TableCell align="left">Dinesh Johnson</TableCell>
              <TableCell align="left">dineshpanda@gmail.com</TableCell>
              <TableCell align="left">4564325336</TableCell>
              <TableCell align="left">Male</TableCell>
              <TableCell align="left">28-05-1999</TableCell>
              <TableCell align="left">02-02-2023</TableCell>
             </TableRow>

            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="left">02</TableCell>
              <TableCell align="left">Dinesh Johnson</TableCell>
              <TableCell align="left">dineshpanda@gmail.com</TableCell>
              <TableCell align="left">4564325336</TableCell>
              <TableCell align="left">Male</TableCell>
              <TableCell align="left">28-05-1999</TableCell>
              <TableCell align="left">02-02-2023</TableCell>
             </TableRow>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="left">02</TableCell>
              <TableCell align="left">Dinesh Johnson</TableCell>
              <TableCell align="left">dineshpanda@gmail.com</TableCell>
              <TableCell align="left">4564325336</TableCell>
              <TableCell align="left">Male</TableCell>
              <TableCell align="left">28-05-1999</TableCell>
              <TableCell align="left">02-02-2023</TableCell>
             </TableRow>

            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="left">02</TableCell>
              <TableCell align="left">Dinesh Johnson</TableCell>
              <TableCell align="left">dineshpanda@gmail.com</TableCell>
              <TableCell align="left">4564325336</TableCell>
              <TableCell align="left">Male</TableCell>
              <TableCell align="left">28-05-1999</TableCell>
              <TableCell align="left">02-02-2023</TableCell>
             </TableRow>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="left">02</TableCell>
              <TableCell align="left">Dinesh Johnson</TableCell>
              <TableCell align="left">dineshpanda@gmail.com</TableCell>
              <TableCell align="left">4564325336</TableCell>
              <TableCell align="left">Male</TableCell>
              <TableCell align="left">28-05-1999</TableCell>
              <TableCell align="left">02-02-2023</TableCell>
             
            </TableRow>
          </TableBody>
        </Table>
        </div>
      </TableContainer>
  
  </Grid> 
</Grid>

</Box>
    </>
  )
}