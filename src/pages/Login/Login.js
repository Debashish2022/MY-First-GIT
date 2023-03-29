import {
  Button,
  Card,
  CardContent,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import "./Login.css";
import logo from "../../assets/image2.png";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const navigate = useNavigate();
  return (
    <>
      <div id="loginpag3">
        <Card id="loginpag1">
          <CardContent>
            <Grid container spacing={1} id="login10">
              <Grid id="login7" xs={12} sm={12} md={12} lg={12} item>
                <img src={logo} id="log" />
              </Grid>
              <Grid id="login7" xs={12} sm={12} md={12} lg={12} item>
                <Typography id="loginpag2" gutterBottom variant="h5">
                  Admin Login
                </Typography>
                <Typography id="loginpag6" gutterBottom variant="h6">
                  Enter your email and password below
                </Typography>
              </Grid>

              <Grid id="login4" xs={12} sm={12} md={12} lg={12} item>
                <Typography id="typo2">Username</Typography>

                <TextField
                  fullWidth
                  id="standard-basic"
                  type="text"
                  variant="standard"
                  placeholder="Enter Your Username"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PersonIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid id="login4" xs={12} sm={12} md={12} lg={12} item>
                <Typography id="typo2">Password</Typography>
                <TextField
                  fullWidth
                  id="standard-basic"
                  type="password"
                  variant="standard"
                  placeholder="Enter Your Password"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <Button
                  id="logbtn"
                  type="submit"
                  variant="contained"
                  fullWidth
                  onClick={() => navigate("/home")}
                >
                  Login
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
