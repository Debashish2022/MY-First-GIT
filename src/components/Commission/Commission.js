import { FlashOnRounded } from "@mui/icons-material";
import {
  Box,
  Button,
  CircularProgress,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { drawerWidth } from "../../pages/Dashboard/Dashboard";
import { getToken } from "../../redux/Slice/userSlice";
import { apicaller } from "../../utils/api";
import CommisionModal from "../CommissionModal/CommissionModal";
import "./Commission.css";

export default function Commission() {
  const eToast = (msg) => {
    toast.error(msg, {
      autoClose: 3000,
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

  useEffect(() => {
    getAllReseller();
  }, []);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    getAllReseller();
  };

  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page, setPage] = useState(0);
  const [commisionPageLoader, setCommisionPageLoader] = useState(true);

  const [open, setOpen] = useState(false);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const Token = useSelector(getToken);

  const [allReseller, setAllReseller] = useState([]);
  const [agentId, setAgentId] = useState("");
  const [agentCommission, setAgentCommission] = useState("");

  const getAllReseller = async () => {
    await apicaller("admin/all-reseller?status=approved", null, "get", Token)
      .then((res) => {
        setAllReseller(res.data.result.data.reverse());
        // console.log("all reseller getting....$$$", res.data.result.data);
      })
      .catch(() => {
        eToast("Unexpected Error Please Try After Some Time");
      })
      .finally(() => {
        setCommisionPageLoader(false);
      });
  };

  const CommisionTable = () => {
  return (
    <>
      <Box component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            paddingBottom: "3rem",
            display: { xs: "none", sm: "block" },
          }}>
        <>
          <Toolbar />
          <Typography paragraph>
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item lg={2} md={3} xs={6}>
                <div id="comm4">Commission</div>
              </Grid>
              <Grid item lg={10} md={9} xs={6}></Grid>
            </Grid>
          </Typography>
        </>

<>        {commisionPageLoader ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              minHeight: "80vh",
              width: "100%",
            }}
          >
            {" "}
            <CircularProgress
              sx={{ marginLeft: { xs: "1.8rem", sm: "0rem" } }}
            />
          </div>
        ) : (
          <>
            <TableContainer
              component={Paper}
              id="comm1"
              // sx={{ display: { xs: "none", sm: "block" } }}
            >
              <div id="comm2">
              {allReseller?.length === 0 && (
                  <div id="comm5">No Result Found</div>
                )}
                {allReseller?.length !== 0 && (
                <>
                  <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell align="left" id="comm3">
                          Sl No.
                        </TableCell>
                        <TableCell align="left" id="comm3">
                          Name
                        </TableCell>
                        <TableCell align="left" id="comm3">
                          Email
                        </TableCell>
                        <TableCell align="left" id="comm3">
                          Limit
                        </TableCell>
                        <TableCell align="left" id="comm3">
                          Commision
                        </TableCell>
                        <TableCell align="left" id="comm3"></TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {allReseller
                        ?.slice(
                          page * rowsPerPage,
                          page * rowsPerPage + rowsPerPage
                        )
                        ?.map((item, i) => (
                          <TableRow
                            sx={{
                              "&:last-child td, &:last-child th": {
                                border: 0,
                              },
                            }}
                          >
                            <TableCell align="left">
                              {page * 10 + i + 1}
                            </TableCell>
                            <TableCell align="left">{item?.name}</TableCell>
                            <TableCell align="left">{item?.email}</TableCell>
                            <TableCell align="left">{item?.limit}</TableCell>
                            <TableCell align="left">
                              {item?.commission}
                            </TableCell>
                            <TableCell align="left">
                              <Button
                                variant="contained"
                                onClick={() => {
                                  setOpen(true);
                                  setAgentId(item?._id);
                                  setAgentCommission(item?.commission);
                                }}
                              >
                                Settle Commision
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                    </TableBody>
                  </Table>
                </>)}
              </div>
              <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={allReseller.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </TableContainer>
          </>
        )}</>
      </Box>
      <CommisionModal
        open={open}
        resellerId={agentId}
        handleClose={handleClose}
        handleOpen={handleOpen}
        commission={agentCommission}
      />
    </>
  )};



  const CommisionBox = () => {
    return (
      <>
      <Box
          sx={{
            display: { sm: "none" },
          }}
        >

        <Typography paragraph id="comm7" sx={{ display: { sm: "none" } }}>
        
         
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={12}>

              <>
              {commisionPageLoader ? (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "80vh",
                minWidth:"46vh"
              }}
            >
              {" "}
              <CircularProgress
                sx={{display:{sm:'none'} }}
              />
            </div>
          ) : (
              <>
              {!commisionPageLoader ? (
                <> {allReseller?.length === 0 && <div style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  minHeight: "60vh",
                  minWidth:"46vh",
                  color:'black'
                }}>No Result Found</div>}</>
              ) : null}
            {allReseller?.map((item,i)=>(
              <div id="comm6" key={i}>
                <Grid container>
                  <Grid item xs={5} id="comm8">
                    Sl No.:
                  </Grid>
                  <Grid item xs={7} id="comm9">
                    {i +1}
                  </Grid>
                  <Grid item xs={5} id="comm8" >
                    Name:
                  </Grid>
                  <Grid item xs={7} id="comm9">
                  {item?.name}
                  </Grid>
                  <Grid item xs={5} id="comm8">
                    Email:
                  </Grid>
                  <Grid item xs={7} id="comm9">
                  {item?.email}
                  </Grid>
                  <Grid item xs={5} id="comm8">
                   Limit:
                  </Grid>
                  <Grid item xs={7} id="comm9">
                  {item?.limit}
                  </Grid>
                  <Grid item xs={5} id="comm8">
                   Commision
                  </Grid>
                  <Grid item xs={7} id="comm9">
                  {item?.commission}
                  </Grid>
                  <Grid item xs={1}></Grid>
                  <Grid item xs={10}> <Button
                                variant="contained"
                                fullWidth
                                id="comm10"
                                onClick={() => {
                                  setOpen(true);
                                  setAgentId(item?._id);
                                  setAgentCommission(item?.commission);
                                }}
                              >
                                Settle Commision
                              </Button></Grid>
                  <Grid item xs={1}></Grid>

                                    
                </Grid>
                
              </div>
            ))}</>)}</>
              
            </Grid>
          </Grid> 
        </Typography>
       
        </Box>
      </>
      
    );
  };

 
  return (
    <>
      <CommisionTable />
      <CommisionBox />
    </>
  );
}
