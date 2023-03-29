import React, { useState, useEffect } from "react";
import {
  Button,
  Card,
  CardContent,
  CircularProgress,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import "./Register.css";
import logo from "../../assets/login/logo.png";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import PersonIcon from "@mui/icons-material/Person";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import MailIcon from "@mui/icons-material/Mail";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { apicaller } from "../../utils/api";

export default function Register() {
  const regEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirm, setConfirmPassword] = React.useState(false);
  // validation all useStates start
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [currency, setCurrency] = useState("");
  const [newpassword, setNewpassword] = useState("");
  const [confirmPsswd, setConfirmPsswd] = useState("");
  const [userlimit, setLimit] = useState("");
  const [usertimezone, setTimezone] = useState("");
  const [loader, setLoader] = useState(false);
  // validation all useStates end

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
  // create account function start

  const validation = () => {
    if (name.length === 0) {
      eToast("Please Enter Your Name");
      return false;
    } else if (email.length === 0) {
      eToast("Please Enter Your Email");
      return false;
    } else if (!regEmail.test(email)) {
      eToast("Please Enter a Valid Email");
      return false;
    } else if (phone.length === 0) {
      eToast("Please Enter Your Phone Number");
      return false;
    } else if (phone.length !== 10) {
      eToast("Please Enter a Valid Phone Number");
      return false;
    } else if (currency.length === 0) {
      eToast("Please Select Your Currency Type");
      return false;
    } else if (userlimit.length === 0) {
      eToast("Please Select Your Pay Limit");
      return false;
    } else if (usertimezone.length === 0) {
      eToast("Please Select Your Time Zone");
      return false;
    } else if (newpassword.length === 0) {
      eToast("Please Enter a Password");
      return false;
    } else if (confirmPsswd.length === 0) {
      eToast("Please Enter Confirm Password");
      return false;
    } else if (newpassword !== confirmPsswd) {
      eToast("Password & Confirm password is not same");
      return false;
    } else {
      return true;
    }
  };
  // create account function end

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleConfirmPassword = () => setConfirmPassword((show) => !show);

  const navigate = useNavigate();

  const createAccount = async () => {
    if (validation()) {
      setLoader(true);
      const data = {
        firstName: name,
        email: email,
        password: newpassword,
        mobileNumber: phone,
        currency: currency,
        limit: parseInt(userlimit),
        timeZone: usertimezone,
      };
      await apicaller("reseller/register", data, "POST", null)
        .then((res) => {
          if (res?.status === 201 || res?.status === 200) {
            // console.log("Registered new user is",res?.data);
            sToast("Your Account has been created!");
            setName("");
            setEmail("");
            setPhone("");
            setCurrency("");
            setNewpassword("");
            setConfirmPsswd("");
            setLimit("");
            setTimezone("");
          }
        })
        .catch((error) => {
          eToast("Sorry ! This Email is Already Exist");
        })
        .finally(() => setLoader(false));
    }
  };

  return (
    <>
      {/* <Grid>
        <Paper elevation={10}>Login</Paper>
      </Grid> */}
      <div id="register3">
        <Card id="register1">
          <CardContent>
            <Grid container spacing={1}>
              <Grid id="register6" xs={12} sm={12} md={12} lg={12} item>
                <img src={logo} id="register6" />
              </Grid>
              <Grid id="register6" xs={12} sm={12} md={12} lg={12} item>
                <Typography id="register2" gutterBottom variant="h5">
                  Sign up
                </Typography>
              </Grid>
              <Grid id="register4" xs={12} sm={12} md={12} lg={12} item>
                <TextField
                  fullWidth
                  required
                  id="outlined-required"
                  type="text"
                  label="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter Name"
                  inputProps={{
                    style: {
                      height: "0.9rem",
                    },
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PersonIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid id="register4" xs={12} sm={12} md={12} lg={12} item>
                <TextField
                  type="email"
                  fullWidth
                  required
                  id="outlined-required"
                  label="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Email"
                  inputProps={{
                    style: {
                      height: "0.9rem",
                    },
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <MailIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>

              <Grid id="register4" xs={12} sm={12} md={12} lg={12} item>
                <TextField
                  type="phone"
                  fullWidth
                  required
                  id="outlined-required"
                  label="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Enter phoneno"
                  inputProps={{
                    style: {
                      height: "0.9rem",
                    },
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LocalPhoneIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid id="register4" xs={12} sm={12} md={12} lg={12} item>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Currency
                  </InputLabel>
                  <Select
                    style={{ height: "3rem" }}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Currency"
                    value={currency}
                    onChange={(e) => setCurrency(e.target.value)}
                    placeholder="Currency"
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

              <Grid id="register4" xs={12} sm={12} md={12} lg={12} item>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Pay Limit
                  </InputLabel>
                  <Select
                    style={{ height: "3rem" }}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Pay Limit"
                    value={userlimit}
                    onChange={(e) => setLimit(e.target.value)}
                    placeholder="Currency"
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

              <Grid id="register4" xs={12} sm={12} md={12} lg={12} item>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Time Zone
                  </InputLabel>
                  <Select
                    style={{ height: "3rem" }}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Time Zone"
                    value={usertimezone}
                    onChange={(e) => setTimezone(e.target.value)}
                    placeholder="Select Time Zone"
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

              <Grid id="register4" xs={12} sm={12} md={12} lg={12} item>
                <FormControl fullWidth variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-password">
                    Password
                  </InputLabel>
                  <OutlinedInput
                    inputProps={{
                      style: {
                        height: "1rem",
                      },
                    }}
                    startAdornment={
                      <InputAdornment position="start">
                        <VpnKeyIcon />
                      </InputAdornment>
                    }
                    id="outlined-adornment-password"
                    type={showPassword ? "text" : "password"}
                    value={newpassword}
                    onChange={(e) => setNewpassword(e.target.value)}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Password"
                    placeholder="Enter Password"
                  />
                </FormControl>
              </Grid>

              <Grid id="register4" xs={12} sm={12} md={12} lg={12} item>
                <FormControl fullWidth variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-password">
                    Confirm Password
                  </InputLabel>
                  <OutlinedInput
                    inputProps={{
                      style: {
                        height: "1rem",
                      },
                    }}
                    startAdornment={
                      <InputAdornment position="start">
                        <VpnKeyIcon />
                      </InputAdornment>
                    }
                    id="outlined-adornment-password"
                    type={showConfirm ? "text" : "password"}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleConfirmPassword}
                          edge="end"
                        >
                          {showConfirm ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Confirm Password"
                    value={confirmPsswd}
                    onChange={(e) => setConfirmPsswd(e.target.value)}
                    placeholder="Confirm Password"
                  />
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={12} md={12} lg={12}>
                <Button
                  id="register5"
                  type="submit"
                  variant="contained"
                  fullWidth
                  onClick={() => createAccount()}
                >
                  {loader ? (
                    <CircularProgress sx={{ color: "white" }} size="1.3rem" />
                  ) : (
                    "CREATE ACCOUNT"
                  )}
                </Button>
              </Grid>
            </Grid>
            <Grid id="register7" xs={12} sm={12} md={12} lg={12}>
              <Typography>Already a user?</Typography>{" "}
              <Typography id="register8" onClick={() => navigate("/")}>
                Login
              </Typography>
            </Grid>
            <Grid></Grid>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
