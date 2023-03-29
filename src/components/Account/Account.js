import React, { useEffect, useState } from "react";
import "./Account.css";
import {
  Button,
  CircularProgress,
  Grid,
  Toolbar,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { drawerWidth } from "../../pages/Dashboard/Dashboard";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";

import { apicaller } from "../../utils/api";
import { getToken } from "../../redux/Slice/userSlice";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import AddAccountModal from "../AddAccountModal/AddAccountModal";

export default function Account() {
  // useEffect(() => {
  //   ResellerLogin();
  // }, []);

  const Token = useSelector(getToken);
  const [AccountDetail, setAccountDetail] = useState([]);
  const [buttonClick, setButtonClick] = useState("NetBanking");
  const [open, setOpen] = useState(false);
  const [accoutnPageLoader, setAccoutnPageLoader] = useState(true);

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

  // modal open close function start

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    // ResellerLogin();
  };
  // modal open close function end

  // getAccountdata api start
  // const ResellerLogin = async () => {
  //   await apicaller("card/get", null, "get", Token)
  //     .then((res) => {
  //       console.log("getaccount...", res.data);
  //       setAccountDetail(res.data.result);
  //     })
  //     .catch((error) => {
  //       eToast(error.response.data.response.message);
  //     })
  //     .finally(() => {
  //       setAccoutnPageLoader(false);
  //     });
  // };
  // getAccountdata api end

  return (
    <>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          // p: 3,
          // width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
        style={{ padding: "1rem 2rem 1rem" }}
      >
        <Toolbar />
        <Typography paragraph>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 1, md: 1 }}
            id="accountmainDiv"
          >
            <Grid container spacing={2}>
              <Grid item xs={12} md={12} lg={12} id="account1">
                <div id="account3">Account</div>
                <div id="account2">
                  <Button onClick={() => setOpen(true)}>
                    <AddOutlinedIcon id="account4" />
                  </Button>
                  <AddAccountModal
                    open={open}
                    handleClose={handleClose}
                    handleOpen={handleOpen}
                  />
                </div>
              </Grid>

              <Grid item xs={12} md={12} lg={12} style={{ paddingTop: "0px" }}>
                <div id="account7">
                  {accoutnPageLoader ? (
                    <Grid
                      container
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        minHeight: "80vh",
                      }}
                    >
                      {" "}
                      <CircularProgress />
                    </Grid>
                  ) : (
                    <>
                      <Button
                        size="small"
                        id={
                          buttonClick === "NetBanking"
                            ? "account8"
                            : "account10"
                        }
                        onClick={() => setButtonClick("NetBanking")}
                      >
                        Netbanking
                      </Button>
                      <Button
                        size="small"
                        id={buttonClick === "UPI" ? "account9" : "account5"}
                        onClick={() => setButtonClick("UPI")}
                      >
                        UPI
                      </Button>{" "}
                      
                    </>
                  )}
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Typography>
      </Box>
    </>
  );
}


// {AccountDetail?.map((item) => (
//   <div id="account6">
//     <div>Name : {item.name}</div>
//     {buttonClick === "UPI" && (
//       <div>UPI ID : {item.upi}</div>
//     )}
//     {buttonClick === "NetBanking" && (
//       <>
//         <div>Card number : {item.cardNumber}</div>
//         <div>Card Type : {item.cardType}</div>
//         {/* <div>Expire Date : {item.expireDate}</div> */}
//         {/* <div>CVV : {item.cvv}</div> */}
//       </>
//     )}
//   </div>
// ))}

// import React from "react";
// import "./Account.css";
// import { Button, Grid, Toolbar, Typography } from "@mui/material";
// import { Box } from "@mui/system";
// import { drawerWidth } from "../../pages/Dashboard/Dashboard";
// import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
// export default function Account() {
//   return (
//     <>
//       <Box
//         component="main"
//         sx={{
//           flexGrow: 1,
//           p: 3,
//           width: { sm: `calc(100% - ${drawerWidth}px)` },
//         }}
//       >
//         <Toolbar />
//         <Typography paragraph>
//           <Grid
//             container
//             rowSpacing={1}
//             columnSpacing={{ xs: 1, sm: 1, md: 1 }}
//           >
//             <Grid container spacing={2}>
//               <Grid item xs={12} md={12} lg={12} id="account1">
//                 <div id="account3">Account</div>
//                 <div id="account2">
//                   <Button><AddOutlinedIcon id="account4"/></Button>
//                 </div>
//               </Grid>
//               <Grid item xs={12} md={12} lg={12}>
//                 <div id="account7">

//                     <Button variant="contained" size="small">Netbanking</Button>
//                     <Button size="small" id="account5">UPI</Button>
//                     <div id="account6">
//                       <div>Name : RUDRA NARAYAN DASH</div>
//                       <div>Card number : 42012 3049 2800 9815</div>
//                       <div>Expire Date : 02/22</div>
//                       <div>CVV : 921</div>
//                     </div>

//                 </div>
//               </Grid>
//             </Grid>
//           </Grid>
//         </Typography>
//       </Box>{" "}
//     </>
//   );
// }
