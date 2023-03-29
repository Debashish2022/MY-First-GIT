import React from 'react'
import "./Alltransaction.css"
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
function Alltransaction() {
  return (
    <>
    
    
    <Grid container>
        <TableContainer component={Paper} id="payin5">
        
        <div id="payin10">
        <Table sx={{ minWidth: 650}} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left" >
                No.
              </TableCell>
              <TableCell align="left" >
                Name
              </TableCell>
              <TableCell align="left" >
                Amount{" "}
              </TableCell>
              <TableCell align="left" >
                Bill Type
              </TableCell>
              <TableCell align="left" >
                Transaction Id{" "}
              </TableCell>
              <TableCell align="left" >
                Time{" "}
              </TableCell>
              <TableCell align="left" >
                Status{" "}
              </TableCell>
              <TableCell align="left" >
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
              <Button variant="contained" id="alltransaction2">
                  Light Bill
                </Button>
              <TableCell align="left">TAWI3453245235235235235</TableCell>
              <TableCell align="left">12.23PM</TableCell>
              <Button variant="contained" id="alltransaction3">
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
              <Button variant="contained" id="alltransaction2">
                  Light Bill
                </Button>
              <TableCell align="left">TAWI3453245235235235235</TableCell>
              <TableCell align="left">12.23PM</TableCell>
              <Button variant="contained" id="alltransaction3">
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
              <Button variant="contained" id="paymentdetails2">
                  Light Bill
                </Button>
              <TableCell align="left">TAWI3453245235235235235</TableCell>
              <TableCell align="left">12.23PM</TableCell>
              <Button variant="contained" id="alltransaction3">
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
              <Button variant="contained" id="alltransaction2">
                  Light Bill
                </Button>
              <TableCell align="left">TAWI3453245235235235235</TableCell>
              <TableCell align="left">12.23PM</TableCell>
              <Button variant="contained" id="alltransaction3">
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
              <Button variant="contained" id="alltransaction2">
                  Light Bill
                </Button>
              <TableCell align="left">TAWI3453245235235235235</TableCell>
              <TableCell align="left">12.23PM</TableCell>
              <Button variant="contained" id="alltransaction3">
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
              <Button variant="contained" id="alltransaction2">
                  Light Bill
                </Button>
              <TableCell align="left">TAWI3453245235235235235</TableCell>
              <TableCell align="left">12.23PM</TableCell>
              <Button variant="contained" id="alltransaction3">
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
              <Button variant="contained" id="alltransaction2">
                  Light Bill
                </Button>
              <TableCell align="left">TAWI3453245235235235235</TableCell>
              <TableCell align="left">12.23PM</TableCell>
              <Button variant="contained" id="alltransaction3">
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
              <Button variant="contained" id="alltransaction2">
                  Light Bill
                </Button>
              <TableCell align="left">TAWI3453245235235235235</TableCell>
              <TableCell align="left">12.23PM</TableCell>
              <Button variant="contained" id="alltransaction3">
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
              <Button variant="contained" id="alltransaction2">
                  Light Bill
                </Button>
              <TableCell align="left">TAWI3453245235235235235</TableCell>
              <TableCell align="left">12.23PM</TableCell>
              <Button variant="contained" id="alltransaction3">
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
              <Button variant="contained" id="alltransaction2">
                  Light Bill
                </Button>
              <TableCell align="left">TAWI3453245235235235235</TableCell>
              <TableCell align="left">12.23PM</TableCell>
              <Button variant="contained" id="alltransaction3">
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
              <Button variant="contained" id="alltransaction2">
                  Light Bill
                </Button>
              <TableCell align="left">TAWI3453245235235235235</TableCell>
              <TableCell align="left">12.23PM</TableCell>
              <Button variant="contained" id="alltransaction3">
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
              <Button variant="contained" id="alltransaction2">
                  Light Bill
                </Button>
              <TableCell align="left">TAWI3453245235235235235</TableCell>
              <TableCell align="left">12.23PM</TableCell>
              <Button variant="contained" id="alltransaction3">
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
              <Button variant="contained" id="alltransaction2">
                  Light Bill
                </Button>
              <TableCell align="left">TAWI3453245235235235235</TableCell>
              <TableCell align="left">12.23PM</TableCell>
              <Button variant="contained" id="alltransaction3">
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
              <Button variant="contained" id="alltransaction2">
                  Light Bill
                </Button>
              <TableCell align="left">TAWI3453245235235235235</TableCell>
              <TableCell align="left">12.23PM</TableCell>
              <Button variant="contained" id="alltransaction3">
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
              <Button variant="contained" id="alltransaction2">
                  Light Bill
                </Button>
              <TableCell align="left">TAWI3453245235235235235</TableCell>
              <TableCell align="left">12.23PM</TableCell>
              <Button variant="contained" id="alltransaction3">
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
              <Button variant="contained" id="alltransaction2">
                  Light Bill
                </Button>
              <TableCell align="left">TAWI3453245235235235235</TableCell>
              <TableCell align="left">12.23PM</TableCell>
              <Button variant="contained" id="alltransaction3">
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
              <Button variant="contained" id="alltransaction2">
                  Light Bill
                </Button>
              <TableCell align="left">TAWI3453245235235235235</TableCell>
              <TableCell align="left">12.23PM</TableCell>
              <Button variant="contained" id="alltransaction3">
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
              <Button variant="contained" id="alltransaction2">
                  Light Bill
                </Button>
              <TableCell align="left">TAWI3453245235235235235</TableCell>
              <TableCell align="left">12.23PM</TableCell>
              <Button variant="contained" id="alltransaction3">
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
              <Button variant="contained" id="alltransaction2">
                  Light Bill
                </Button>
              <TableCell align="left">TAWI3453245235235235235</TableCell>
              <TableCell align="left">12.23PM</TableCell>
              <Button variant="contained" id="alltransaction3">
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
              <Button variant="contained" id="alltransaction2">
                  Light Bill
                </Button>
              <TableCell align="left">TAWI3453245235235235235</TableCell>
              <TableCell align="left">12.23PM</TableCell>
              <Button variant="contained" id="alltransaction3">
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

export default Alltransaction;
