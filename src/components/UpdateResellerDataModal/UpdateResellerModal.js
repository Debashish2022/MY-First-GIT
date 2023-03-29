import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import {
  Card,
  CardContent,
  CircularProgress,
  FormControl,
  Grid,
  Input,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import "./UpdateResellerModal.css";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import ChevronLeftSharpIcon from "@mui/icons-material/ChevronLeftSharp";
import { apicaller } from "../../utils/api";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { getToken } from "../../redux/Slice/userSlice";
import CancelSharpIcon from "@mui/icons-material/CancelSharp";

export default function UpdateResellerModal(props) {
  const location = useLocation();
  const resellerData = location.state?.item;

  // console.log("reseller is ", resellerData);

  const [username, setName] = useState(resellerData?.name);
  const [useremail, setEmail] = useState(resellerData?.email);
  const [userphone, setPhone] = useState(resellerData?.mobileNumber);
  const [usercurrency, setCurrency] = useState(resellerData?.currency);
  const [userlimit, setLimit] = useState(resellerData?.limit);
  const [usertimezone, setTimezone] = useState(resellerData?.timeZone);

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

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
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      position: "top-center",
    });
  };

  const regEmail =
    /[a-z0-9!#$%&'+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'+/=?^_`{|}~-]+)@(?:[a-z0-9](?:[a-z0-9-][a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;

  const validation = () => {
    if (username?.length === 0 || username === undefined) {
      eToast("Please Enter Name");
      return false;
    } else if (useremail?.length === 0 || useremail === undefined) {
      eToast("Please Enter Email id");
      return false;
    } else if (userphone?.length === 0 || userphone === undefined) {
      eToast("Please enter a phone number");
      return false;
    } else if (userphone?.length !== 10) {
      eToast("please enter a valid phone number");
      return false;
    } else if (usercurrency?.length === 0) {
      eToast("Select a Currency");
      return false;
    } else if (userlimit?.length === 0) {
      eToast("Select a Pay-Limit");
      return false;
    } else if (usertimezone?.length === 0) {
      eToast("Please select a timezone");
      return false;
    } else {
      return true;
    }
  };

  const token = useSelector(getToken);

  // console.log(usercurrency);

  const updateResellerDataFun = async () => {
    if (validation()) {
      setLoading(true);
      const data = {
        name: username,
        email: useremail,
        mobileNumber: userphone,
        currency: usercurrency,
        limit: userlimit,
        timeZone: usertimezone,
      };
      await apicaller(
        `reseller/update/${resellerData?._id}`,
        data,
        "PUT",
        token
      )
        .then((res) => {
          if (res.status === 201 || res.status === 200) {
            navigate("/dash");
            sToast("Reseller updated Successfully");
          }
        })
        .catch(() => {
          eToast("Sorry Couldn't Update!");
        })
        .finally(() => setLoading(false));
    }
  };

  return (
    <div id="containerUpdateReseller">
      <Box id="boxContainerUpdateReseller">
        <Grid container>
          <Grid item xs={1} sm={1} md={2} lg={2}></Grid>
          <Grid item xs={10} sm={10} md={8} lg={8}>
            <Card id="UpdateReseller1">
              <CardContent>
                <Grid container>
                  <Grid xs={11} sm={11} md={11} lg={11} item>
                    <div id="updateResellerTxt">Update Reseller</div>
                  </Grid>
                  <Grid
                    item
                    xs={1}
                    sm={1}
                    md={1}
                    lg={1}
                    onClick={() => navigate(-1)}
                    id="UpdateReseller4"
                  >
                    {/* <ChevronLeftSharpIcon />
                    Back */}
                    <CancelSharpIcon />
                  </Grid>
                  <Grid xs={12} sm={12} md={12} lg={12} item>
                    <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                      <InputLabel htmlFor="standard-adornment-amount">
                        Name
                      </InputLabel>
                      <Input
                        id="standard-adornment-amount"
                        fullWidth
                        required
                        placeholder="Enter Reseller Name"
                        style={{ padding: "0.5rem" }}
                        inputProps={{
                          style: {
                            height: "0.9rem",
                          },
                        }}
                        defaultValue={username}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </FormControl>
                    {/* <InputLabel htmlFor="standard-adornment-amount">Amount</InputLabel>
                    <TextField
                      fullWidth
                      required
                      id="outlined-required"
                      label="Name"
                      placeholder="Enter Reseller Name"
                      inputProps={{
                        style: {
                          height: "0.9rem",
                        },
                      }}
                      defaultValue={name}
                      onChange={(e)=> setName(e.target.value)}
                    /> */}
                  </Grid>

                  <Grid
                    id="UpdateReseller2"
                    xs={12}
                    sm={12}
                    md={12}
                    lg={12}
                    item
                  >
                    <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                      <InputLabel htmlFor="standard-adornment-amount">
                        Email
                      </InputLabel>
                      <Input
                        id="standard-adornment-amount"
                        fullWidth
                        required
                        placeholder="Enter Email Id"
                        style={{ padding: "0.5rem" }}
                        inputProps={{
                          style: {
                            height: "0.9rem",
                          },
                        }}
                        defaultValue={useremail}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </FormControl>
                  </Grid>

                  <Grid
                    id="UpdateReseller2"
                    xs={12}
                    sm={12}
                    md={12}
                    lg={12}
                    item
                  >
                    <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                      <InputLabel htmlFor="standard-adornment-amount">
                        Phone
                      </InputLabel>
                      <Input
                        id="standard-adornment-amount"
                        fullWidth
                        required
                        placeholder="Enter Phone Number"
                        style={{ padding: "0.5rem" }}
                        inputProps={{
                          style: {
                            height: "0.9rem",
                          },
                        }}
                        defaultValue={userphone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </FormControl>
                  </Grid>
                  <Grid
                    item
                    lg={12}
                    md={12}
                    xs={12}
                    style={{ marginTop: "1rem" }}
                  >
                    <FormControl variant="filled" sx={{ minWidth: "100%" }}>
                      <InputLabel id="demo-simple-select-standard-label">
                        Currency
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        defaultValue={usercurrency}
                        onChange={(e) => setCurrency(e.target.value)}
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
                  <Grid
                    item
                    lg={12}
                    md={12}
                    xs={12}
                    style={{ marginTop: "1rem" }}
                  >
                    <FormControl variant="filled" sx={{ minWidth: "100%" }}>
                      <InputLabel id="demo-simple-select-standard-label">
                        Limit
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        defaultValue={userlimit}
                        onChange={(e) => setLimit(e.target.value)}
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value="100000">100000</MenuItem>
                        <MenuItem value="200000">200000</MenuItem>
                        <MenuItem value="300000">300000</MenuItem>
                        <MenuItem value="500000">500000</MenuItem>
                        <MenuItem value="1000000">1000000</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid
                    item
                    lg={12}
                    md={12}
                    xs={12}
                    style={{ marginTop: "1rem" }}
                  >
                    <FormControl variant="filled" sx={{ minWidth: "100%" }}>
                      <InputLabel id="demo-simple-select-standard-label">
                        Time Zone
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        defaultValue={usertimezone}
                        onChange={(e) => setTimezone(e.target.value)}
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

                  <Grid xs={3} sm={3} md={3} lg={3} item></Grid>
                  <Grid item xs={6} sm={6} md={6} lg={6}>
                    <Button
                      variant="contained"
                      fullWidth
                      id="UpdateReseller3"
                      onClick={() => updateResellerDataFun()}
                    >
                      {loading ? (
                        <CircularProgress color="inherit" size="1.2rem" />
                      ) : (
                        "UPDATE"
                      )}
                    </Button>
                  </Grid>
                  <Grid xs={3} sm={3} md={3} lg={3} item></Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
          <Grid xs={1} sm={1} md={2} lg={2} item></Grid>
        </Grid>
      </Box>
    </div>
  );
}
