import React from 'react'
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
import './RecentPayment.css'
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";

import TableRow from "@mui/material/TableRow";


export default function RecentPayment() {
  return (
    <>
   
    <Grid container>
        <TableContainer component={Paper} id="payin5">
        
        <div id="payin10">
        <Table sx={{ minWidth: 650}} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left" id="payin4">
                SL
              </TableCell>
              <TableCell align="left" id="payin4">
                Name
              </TableCell>
              <TableCell align="left" id="payin4">
                Amount{" "}
              </TableCell>
              <TableCell align="left" id="payin4">
                Bill Type
              </TableCell>
              <TableCell align="left" id="payin4">
                Transaction Id{" "}
              </TableCell>
              <TableCell align="left" id="payin4">
                Time{" "}
              </TableCell>
              <TableCell align="left" id="payin4">
                Status{" "}
              </TableCell>
              <TableCell align="left" id="payin4">
               Paid to
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="left">01</TableCell>
              <TableCell align="left">Dinesh Johnson</TableCell>
              <TableCell align="left">$34</TableCell>
              <Button variant="contained" id="payin3">
                  Light Bill
                </Button>
              <TableCell align="left">TAWI3453245235235235235</TableCell>
              <TableCell align="left">12.23PM</TableCell>
              <Button variant="contained" id="payin11">
                  Successful
              </Button>
              <TableCell align="left">Southco Electric Supply Pvt. Ltd</TableCell>
             
            </TableRow>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="left">02</TableCell>
              <TableCell align="left">Dinesh Johnson</TableCell>
              <TableCell align="left">$34</TableCell>
              <Button variant="contained" id="payin3">
                  Light Bill
                </Button>
              <TableCell align="left">TAWI3453245235235235235</TableCell>
              <TableCell align="left">12.23PM</TableCell>
              <Button variant="contained" id="payin11">
                  Successful
                </Button>
              <TableCell align="left">Southco Electric Supply Pvt. Ltd</TableCell>
             
            </TableRow>

            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="left">03</TableCell>
              <TableCell align="left">Dinesh Johnson</TableCell>
              <TableCell align="left">$34</TableCell>
              <Button variant="contained" id="payin3">
                  Light Bill
                </Button>
              <TableCell align="left">TAWI3453245235235235235</TableCell>
              <TableCell align="left">12.23PM</TableCell>
              <Button variant="contained" id="payin11">
                  Successful
                </Button>
              <TableCell align="left">Southco Electric Supply Pvt. Ltd</TableCell>
             
            </TableRow>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="left">04</TableCell>
              <TableCell align="left">Dinesh Johnson</TableCell>
              <TableCell align="left">$34</TableCell>
              <Button variant="contained" id="payin3">
                  Light Bill
                </Button>
              <TableCell align="left">TAWI3453245235235235235</TableCell>
              <TableCell align="left">12.23PM</TableCell>
              <Button variant="contained" id="payin11">
                  Successful
                </Button>
              <TableCell align="left">Southco Electric Supply Pvt. Ltd</TableCell>
             
            </TableRow>

            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="left">05</TableCell>
              <TableCell align="left">Dinesh Johnson</TableCell>
              <TableCell align="left">$34</TableCell>
              <Button variant="contained" id="payin3">
                  Light Bill
                </Button>
              <TableCell align="left">TAWI3453245235235235235</TableCell>
              <TableCell align="left">12.23PM</TableCell>
              <Button variant="contained" id="payin11">
                  Successful
                </Button>
              <TableCell align="left">Southco Electric Supply Pvt. Ltd</TableCell>
             
            </TableRow>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="left">06</TableCell>
              <TableCell align="left">Dinesh Johnson</TableCell>
              <TableCell align="left">$34</TableCell>
              <Button variant="contained" id="payin3">
                  Light Bill
                </Button>
              <TableCell align="left">TAWI3453245235235235235</TableCell>
              <TableCell align="left">12.23PM</TableCell>
              <Button variant="contained" id="payin11">
                  Successful
              </Button>
              <TableCell align="left">Southco Electric Supply Pvt. Ltd</TableCell>
             
            </TableRow>
          </TableBody>
        </Table>
        </div>
      </TableContainer>
      </Grid>
    </>
  )
}


