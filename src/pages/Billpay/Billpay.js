import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import "./Billpay.css"
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import { useNavigate } from 'react-router-dom';
function Billpay() {
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
              <div id="billpay1">
                <Grid container id="billpay2">
              <Grid item md={1} lg={1} xs={1}  >
                <div id="light"onClick={()=>navigate("/dth")}><OndemandVideoIcon id="bulbicon"/></div>
                
                <div id="billpay3">Light</div>
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

export default Billpay
