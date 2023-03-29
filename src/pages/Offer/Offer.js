import React from "react";
import "./Offer.css";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import img from "../../assets/Offer.png";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export default function Offer() {
  return (
    <>
      <Box id="offermain">
        
        <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item md={12} lg={12} xs={12}>

          <Button
  variant="contained"
  component="label"
  color="secondary"
>
  Upload Your banner
  <input
    type="file"
    hidden
  />
</Button> 
          </Grid>
          <Grid item md={4} lg={4} xs={12} id="offer1">
            <div>
              <img src={img} id="offer2" />
            </div>
            <div id="offer3">
              <Button
              id="offer4"
                variant="contained"
                color="error"
                endIcon={<DeleteIcon />}
                
              >
                
              </Button>
            </div>
          </Grid>

          <Grid item md={4} lg={4} xs={12} id="offer1">
            <div>
              <img src={img} id="offer2" />
            </div>
            <div id="offer3">
              <Button
              id="offer4"
                variant="contained"
                color="error"
                endIcon={<DeleteIcon />}
                
              >
                
              </Button>
            </div>
          </Grid>
          <Grid item md={4} lg={4} xs={12} id="offer1">
            <div>
              <img src={img} id="offer2" />
            </div>
            <div id="offer3">
              <Button
              id="offer4"
                variant="contained"
                color="error"
                endIcon={<DeleteIcon />}
                
              >
                
              </Button>
            </div>
          </Grid>
          <Grid item md={4} lg={4} xs={12} id="offer1">
            <div>
              <img src={img} id="offer2" />
            </div>
            <div id="offer3">
              <Button
              id="offer4"
                variant="contained"
                color="error"
                endIcon={<DeleteIcon />}
                
              >
                
              </Button>
            </div>
          </Grid>
          <Grid item md={4} lg={4} xs={12} id="offer1">
            <div>
              <img src={img} id="offer2" />
            </div>
            <div id="offer3">
              <Button
              id="offer4"
                variant="contained"
                color="error"
                endIcon={<DeleteIcon />}
                
              >
                
              </Button>
            </div>
          </Grid>
          <Grid item md={4} lg={4} xs={12} id="offer1">
            <div>
              <img src={img} id="offer2" />
            </div>
            <div id="offer3">
              <Button
              id="offer4"
                variant="contained"
                color="error"
                endIcon={<DeleteIcon />}
                
              >
                
              </Button>
            </div>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

