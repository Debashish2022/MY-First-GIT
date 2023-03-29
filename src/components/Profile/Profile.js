import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Button,
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
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { drawerWidth } from "../../pages/Dashboard/Dashboard";
import "./Profile.css";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import {
  getResellerName,
  getResellerEmail,
  getResellerPhone,
  getResellerLimit,
  getResellerTimeZone,
  getResellerCurrency,
  getResellerId,
  getResellerToken,
  setReseller_Email,
  setReseller_Name,
  setReseller_Currency,
  setReseller_Phoneno,
  setReseller_Limit,
  setReseller_Timezone,
} from "../../redux/Slice/userSlice";
import { useSelector } from "react-redux";
import { useState } from "react";
import { apicaller } from "../../utils/api";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";

export default function Profile() {
  // USE EFFECT START
  useEffect(() => {
    GetUserDetail();
  }, []);
  // USE EFFECT END

  const [timeZone, setTimeZone] = React.useState("");

  const userName = useSelector(getResellerName);
  const userEmail = useSelector(getResellerEmail);
  const userPhone = useSelector(getResellerPhone);
  const userLimit = useSelector(getResellerLimit);
  const userTimeZone = useSelector(getResellerTimeZone);
  const userCurrency = useSelector(getResellerCurrency);
  const userId = useSelector(getResellerId);
  const Token = useSelector(getResellerToken);
  const dispatch = useDispatch();

  const [getUserName, setGetUserName] = useState(userName);
  const [getEmail, setGetEmail] = useState(userEmail);
  const [getPhone, setGetPhone] = useState(userPhone);
  const [getLimit, setGetLimit] = useState(userLimit);
  const [getTimeZone, setGetTimeZone] = useState(userTimeZone);
  const [getCurrency, setGetCurrency] = useState(userCurrency);
  const [updatePassword, setUpdatePassword] = useState("");
  const [updatePasswordButtonLoader, setUpdatePasswordButtonLoader] =
    useState(false);

  const [profileUpdateButtonLoader, setProfileUpdateButtonLoader] =
    useState(false);

  const [confirmUpdatePassword, setConfirmUpdatePassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConformPassword, setShowConformPassword] = useState(false);
  const [userProfile, setUserProfile] = useState([]);
  const [profilePageLoader, setProfilePageLoader] = useState(true);

  // toast start
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

  // update profile start

  const regEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

  function profileUpdate() {
    if (getUserName.length === 0) {
      eToast("Please Enter Your Name");
      return false;
    } else if (getEmail.length === 0) {
      eToast("Please Enter Your Email");
      return false;
    } else if (!regEmail.test(getEmail)) {
      eToast("Please Enter a Valid Email");
      return false;
    } else if (getPhone.length === 0) {
      eToast("Please Enter Your Phone No.");
      return false;
    } else if (getPhone.length !== 10) {
      eToast("Please Enter a Valid Phone No.");
      return false;
    } else if (getCurrency.length === 0) {
      eToast("Please Select Your Currency Type");
      return false;
    } else if (getLimit.length === 0) {
      eToast("Please Enter Your Daily Limit");
      return false;
    } else if (getTimeZone.length === 0) {
      eToast("Please Select Your Time Zone");
      return false;
    } else {
      return true;
    }
  }

  const updateResellerProfile = async (e) => {
    if (profileUpdate()) {
      setProfileUpdateButtonLoader(true);
      const data = {
        name: getUserName,
        email: getEmail,
        mobileNumber: getPhone,
        currency: getCurrency,
        limit: getLimit,
        timeZone: getTimeZone,
      };
      // console.log("update profile data", data);
      await apicaller(`reseller/update/${userId}`, data, "PUT", Token)
        .then((res) => {
          if (res.status === 201 || res.status === 200) {
            sToast("Profile Updated Successfully");
            dispatch(setReseller_Email(getEmail));
            dispatch(setReseller_Name(getUserName));
            dispatch(setReseller_Currency(getCurrency));
            dispatch(setReseller_Phoneno(getPhone));
            dispatch(setReseller_Limit(getLimit));
            dispatch(setReseller_Timezone(getTimeZone));
          }
        })
        .catch((error) => {
          eToast("Sorry Could Not Update");
        })
        .finally(() => {
          setProfileUpdateButtonLoader(false);
        });
    }
  };
  // update profile end

  // UPDATE PASSWORD FUNCTION START

  function updatePasswordValidation() {
    if (updatePassword.length === 0) {
      eToast("Please Enter New Password");
      return false;
    } else if (confirmUpdatePassword.length === 0) {
      eToast("Please Enter Confirm Password");
      return false;
    } else if (updatePassword !== confirmUpdatePassword) {
      eToast("Password and Confirm Password is Not Matched");
      return false;
    } else {
      return true;
    }
  }

  const updateUserPassword = async (e) => {
    if (updatePasswordValidation()) {
      setUpdatePasswordButtonLoader(true);
      const data = {
        email: userEmail,
        password: updatePassword,
      };
      // console.log("update password id .......", data);
      await apicaller("reseller/change-password", data, "PUT", Token)
        .then((res) => {
          if (res.status === 201 || res.status === 200) {
            sToast("Password Updated Successfully");
          }
        })
        .catch((error) => {
          eToast("Sorry Could Not Update");
        })
        .finally(() => {
          setUpdatePasswordButtonLoader(false);
          setUpdatePassword("");
          setConfirmUpdatePassword("");
        });
    }
  };

  // UPDATE PASSWORD FUNCTION END

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowPasswordd = () =>
    setShowConformPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleMouseDownPasswordd = (event) => {
    event.preventDefault();
  };

  // GET USER DETAILS GET API START

  const GetUserDetail = async () => {
    await apicaller(`reseller/get/${userId}`, null, "get", Token)
      .then((res) => {
        // console.log("profile getuserDetails api.....$$$$...", res.data);
        setUserProfile(res.data.result);
      })
      .finally(() => {
        setProfilePageLoader(false);
      });
  };

  // GET USER DETAILS GET API END

  return (
    <>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          paddingBottom: "3rem",
        }}
      >
        {profilePageLoader ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              minHeight: "80vh",
            }}
          >
            {" "}
            <CircularProgress />
          </div>
        ) : (
          <>
            <Toolbar />
            <Typography paragraph>
              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                <Grid item md={6} lg={6} xs={12}>
                  <div id="profile1">
                    <div id="profile2">User Details</div>

                    <div>
                      <TextField
                        className="profile3"
                        id="standard-required"
                        label="Name"
                        variant="standard"
                        defaultValue={getUserName}
                        onChange={(e) => setGetUserName(e.target.value)}
                      />
                      <TextField
                        className="profile3"
                        id="standard-required"
                        label="Username"
                        variant="standard"
                        defaultValue={getEmail}
                        onChange={(e) => setGetEmail(e.target.value)}
                      />
                      <TextField
                        className="profile3"
                        id="standard-required"
                        label="Phone"
                        variant="standard"
                        defaultValue={getPhone}
                        onChange={(e) => setGetPhone(e.target.value)}
                      />

                      <FormControl
                        variant="standard"
                        sx={{ minWidth: "100%", marginTop: "0.7rem" }}
                      >
                        <InputLabel id="demo-simple-select-standard-label">
                          Currency
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-standard-label"
                          id="demo-simple-select-standard"
                          defaultValue={getCurrency}
                          onChange={(e) => setGetCurrency(e.target.value)}
                          label="Currency"
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

                      <FormControl
                        variant="standard"
                        sx={{ minWidth: "100%", marginTop: "0.7rem" }}
                      >
                        <InputLabel id="demo-simple-select-standard-label">
                          Daily amount limit of payout
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-standard-label"
                          id="demo-simple-select-standard"
                          defaultValue={getLimit}
                          onChange={(e) => setGetLimit(e.target.value)}
                          label="Daily amount limit of payout"
                          placeholder="Daily amount limit of payout"
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

                      {/* <TextField
                    className="profile3"
                    id="standard-required"
                    label="Daily amount limit of payout"
                    variant="standard"
                    defaultValue={getLimit}
                    onChange={(e) => setGetLimit(e.target.value)}
                  /> */}

                      <FormControl
                        variant="standard"
                        sx={{ minWidth: "100%", marginTop: "0.7rem" }}
                      >
                        <InputLabel id="demo-simple-select-standard-label">
                          Time Zone
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-standard-label"
                          id="demo-simple-select-standard"
                          defaultValue={getTimeZone}
                          onChange={(e) => setGetTimeZone(e.target.value)}
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
                      <div id="profile4">
                        <Button
                          variant="contained"
                          id="profile5"
                          onClick={(e) => updateResellerProfile(e)}
                        >
                          {/* Update Info */}
                          {profileUpdateButtonLoader ? (
                            <CircularProgress
                              sx={{ color: "white" }}
                              size="1.5rem"
                            />
                          ) : (
                            "UPDATE INFO"
                          )}
                        </Button>
                      </div>
                    </div>
                  </div>
                </Grid>

                {/* USER PROFILE START  */}

                <Grid item md={6} lg={6} xs={12}>
                  <div id="profile1">
                    <div id="profile2">User State</div>
                    <div id="profile6">Agent</div>
                    <div id="profile7">
                      <Grid item md={6} lg={6} xs={6}>
                        <div>Currency</div>
                        {/* <div>Credit</div> */}
                        <div>Limit</div>
                        <div>Commission</div>
                        <div id="profile8">Payin</div>
                        <div>Commission</div>
                        {/* <div>Pending limit</div> */}
                        <div>Satus</div>
                        <div id="profile8">Payout</div>
                        <div>Commission</div>
                        {/* <div>Peding limit</div> */}
                        <div>Status</div>
                        {/* <div>Currency</div> */}
                      </Grid>
                      <Grid item md={6} lg={6} xs={6}>
                        <div>
                          {userProfile?.currency
                            ? userProfile?.currency
                            : "N/A"}
                        </div>
                        <div>
                          {userProfile?.limit ? userProfile?.limit : "N/A"}
                        </div>
                        {/* <div>100000.00</div> */}
                        <div>
                          {userProfile?.commission
                            ? userProfile?.commission
                            : "N/A"}
                        </div>
                        <div id="profile8">&nbsp;</div>
                        <div>2.5%</div>
                        {/* <div>3</div> */}
                        <div>
                          {userProfile?.adminApproval === "approved"
                            ? "Active"
                            : "Deactive"}
                        </div>
                        <div id="profile8">&nbsp;</div>
                        <div>2.5%</div>
                        {/* <div>3</div> */}
                        <div>
                          {userProfile?.adminApproval === "approved"
                            ? "Active"
                            : "Deactive"}
                        </div>
                        {/* <div>INR</div> */}
                      </Grid>
                    </div>
                  </div>
                </Grid>

                <Grid item md={6} lg={6} xs={12}>
                  <div id="profile9">
                    <div id="profile2">Update password</div>

                    <FormControl
                      sx={{ m: 1, width: "25ch" }}
                      variant="outlined"
                      style={{ width: "100%" }}
                    >
                      <InputLabel htmlFor="outlined-adornment-password">
                        New Password
                      </InputLabel>
                      <OutlinedInput
                        style={{ width: "100%" }}
                        id="outlined-adornment-password"
                        type={showPassword ? "text" : "password"}
                        value={updatePassword}
                        onChange={(e) => setUpdatePassword(e.target.value)}
                        startAdornment={
                          <InputAdornment position="start">
                            <VpnKeyIcon />
                          </InputAdornment>
                        }
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
                        label="Password"
                      />
                    </FormControl>
                    <FormControl
                      sx={{ m: 1, width: "25ch" }}
                      variant="outlined"
                      style={{ width: "100%" }}
                    >
                      <InputLabel htmlFor="outlined-adornment-password">
                        Confirm password
                      </InputLabel>
                      <OutlinedInput
                        style={{ width: "100%" }}
                        id="outlined-adornment-password"
                        type={showConformPassword ? "text" : "password"}
                        value={confirmUpdatePassword}
                        onChange={(e) =>
                          setConfirmUpdatePassword(e.target.value)
                        }
                        startAdornment={
                          <InputAdornment position="start">
                            <VpnKeyIcon />
                          </InputAdornment>
                        }
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPasswordd}
                              onMouseDown={handleMouseDownPasswordd}
                              edge="end"
                            >
                              {showConformPassword ? (
                                <VisibilityOff />
                              ) : (
                                <Visibility />
                              )}
                            </IconButton>
                          </InputAdornment>
                        }
                        label="Confirm Password"
                      />
                    </FormControl>

                    <FormControl
                      sx={{ m: 1, width: "25ch" }}
                      variant="outlined"
                      style={{ width: "100%" }}
                    >
                      <Button
                        variant="contained"
                        id="profile5"
                        onClick={(e) => updateUserPassword(e)}
                      >
                        {updatePasswordButtonLoader ? (
                          <CircularProgress
                            sx={{ color: "white" }}
                            size="1.3rem"
                          />
                        ) : (
                          "UPDATE PASSWORD"
                        )}
                      </Button>
                    </FormControl>
                  </div>
                </Grid>
              </Grid>
            </Typography>
          </>
        )}
      </Box>
    </>
  );
}
