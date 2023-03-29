import React from "react";
import "./Queries.css";
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
import { Box } from "@mui/system";

export default function Queries() {
  return (
    <>
      <Box>
        <Grid>
          <Grid container>
            <div> Queries & feedback</div>
            <TableContainer id="query1">
              <div id="query2">
                <TextField id="query3" label="Search" variant="standard" />
              </div>

              <div id="">
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
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
                      Messege
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell align="left">02</TableCell>
                      <TableCell align="left">Dinesh Johnson</TableCell>
                      <TableCell align="left">dineshpanda@gmail.com</TableCell>
                      <TableCell align="left">
                        Contrary to popular belief, Lorem Ipsum is not simply
                        random text. It has roots in a piece of classical Latin
                        literature from 45 BC, making it over 2000 years old.
                        Richard McClintock, a Latin professor at Hampden-Sydney
                        College in Virginia, looked up one of the more obscure
                        Latin words, consectetur, from a Lorem Ipsum passage,
                        and going through the cites of the word in classical
                        literature, discovered the undoubtable source.
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </TableContainer>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
