import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import DoNotTouchOutlinedIcon from "@mui/icons-material/DoNotTouchOutlined";
import EventNoteOutlinedIcon from "@mui/icons-material/EventNoteOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PaymentsIcon from "@mui/icons-material/Payments";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import "./NewPayin.css";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { apicaller } from "../../utils/api";
import { getResellerId, getResellerToken } from "../../redux/Slice/userSlice";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useState } from "react";
import { Grid, TextField } from "@mui/material";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];
const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);
export default function NewPayin() {
  const [getAllPayin, setGetAllPayin] = useState([]);
  const [rejectButtonLoader, setRejectButtonLoader] = useState();

  const Token = useSelector(getResellerToken);
  const userId = useSelector(getResellerId); // toast start
  const eToast = (msg) => {
    toast.error(msg, {
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      position: "top-center",
    });
  };
  const sToast = (msg) => {
    toast.success(msg, {
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      position: "top-center",
    });
  };
  // toast end

  React.useEffect(() => {
    getPayin();
  }, []);

  const getPayin = async () => {
    await apicaller(`payment/payin/${userId}`, null, "get", Token).then(
      (res) => {
        // console.log("payin response....", res.data.result);
        setGetAllPayin(res?.data?.result);
      }
    );
    //   .catch((error) => {
    //     eToast(error.response.data.response.message);
    //   })
    //   .finally(() => {
    //     setPayinPageLoader(false);
    //   });
  };
  const [value, setValue] = React.useState(0);

  const SideBar = () => {
    return (
      <AppBar position="static" sx={{ display: { xs: "none", sm: "flex" } }}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Dessert (100g serving)</TableCell>
                <TableCell align="right">Calories</TableCell>
                <TableCell align="right">Fat&nbsp;(g)</TableCell>
                <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                <TableCell align="right">Protein&nbsp;(g)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {getAllPayin?.map((item,i) => (
                <TableRow
                key={i}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {item?.accountNumber}
                  </TableCell>
                  {/* <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell> */}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </AppBar>
    );
  };

  const Bot = () => {
    return (
      <>
        <Box id="table2" sx={{ display: { sm: "none" } }}>
          <Typography paragraph>
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item xs={12}>
                {getAllPayin?.map((item,i) => (
                  <div id="table1" key={i}>
                    <Grid
                      container
                      rowSpacing={1}
                      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                    >
                      <Grid item xs={9}>
                      {item?.reference_id ? item?.reference_id : "N/A"}
                      </Grid>

                      {item?.status === "approved" && (
                        <Grid item xs={3} id="table3">
                          APPROVED
                        </Grid>
                      )}
                      {item?.status === "pending" && (
                        <Grid item xs={3} id="table10">
                          PENDING
                        </Grid>
                      )}
                      {item?.status === "rejected" && (
                        <Grid item xs={3} id="table9">
                          REJECTED
                        </Grid>
                      )}

                      <Grid item xs={3} id="table4">
                        Channel:
                      </Grid>
                      <Grid item xs={9} id="table5">
                      {item?.medium ? item?.medium : "N/A"}
                      </Grid>
                      {item?.name || item?.ifsc || item?.accountNumber ? (<>
                        <Grid item xs={3} id="table4">
                        BANK NAME: 
                      </Grid>
                      <Grid item xs={9} id="table5">
                      {item?.name}
                      </Grid>
                      <Grid item xs={3} id="table4">
                      IFSC CODE: 
                      </Grid>
                      <Grid item xs={9} id="table5">
                      {item?.ifsc}
                      </Grid>
                      <Grid item xs={3} id="table4">
                      ACCOUNT NUMBER: 
                      </Grid>
                      <Grid item xs={9} id="table5">
                      {item?.accountNumber}
                      </Grid>
                      </>) : null}
                     {item?.upi  ? (<><Grid item xs={3} id="table4">
                        UPI :
                      </Grid>
                      <Grid item xs={9} id="table5">
                      {item?.upi}
                      </Grid></>) : null} 
                      <Grid item xs={3} id="table8">
                        Amount :
                      </Grid>
                      <Grid item xs={9} id="table6">
                      {item?.amount ? item?.amount : "N/A" }
                      </Grid>
                      <Grid item xs={3} id="table4">
                        Created :
                      </Grid>
                      <Grid item xs={9} id="table5">
                      {item?.date ? item?.date : "N/A"}
                      </Grid>
                      <Grid item xs={12} id="table4">
                        Actions
                      </Grid>
                      <Grid item xs={4}>
                        <Button
                          variant="contained"
                          color="secondary"
                          target="_blank"
                          href={item?.picture?.url}
                        >
                          RECIEPT
                        </Button>
                      </Grid>

                      <Grid item xs={4}>
                        <Button variant="contained">APPROVE</Button>
                      </Grid>
                      <Grid item xs={4}>
                        <Button variant="contained" color="error">
                          REJECT
                        </Button>
                      </Grid>
                    </Grid>
                  </div>
                ))}
              </Grid>
            </Grid>
          </Typography>
        </Box>
      </>
    );
  };

  return (
    <Box sx={{ maxWidth: "xl" }}>
      <SideBar />
      <Bot />
    </Box>
  );
}
