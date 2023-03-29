import {
  Button,
  CircularProgress,
  FormControl,
  Grid,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Paper,
  Select,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import "./ResellerAppRej.css";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import Dashboard from "../../pages/Dashboard/Dashboard";
import Resellers from "../Resellers/Resellers";
import { toast } from "react-toastify";
import { apicaller } from "../../utils/api";
import { getToken } from "../../redux/Slice/userSlice";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import axios from "axios";

export default function ResellersAppRej() {
  const [toggleee, setToggleee] = useState(true);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const [showPassword, setShowPassword] = useState(false);

  const [getAllResellers, setGetAllResellers] = useState([]);

  const [resellers, setResellers] = useState([]);

  const [loader, setLoader] = useState();
  const [pendingResellerLoader, setPendingResellerLoader] = useState(true);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const eToast = (msg) => {
    toast.error(msg, {
      autoClose: 3000,
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

  const columns = [
    {
      id: "name",
      label: "Name",
      minWidth: 170,
      align: "left",
    },
    {
      id: "userid",
      label: "User Id",
      minWidth: 100,
      align: "left",
    },
    {
      id: "phone",
      label: "Phone",
      minWidth: 170,
      align: "left",
    },
    {
      id: "Currency",
      label: "Currency",
      minWidth: 170,
      align: "left",
    },
    {
      id: "paylimit",
      label: "Pay Limit",
      minWidth: 170,
      align: "left",
    },
    {
      id: "timezone",
      label: "Time Zone",
      minWidth: 170,
      align: "left",
    },
    ,
    {
      id: "operation",
      label: "Operations",
      minWidth: 170,
      align: "left",
    },
  ];

  function createData(
    name,
    userid,
    phone,
    Currency,
    paylimit,
    timezone,
    operation
  ) {
    return { name, userid, phone, Currency, paylimit, timezone, operation };
  }

  const rows = [
    createData(
      "Bhabani",
      "bhabani@codekart.com",
      7008585787,
      "INR",
      50000,
      "Asia/Newdelhi/Kolkata",
      <div id="resellers11">
        <Button variant="contained" id="reseller14">
          Approve
        </Button>{" "}
        <Button id="reseller13">Decline</Button>
      </div>
    ),
    createData(
      "Bhabani",
      "bhabani@codekart.com",
      7008585787,
      "INR",
      50000,
      "Asia/Newdelhi/Kolkata",
      <div id="resellers11">
        <Button variant="contained" id="reseller14">
          Approve
        </Button>{" "}
        <Button id="reseller13">Decline</Button>
      </div>
    ),
  ];

  const Token = useSelector(getToken);
  useEffect(() => {
    getAllResellersfun();
  }, []);

  const getAllResellersfun = () => {
    apicaller(
      "admin/all-reseller?status=pending",
      null,
      "get",
      Token,
      null
    ).then((res) => {
      setGetAllResellers(res?.data?.result?.data);
      // console.log('all reseller is..',res?.data?.result?.data);
    })
    .finally(()=>setPendingResellerLoader(false));
  };

  // console.log("all resellers ", getAllResellers);

  const updateResellerStatusFun = (id, email) => {
    if (window.confirm(`Are you sure want to Approve Reseller ${email} ? `)) {
      setLoader(id);

      var config = {
        method: "put",
        maxBodyLength: Infinity,
        url: `https://game-pts.onrender.com/api/v1/admin/reseller-status/${id}`,
        headers: {
          Authorization: "Bearer " + Token,
        },
      };

      axios(config)
        .then(function (response) {
          // console.log(JSON.stringify(response.data));
          sToast("Approved Successfully");
          getAllResellersfun();
        })
        .catch(function (error) {
          // console.log(error);
          eToast("Sorry could not approve !");
        })
        .finally(() => setLoader());

      // apicaller(`reseller/update/${id}`, null, "PUT", Token)
      //   .then((res) => {
      //     sToast("Approved Sucessfully");
      //     getAllResellersfun();
      //   })
      //   .catch((e) => {
      //    eToast("Sorry could not approve !")
      //   })
      // .finally(() => setLoader());
    }
  };

  return (
    <>
      {toggleee ? (
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          <TableContainer style={{ padding: "1rem", marginTop: "3rem" }}>
          {pendingResellerLoader ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              minHeight: "90vh",
              width: "100%",
            }}
          >
            {" "}
            <CircularProgress
              sx={{ marginLeft: { xs: "1.8rem", sm: "0rem" } }}
            />
          </div>
        ) : (
          <> 
            <Grid container spacing={2}>
              <Grid item xs={12} md={12} lg={12} id="resellers1">
                <div id="resellers3">Resellers</div>
                <div id="resellers2">
                  <Button
                    variant="outlined"
                    id="resellers8"
                    onClick={() => setToggleee(false)}
                  >
                    Return <KeyboardReturnIcon />
                  </Button>
                </div>
              </Grid>
            </Grid>
            <div id="reseller12">
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    {columns.map((column) => (
                      <TableCell
                        key={column.id}
                        align={column.align}
                        style={{
                          minWidth: column.minWidth,
                          fontWeight: "600",
                        }}
                      >
                        {column.label}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {getAllResellers
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((item, index) => {
                      return (
                        <TableRow hover key={index}>
                          <TableCell align="left">{item?.name}</TableCell>
                          <TableCell align="left">{item?.email}</TableCell>
                          <TableCell align="left">
                            {item?.mobileNumber}
                          </TableCell>
                          <TableCell align="left">{item?.currency}</TableCell>
                          <TableCell align="left">{item?.limit}</TableCell>
                          <TableCell align="left">{item?.timeZone}</TableCell>
                          <div id="resellers11">
                            <Button
                              sx={{ width: "5.5rem" }}
                              variant="contained"
                              id="reseller14"
                              onClick={() =>
                                updateResellerStatusFun(item?._id, item?.email)
                              }
                            >
                              {loader === item._id ? (
                                <CircularProgress
                                  sx={{ color: "white" }}
                                  size="1.3rem"
                                />
                              ) : (
                                "APPROVE"
                              )}
                            </Button>{" "}
                          </div>
                        </TableRow>
                      );
                    })}
                </TableBody>
              </Table>
            </div>
            </>)}
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      ) : (
        <Resellers />
      )}
    </>
  );
}
