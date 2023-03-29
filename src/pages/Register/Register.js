import React from "react";
import {
  Button,
  Card,
  CardContent,
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
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import MailIcon from "@mui/icons-material/Mail";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirm, setConfirmPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleConfirmPassword = () => setConfirmPassword((show) => !show);

  const navigate = useNavigate();
  return (
    <>
      {/* <Grid>
        <Paper elevation={10}>Login</Paper>
      </Grid> */}
      <div id="register3">
        <Card id="register1">
          <CardContent>
            <form>
              <Grid container spacing={1}>
                <Grid id="register6" xs={12} sm={12} md={12} lg={12} item>
                  <img src={logo} id="register6" />
                </Grid>
                <Grid id="register6" xs={12} sm={12} md={12} lg={12} item>
                  <Typography id="register2" gutterBottom variant="h5">
                    Signup
                  </Typography>
                </Grid>
                <Grid id="register4" xs={12} sm={12} md={12} lg={12} item>
                  <TextField
                    fullWidth
                    required
                    id="outlined-required"
                    label="Name"
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
                  <FormControl
                    fullWidth  >
                    <InputLabel id="demo-simple-select-label">
                      Currency
                    </InputLabel>
                    <Select
                    style={{height:'3rem'}}
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="Currency"
                      placeholder="Currency"
                      
                    >
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
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
                  >
                    CREATE ACCOUNT
                  </Button>
                </Grid>
              </Grid>

              <Grid id="register7" xs={12} sm={12} md={12} lg={12}>
                <Typography>Already a user?</Typography> <Typography id="register8" onClick={()=>navigate("/")}>Login</Typography>
              </Grid>
              <Grid>

              </Grid>
            </form>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
