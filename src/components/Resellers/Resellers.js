import {
  Button,
  CircularProgress,
  FilledInput,
  FormControl,
  Grid,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import "./Resellers.css";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import ResellersAppRej from "../ResellerAppRej/ResellersAppRej";
import { API, apicaller } from "../../utils/api";
import { useSelector } from "react-redux";
import { getToken } from "../../redux/Slice/userSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import ResDtlModal from "../ResDtlModal/ResDtlModal";

export default function Resellers() {

  useEffect(() => {
    getAllResellersFun();
  }, []);

  // modal
  const [open, setOpen] = React.useState(false);
  const [getid, setGetId] = useState();
  const [blank, setBlank] = useState('');
 
  const handleOpen = (id) =>{ 
    setOpen(true);
    setGetId(id);
  }
  const handleClose = () => {setOpen(false);
    getAllResellersFun();
    
  };
  // modal end
  const [togglee, setTogglee] = useState(true);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const [showPassword, setShowPassword] = React.useState(false);

  const [getAllResellers, setGetAllResellers] = useState([]);

  const [loading, setLoading] = useState(true);

  const [loadingRemove, setLoadingRemove] = useState();

  const token = useSelector(getToken);

  const regEmail =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;
  const regPwd = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
  const regPhn = /^([0|\+[0-9]{1,5})?([7-9][0-9]{9})$/;

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [userid, setUserid] = useState("");
  const [phone, setPhone] = useState("");
  const [pass, setPass] = useState("");
  const [timeZone, setTimeZone] = useState("");
  const [limit, setLimit] = useState("");
  const [currency, setCurrency] = useState("");
  const [loader, setLoader] = useState(false);

  // const[iten, setIten] = useState("");
  const [commission, setCommission] = useState('');

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
  // Validation Start
  const Validation = () => {
    if (name.length === 0) {
      eToast("Please Enter a valid Name");
      return false;
    } else if (userid.length === 0) {
      eToast("Please Enter a valid Email id");
      return false;
    } else if (!regEmail.test(userid)) {
      eToast("Please enter a valid email");
      return false;
    } else if (regPwd.length === 0) {
      eToast(" please enter a valid password");
      return false;
    } else if (regPwd.length === 0 || !regPhn.test(phone)) {
      eToast("Please enter a valid phone number");
      return false;
      // } else if (phone.length !== 10) {
      //   eToast("please enter a valid phone number");
      //   return false;
    } else if (currency.length === 0) {
      eToast("Select a Currency");
      return false;
    } else if (limit.length === 0) {
      eToast("Select a Pay-Limit");
      return false;
    } else if (timeZone.length === 0) {
      eToast("Please select a timezone");
      return false;
    } else {
      return true;
    }
  };
  // Validation End

  const Add = async () => {
    if (Validation()) {
      setLoader(true);
      const data = {
        name: name,
        email: userid,
        password: pass,
        mobileNumber: phone,
        currency: currency,
        limit: limit,
        timeZone: timeZone,
      };
      // console.log("dataaaaaaaaaa issss: ", data);
      await apicaller("admin/add-reseller", data, "POST", token)
        .then((res) => {
          if (res.status === 200 || res.status === 201) {
            // console.log("responsssssseeee :", res)
            sToast("Reseller Created sucessfully");
            setName("");
            setUserid("");
            setTimeZone("");
            setCurrency("");
            setLimit("");
            setPhone("");
            setPass("");
          }
        })
        .catch((error) => {
          // console.log("error ....", error.data);
          eToast("Sorry Coluld Not Create");
        })
        .finally(() => setLoader(false));
    }
  };

  

  const getAllResellersFun = () => {
    apicaller("admin/all-reseller?status=approved", null, "GET", token).then(
      (res) => {
        setLoading(false);
        setGetAllResellers(res?.data?.result?.data);
        // console.log('reseller details getting...$$$$', res.data.result);
      }
    );
  };

  // const handleTimezone = (event) => {
  //   setTimeZone(event.target.value);
  // };
  // const handleLimit = (event) => {
  //   setLimit(event.target.value);
  // };

  // const handleCurrency = (event) => {
  //   setCurrency(event.target.value);
  // };

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

  const columns = [
    {
      id: "no",
      label: "Sl.No",
      minWidth: 60,
      align: "left",
    },
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
      id: "currency",
      label: "Currency",
      minWidth: 100,
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
    {
      id: "operations",
      label: "Operations",
      minWidth: 170,
      align: "left",
    },
    // {
    //   id: "operation",
    //   label: "Operations",
    //   minWidth: 170,
    //   align: "left",
    // },
  ];

  // function createData(
  //   name,
  //   userid,
  //   phone,
  //   currency,
  //   paylimit,
  //   timezone,
  //   password,
  //   operation
  // ) {
  //   return { name, userid, phone, currency, paylimit, timezone };
  // }

  // const rows = [
  //   createData(
  //     "Bhabani",
  //     "bhabani@codekart.com",
  //     7008585787,
  //     50000,
  //     "Asia/Newdelhi/Kolkata",
  //     <div>
  //       <FormControl sx={{ width: "15ch" }} variant="standard">
  //         <Input
  //           disableUnderline="true"
  //           type={showPassword ? "text" : "password"}
  //           endAdornment={
  //             <InputAdornment position="end">
  //               <IconButton
  //                 width="0.7em"
  //                 height="0.7em"
  //                 aria-label="toggle password visibility"
  //                 onClick={handleClickShowPassword}
  //                 onMouseDown={handleMouseDownPassword}
  //               >
  //                 {showPassword ? <VisibilityOff /> : <Visibility />}
  //               </IconButton>
  //             </InputAdornment>
  //           }
  //           value="123456"
  //         />
  //       </FormControl>
  //     </div>,
  //     <div id="resellers11">
  //       <Button variant="contained" id="reseller14">
  //         update
  //       </Button>{" "}
  //       <Button id="reseller13">delete</Button>
  //     </div>
  //   ),
  //   createData(
  //     "Bhabani",
  //     "bhabani@codekart.com",
  //     7008585787,
  //     50000,
  //     "Asia/Newdelhi/Kolkata",
  //     <div>
  //       <FormControl sx={{ width: "15ch" }} variant="standard">
  //         <Input
  //           disableUnderline="true"
  //           type={showPassword ? "text" : "password"}
  //           endAdornment={
  //             <InputAdornment position="end">
  //               <IconButton
  //                 aria-label="toggle password visibility"
  //                 onClick={handleClickShowPassword}
  //                 onMouseDown={handleMouseDownPassword}
  //               >
  //                 {showPassword ? <VisibilityOff /> : <Visibility />}
  //               </IconButton>
  //             </InputAdornment>
  //           }
  //           value="123456"
  //         />
  //       </FormControl>
  //     </div>,
  //     <div id="resellers11">
  //       <Button variant="contained" id="reseller14">
  //         update
  //       </Button>{" "}
  //       <Button id="reseller13">delete</Button>
  //     </div>
  //   ),
  // ];

  // const removeResellerFun = async (id, email) => {
  //   if (window.confirm("Do you sure want to remove this reseller?")) {
  //     await apicaller(`admin/reseller/${id}`, null, "delete", token)
  //       .then(() => sToast("Reseller removed successfully"))
  //       .catch(() => eToast("Sorry couldn't remove!"));
  //   }
  // };

  // console.log(token);

  const removeResellerFun = (id, email) => {
    if (window.confirm(`Do you sure want to remove reseller ${email} ?`)) {
      var config = {
        method: "delete",
        maxBodyLength: Infinity,
        url: `${API}/admin/reseller/${id}`,
        headers: {
          Authorization: "Bearer " + token,
        },
      };

      axios(config)
        .then(function (response) {
          // console.log(JSON.stringify(response.data));
          sToast("Reseller Removed Successfully");
          getAllResellersFun();
        })
        .catch(function (error) {
          // console.log(error);
          eToast("Sorry Couldn't Remove!");
        });
    }
  };

  return (
    <>
      {togglee ? (
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          <TableContainer style={{ padding: "1rem", marginTop: "3rem" }}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={12} lg={12} id="resellers1">
                <div id="resellers3">Resellers</div>
                <div id="resellers2">
                  <Button
                    variant="outlined"
                    id="resellers8"
                    onClick={() => setTogglee(false)}
                  >
                    Pending approvals <NotificationsRoundedIcon />
                  </Button>
                </div>
              </Grid>
              <Grid item xs={12} md={12} lg={12}>
                <div id="resellers7">
                  <Grid container spacing={2}>
                    <Grid item lg={4} md={4} xs={12}>
                      <TextField
                        id="filled-basic"
                        label="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        variant="filled"
                        style={{ width: "100%" }}
                      />
                    </Grid>
                    <Grid item lg={4} md={4} xs={12}>
                      <TextField
                        id="filled-basic"
                        label="Email / UserId"
                        value={userid}
                        onChange={(e) => setUserid(e.target.value)}
                        variant="filled"
                        style={{ width: "100%" }}
                      />
                    </Grid>
                    <Grid item lg={4} md={4} xs={12}>
                      {/* <TextField
                        id="filled-basic"
                        label="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        variant="filled"
                        style={{ width: "100%" }}
                      /> */}
                      <FormControl sx={{ width: "100%" }} variant="filled">
                        <InputLabel htmlFor="filled-adornment-password">
                          Password
                        </InputLabel>
                        <FilledInput
                          id="filled-adornment-password"
                          type={showPassword ? "text" : "password"}
                          value={pass}
                          onChange={(e) => setPass(e.target.value)}
                          endAdornment={
                            <InputAdornment position="end">
                              <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                              >
                                {showPassword ? (
                                  <VisibilityOff />
                                ) : (
                                  <Visibility />
                                )}
                              </IconButton>
                            </InputAdornment>
                          }
                        />
                      </FormControl>
                    </Grid>
                    <Grid item lg={4} md={4} xs={12}>
                      <TextField
                        id="filled-basic"
                        label="Phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        variant="filled"
                        style={{ width: "100%" }}
                      />
                    </Grid>
                    <Grid item lg={4} md={4} xs={12}>
                      <FormControl variant="filled" sx={{ minWidth: "100%" }}>
                        <InputLabel id="demo-simple-select-standard-label">
                          Currency
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-standard-label"
                          id="demo-simple-select-standard"
                          value={currency}
                          onChange={(e) => setCurrency(e.target.value)}
                          label="Currency"
                        >
                          <MenuItem value="">
                            <em>None</em>
                          </MenuItem>
                          <MenuItem value="INR">INR</MenuItem>
                          <MenuItem value="PNR">PNR</MenuItem>
                          <MenuItem value="DNR">DNR</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item lg={4} md={4} xs={12}>
                      <FormControl variant="filled" sx={{ minWidth: "100%" }}>
                        <InputLabel id="demo-simple-select-standard-label">
                          Limit
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-standard-label"
                          id="demo-simple-select-standard"
                          value={limit}
                          onChange={(e) => setLimit(e.target.value)}
                          label="limit"
                        >
                          <MenuItem value="">
                            <em>None</em>
                          </MenuItem>
                          <MenuItem value="1000000">1000000</MenuItem>
                          <MenuItem value="2000000">2000000</MenuItem>
                          <MenuItem value="3000000">3000000</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item lg={4} md={4} xs={12}>
                      <FormControl variant="filled" sx={{ minWidth: "100%" }}>
                        <InputLabel id="demo-simple-select-standard-label">
                          Time Zone
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-standard-label"
                          id="demo-simple-select-standard"
                          value={timeZone}
                          onChange={(e) => setTimeZone(e.target.value)}
                          label="Time Zone"
                        >
                          <MenuItem value="">
                            <em>None</em>
                          </MenuItem>
                          <MenuItem value="Asia/Kolkata/NewDelhi">
                            Asia/Kolkata/NewDelhi
                          </MenuItem>
                          <MenuItem value="USA/Newyork">USA/Newyork</MenuItem>
                          <MenuItem value="Europe/Netherland">
                            Europe/Netherland
                          </MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                  </Grid>

                  <div id="resellers9">
                    <Button
                      variant="contained"
                      id="resellers10"
                      onClick={() => Add()}
                    >
                      {loader ? (
                        <CircularProgress size="1rem" sx={{ color: "white" }} />
                      ) : (
                        "Add"
                      )}
                    </Button>
                  </div>
                </div>
              </Grid>
            </Grid>

            <div id="reseller12">
              {loading ? (
                <div
                  style={{
                    minHeight: "20rem",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <CircularProgress />
                </div>
              ) : (
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
                      .slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                      .map((item, index) => {
                        return (
                          <TableRow
                            hover
                            // role="checkbox"
                            // tabIndex={-1}
                            // key={item.userid}
                            key={index}
                          >
                            {item?.adminApproval === "approved" && (
                              <>
                              <TableCell align="left">{page * 10 + index + 1}</TableCell>
                                <TableCell align="left">{item?.name}</TableCell>
                                <TableCell align="left">
                                  {item?.email}
                                </TableCell>
                                <TableCell align="left">
                                  {item?.mobileNumber}
                                </TableCell>
                                <TableCell align="left">
                                  {item?.currency}
                                </TableCell>
                                <TableCell align="left">
                                  {item?.limit}
                                </TableCell>
                                <TableCell align="left">
                                  {item?.timeZone}
                                </TableCell>

                                <div id="resellers11">
                                  <Button
                                    variant="contained"
                                    id="reseller15"
                                    // onClick={() =>
                                    //   navigate("/profileaccount", {state: { id: item },})
                                    // }
                                    onClick={()=>{setCommission(item?.commission); handleOpen(item?._id)}}
                                  >
                                    Details
                                  </Button>
                                  
                                  <Button
                                    variant="contained"
                                    id="reseller14"
                                    onClick={() =>
                                      navigate("/updatereseller", {
                                        state: { item: item },
                                      })
                                    }
                                  >
                                    Update
                                  </Button>{" "}
                                  <Button
                                    id="reseller13"
                                    onClick={() =>
                                      removeResellerFun(item._id, item?.email)
                                    }
                                  >
                                    {loadingRemove ? (
                                      <CircularProgress
                                        color="inherit"
                                        size="1.2rem"
                                      />
                                    ) : (
                                      "Remove"
                                    )}
                                  </Button>
                                </div>
                              </>
                            )}
                            {/* {columns.map((column) => {
                          const value = row[column.id];
                          return (
                            <TableCell key={column.id} align={column.align}>
                              {column.format && typeof value === "number"
                                ? column.format(value)
                                : value}
                            </TableCell>
                          );
                        })} */}
                          </TableRow>
                        );
                      })}
                  </TableBody>
                </Table>
              )}
              <ResDtlModal open={open} handleClose={handleClose} agentcommisson={commission}   id={getid}/>
            </div>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={getAllResellers.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      ) : (
        <ResellersAppRej />
      )}
    </>
  );
}
