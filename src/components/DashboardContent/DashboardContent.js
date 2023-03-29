import { Box, CircularProgress, Grid, Toolbar, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { drawerWidth } from '../../pages/Dashboard/Dashboard';
import { apicaller } from '../../utils/api';
import { Charts } from '../Charts/Charts'
import DashboardCard from '../DashboardCard/DashboardCard'
import "./DashboardContent.css";
import { getResellerId, getResellerToken } from '../../redux/Slice/userSlice'; 
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

export default function DashboardContent() {
  const userId = useSelector(getResellerId);
  const Token = useSelector(getResellerToken);

  const [transact, setTransact] = useState();
  const [withdraw, setWithdraw] = useState(); 
  const [revenue, setRevenue] = useState();
  const [commission,setCommission]=useState();
  const [dashboardLoader, setDashboardLoader] = useState(true);

  
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

    useEffect(()=>{
      getTransaction();
    },[]);

    const getTransaction = async () => {
        await apicaller(`payment/transactions/${userId}`, null, "get", Token )
        .then((res) => {
          setTransact(res?.data?.result?.total);
        })
        .catch((error) => {
          eToast(error?.response?.data?.response?.message);
        });
       

        await apicaller(`payment/payout/${userId}`, null, "get", Token )
        .then((res) => {
          setWithdraw(res?.data?.payOut);
        })
        .catch((error) => {
          eToast(error?.response?.data?.response?.message);
        });

        await apicaller(`payment/payin/${userId}`, null, "get", Token )
        .then((res) => {
          setRevenue(res?.data?.payIn);
        })
        .catch((error) => {
          eToast(error?.response?.data?.response?.message);
        });

        await apicaller(`reseller/get/${userId}`, null, "get", Token )
        .then((res) => {
          
          setCommission(res?.data?.result?.commission);
        })
        .catch((error) => {
          eToast(error?.response?.data?.response?.message);
        });
    
      setDashboardLoader(false);
    };

  return (
    <>
        <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          padding:{xs:'1rem', sm:'1.5rem'}
        }}
      >
        {dashboardLoader ? (
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
        <Typography paragraph >
          <div id="dashboardcontent1">All Time</div>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            
                <Grid item md={3} lg={3} xs={12}>
                <DashboardCard colour="#1976D2" type="Transaction" quantity={transact}/>
                </Grid>
            <Grid item md={3} lg={3} xs={12}>
              <DashboardCard colour="#388E3C" type="Turnover" quantity={revenue}/>
            </Grid>
            <Grid item md={3} lg={3} xs={12}>
              <DashboardCard colour="#EF6C00" type="Withdrawal" quantity={withdraw} />
            </Grid>
            <Grid item md={3} lg={3} xs={12}>
              <DashboardCard colour="#6a5acd" type="Commision" quantity={commission} />
            </Grid>
            {/* <Grid item md={3} lg={3} xs={12}>
              <DashboardCard colour="#F9A825" type="Coin" quantity="000000"/>
            </Grid> */}
          {/* </Grid> */}
        {/* </Typography>
        <Typography paragraph> */}
        {/* <Grid
            container
            rowSpacing={1}
            columnSpacing={{  md: 3 }}
          > */}
            <Grid item md={2} lg={2} xs={1}> </Grid>
            <Grid item md={8} lg={8} xs={9}  id="dashboardcontent2">
              <Charts />
            </Grid>
            <Grid item md={2} lg={2} xs={0}></Grid>
            {/* <Grid item md={6} lg={6} xs={12}>
              <Charts heading="This quarter"/>
            </Grid> */}
          </Grid>
        </Typography>
        </>)}
      </Box>
    </>
  )
}
