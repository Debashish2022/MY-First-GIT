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
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import MailIcon from "@mui/icons-material/Mail";
import { toast } from "react-toastify";
import { apicaller } from "../../utils/api";
import jwt_decode from "jwt-decode";
import { setResellerToken,
  setReseller_Email,
  setReseller_Name,
  setReseller_Currency,
  setReseller_id, setReseller_Phoneno,setReseller_Limit,setReseller_Timezone} from "../../redux/Slice/userSlice"; 
import { useDispatch } from "react-redux";

export default function Login() {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [resellerButtonLoader, setResellerButtonLoader] = useState(false);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  // toasts
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

  const loginemail = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w\w+)+$/;

  function validation() {
    if(email.length === 0){
      eToast("Please Enter Your Email");
      return false;
    }else if(!loginemail.test(email)){
      eToast("Please Enter a Valid Email");
      return false;
    }else if(password.length === 0){
      eToast("Please Enter Your Password");
      return false;
    }else {
      return true;
    }

  };

  const ResellerLogin = async () => {
    if(validation()){
      setResellerButtonLoader(true);
      const data ={
        email: email,
        password: password
      };
      // console.log('Login Data', data);
      await apicaller("reseller/login", data, "POST", null)
      .then((res) => {
        if(res.status === 201 || res.status === 200){
          const userDecodeData = jwt_decode(res.data.result.token);
          const user = userDecodeData.data;
          // console.log('user data........', user);
          const token = res.data.result.token;
          dispatch(setResellerToken(token));
          dispatch(setReseller_Email(user.email));
          dispatch(setReseller_Name(user.name));
          dispatch(setReseller_Currency(user.currency));
          dispatch(setReseller_id(user._id));  
          dispatch(setReseller_Phoneno(user.mobileNumber));  
          dispatch(setReseller_Limit(user.limit));  
          dispatch(setReseller_Timezone(user.timeZone));  
          
          if(token) {
            sToast(`Welcome to FieWinn ${user.name}`);
            navigate("/dashboard");
            setEmail("");
            setPassword("");
          }
        }
      })
      .catch((error) => {
          eToast(error.response.data.response.message);
      })
      .finally(() =>{
        setResellerButtonLoader(false);
      });
    }
  }

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
                  className="login9"
                    fullWidth
                    required
                    id="outlined-required"
                    label="Email"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
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
                      value={password}
                      onChange={(e)=>setPassword(e.target.value)}
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
                    />
                  </FormControl>
                </Grid>


                <Grid item xs={12} sm={12} md={12} lg={12}>
                  <Button
                    id="login5"
                    type="submit"
                    variant="contained"
                    fullWidth
                    onClick={()=>ResellerLogin()}
                  >
                    {resellerButtonLoader ? <CircularProgress sx={{color:'white'}} size="1rem" /> : 'Login'}
                  </Button>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                  <Typography id="login2" gutterBottom>
                    OR
                  </Typography>
                </Grid>

                <Grid item xs={12} sm={12} md={12} lg={12}>
                  <Typography id="login6" gutterBottom onClick={()=>navigate("/register")}>
                    CREATE A NEW ACCOUNT
                  </Typography>
                 
                </Grid>
              </Grid>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
