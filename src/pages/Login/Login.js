import React, { useState } from "react";
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
  OutlinedInput,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import "./Login.css";
import logo from "../../assets/login/logo.png";
import { useNavigate } from "react-router-dom";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import PersonIcon from "@mui/icons-material/Person";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { apicaller } from "../../utils/api";
import jwt_decode from "jwt-decode";
import { setEmail, setToken, setRole, setUserid } from "../../redux/Slice/userSlice";

export default function Login() {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  // to show loader
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const regEmail = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w\w+)+$/;

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
      position: "top-center"
    });
  };

  const validation = () => {
    if (userEmail.length === 0) {
      eToast("Please Enter your Email");
      return false;
    } else if (!regEmail.test(userEmail)) {
      eToast("Please enter a valid Email Id");
      return false;
    } else if (userPassword.length === 0) {
      eToast("Please Enter Your Password");
      return false;
    } else {
      return true;
    }
  };

  const loginFun = async () => {
    if (validation()) {
      setIsLoading(true);

      const data = {
        email: userEmail,
        password: userPassword,
      };

      await apicaller("admin/login", data, "POST", null)
        .then((res) => {
          if (res.status === 201 || res.status === 200) {
            const token = res?.data?.result?.token;

            const userFromDecode = jwt_decode(res?.data?.result?.token);
            // console.log("decoded data", userFromDecode);

            dispatch(setToken(token));
            dispatch(setEmail(userFromDecode?.data?.email));
            dispatch(setRole(userFromDecode?.data?.role));
            dispatch(setUserid(userFromDecode?.data?._id));
            setIsLoading(false);
            sToast("Logged In Successfully");
            navigate("/dash");
          }
        })
        .catch(() => eToast("Sorry Couldn't Login!"))
        .finally(() => setIsLoading(false));
    }
  };

  return (
    <>
      {/* <Grid>
        <Paper elevation={10}>Login</Paper>
      </Grid> */}
      <div id="login3">
        <Card id="login1">
          <CardContent>
            <Grid container spacing={1}>
              <Grid id="login7" xs={12} sm={12} md={12} lg={12} item>
                <img src={logo} id="login7" />
              </Grid>
              <Grid id="login7" xs={12} sm={12} md={12} lg={12} item>
                <Typography id="login2" gutterBottom variant="h5">
                  Login
                </Typography>
              </Grid>
              <Grid id="register4" xs={12} sm={12} md={12} lg={12} item>
                <TextField
                  fullWidth
                  required
                  id="outlined-required"
                  label="Email"
                  placeholder="Enter Email"
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
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                />
              </Grid>
              <Grid id="loin4" xs={12} sm={12} md={12} lg={12} item>
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
                    placeholder="Password"
                    value={userPassword}
                    onChange={(e) => setUserPassword(e.target.value)}
                  />
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={12} md={12} lg={12}>
                <Button
                  id="login5"
                  type="submit"
                  variant="contained"
                  fullWidth
                  onClick={() => loginFun()}
                >
                  {isLoading ? <CircularProgress color="inherit" size="1.2rem" /> : "LOGIN"}
                </Button>
              </Grid>
              {/* <Grid item xs={12} sm={12} md={12} lg={12}>
                <Typography id="login2" gutterBottom>
                  OR
                </Typography>
              </Grid>

              <Grid item xs={12} sm={12} md={12} lg={12}>
                <Typography
                  id="login6"
                  gutterBottom
                  onClick={() => navigate("/register")}
                >
                  CREATE A NEW ACCOUNT
                </Typography>
              </Grid> */}
            </Grid>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
