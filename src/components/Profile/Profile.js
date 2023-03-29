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

import { useSelector } from "react-redux";
import { useState } from "react";
import { apicaller } from "../../utils/api";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { getId, getToken } from "../../redux/Slice/userSlice";

export default function Profile() {

    // USE EFFECT START 
          useEffect(()=>{
              GetUserDetail();
          }, [])
    // USE EFFECT END 





  const [timeZone, setTimeZone] = React.useState("");

 
  const dispatch = useDispatch();

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

  const userId = useSelector(getId);
  const Token = useSelector(getToken);

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
        .then((res)=>{
          // console.log('profile getuserDetails api.....$$$$...', res.data);
          setUserProfile(res.data.result);
        })
        .finally(()=>{
          setProfilePageLoader(false);
        })
      }
      
    // GET USER DETAILS GET API END



  return (
    <>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          paddingBottom:'3rem',
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
        ) : (<>
        <Toolbar />
        <Typography paragraph>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            {/* <Grid item md={6} lg={6} xs={12}>
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
                      <MenuItem value="1000000">1000000</MenuItem>
                      <MenuItem value="2000000">2000000</MenuItem>
                      <MenuItem value="3000000">3000000</MenuItem>
                    </Select>
                  </FormControl> */}

                  {/* <TextField
                    className="profile3"
                    id="standard-required"
                    label="Daily amount limit of payout"
                    variant="standard"
                    defaultValue={getLimit}
                    onChange={(e) => setGetLimit(e.target.value)}
                  /> */}

                
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
                    <div>{userProfile?.currency ? userProfile?.currency : "N/A" }</div>
                    <div>{userProfile?.limit ? userProfile?.limit : "N/A" }</div>
                    {/* <div>100000.00</div> */}
                    <div>{userProfile?.commission ? userProfile?.commission : "N/A"}</div>
                    <div id="profile8">&nbsp;</div>
                    <div>2.5%</div>
                    {/* <div>3</div> */}
                    <div>{userProfile?.adminApproval === 'approved' ? "Active" : "Deactive"}</div>
                    <div id="profile8">&nbsp;</div>
                    <div>2.5%</div>
                    {/* <div>3</div> */}
                    <div>{userProfile?.adminApproval === 'approved' ? "Active" : "Deactive"}</div>
                    {/* <div>INR</div> */}
                  </Grid>
                </div>
              </div>
            </Grid>

           
          </Grid>
        </Typography>
        </>)}
      </Box>
    </>
  );
}
