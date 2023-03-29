import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import "./Govpay.css"
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import OpacityIcon from '@mui/icons-material/Opacity';
import { useNavigate } from 'react-router-dom';
function Govpay() {
  const navigate = useNavigate();
  return (
    <div>
     <Box>
        <Typography paragraph>
          <Grid
            container
           rowSpacing={4}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item md={12} lg={12} xs={12}>
              <div id="govpay1">
                <Grid container id="govpay2">
              <Grid item md={1} lg={1} xs={1}  >
                <div id="light" onClick={()=>navigate("/light")}><LightbulbIcon id="bulbicon"/></div>
                
                <div id="govpay3">Light</div>
                </Grid> 
                
                <Grid item md={1} lg={1} xs={1}  >
                <div id="light" onClick={()=>navigate("/water")}><OpacityIcon id="watericon"/></div>
                
                <div id="govpay3">Water</div>
                </Grid> 
                </Grid>
              </div>
            </Grid>
          </Grid>
        </Typography>
      </Box>
    </div>
  )
}

export default Govpay
