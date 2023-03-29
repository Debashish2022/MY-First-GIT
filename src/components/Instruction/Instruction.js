import { FlashOnRounded } from "@mui/icons-material";
import {
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
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { drawerWidth } from "../../pages/Dashboard/Dashboard";
import { apicaller } from "../../utils/api";
import AddInstructionModal from "../AddInstructionModal/AddInstructionModal";
import "./Instruction.css";
import { getToken } from "../../redux/Slice/userSlice";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

export default function Instruction() {
  useEffect(() => {
    getInstruction();
  }, []);

  const Token = useSelector(getToken);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page, setPage] = useState(0);
  const [instructionLoader, setInstructionLoader] = useState(true);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };


  const [open, setOpen] = useState(false);
  const [allInstruction, setAllInstruction] = useState([]);
  // console.log('akkk ', allInstruction);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    getInstruction();
  };

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

  const getInstruction = async () => {
    await apicaller("payment/instruction", null, "get", Token)
      .then((res) => {
        setAllInstruction(res.data.result.reverse());
        // console.log('instruction getting...$$$', res.data);
      })
      .catch(() => {
        eToast("Unexpected Error Please Try After Some Time");
      })
      .finally(()=>setInstructionLoader(false));
  };

  const InstructionSmall = () => {
    return (
      <>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            paddingBottom: "3rem",
            display: { xs: "none", sm: "block" },
          }}
        >
          <>
            <Toolbar />
            <Typography paragraph>
              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                <Grid item lg={10} md={9} xs={6}><div id="int9">Instruction</div></Grid>
                <Grid item lg={2} md={3} xs={6}>
                  <Button variant="contained" onClick={() => setOpen(true)}>
                    Add Instruction
                  </Button>
                  <AddInstructionModal
                    open={open}
                    handleClose={handleClose}
                    handleOpen={handleOpen}
                  />
                </Grid>
              </Grid>
            </Typography>
          </>

          <>
          {instructionLoader ? (
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
                id="inst2"
                sx={{ display: { xs: "none", sm: "block" } }}
              >
                <div id="inst3">
                {allInstruction.length === 0 && (
                  <div id="int10">No Result Found</div>
                )}
                {allInstruction.length !== 0 && (
                  <>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell align="left" id="inst1">
                            Sl No.
                          </TableCell>
                          <TableCell align="left" id="inst1">
                            Date
                          </TableCell>
                          <TableCell align="left" id="inst1">
                            Sender Email
                          </TableCell>
                          <TableCell align="left" id="inst1">
                            Receiver Email
                          </TableCell>
                          <TableCell align="left" id="inst1">
                              Status
                          </TableCell>
                          <TableCell align="left" id="inst1">
                            Amount
                          </TableCell>
                          <TableCell align="left" id="inst1">
                            Payment Method
                          </TableCell>
                          <TableCell align="left" id="inst1">
                            Account Details
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {allInstruction.slice(
                            page * rowsPerPage,
                            page * rowsPerPage + rowsPerPage
                          ).map((item, i) => (
                          <TableRow
                          key={i}
                            sx={{
                              "&:last-child td, &:last-child th": {
                                border: 0,
                              },
                            }}
                          >
                            <TableCell align="left">{page * 10 + i + 1}</TableCell>
                            <TableCell align="left">{item?.date}</TableCell>
                            <TableCell align="left">{item?.sender?.email}</TableCell>
                            <TableCell align="left">{item?.receiver?.email}</TableCell>
                            {item?.status === "approved" ? (
                                <>
                                  {" "}
                                  <TableCell align="left">
                                    <Typography id="int11">
                                      APPROVED
                                    </Typography>
                                  </TableCell>
                                </>
                              ):null}
                               {item?.status === "pending" ? (
                                <>
                                  {" "}
                                  <TableCell align="left">
                                    <Typography id="int12">
                                      PENDING
                                    </Typography>
                                  </TableCell>
                                </>
                              ):null}
                              {item?.status === "rejected" ? (
                                <>
                                  {" "}
                                  <TableCell align="left">
                                    <Typography id="int13">REJECT</Typography>
                                  </TableCell>
                                </>
                              ):null}
                              {item?.status === "paid" ? (
                                <>
                                  {" "}
                                  <TableCell align="left">
                                    <Typography id="int14">PAID</Typography>
                                  </TableCell>
                                </>
                              ):null}
                            <TableCell align="left">{item?.amount}/-</TableCell>
                            <TableCell align="left">{item?.medium}</TableCell>
                            {item?.name  ||
                              item?.ifsc ||
                              item?.accountNumber  ? (
                                <>
                                  <TableCell align="left">
                                    <Typography id="payout5">
                                      BANK NAME:{item?.name}
                                    </Typography>
                                    <Typography id="payout5">
                                      IFSC CODE:{item?.ifsc}
                                    </Typography>
                                    <Typography id="payout5">
                                      ACCOUNT NUMBER:{item?.accountNumber}
                                    </Typography>
                                  </TableCell>
                                </>
                              ) : null}
                              {item?.upi !== 'undefined' ? (
                                <>
                                  <TableCell align="left">
                                    <Typography id="payout5">
                                      UPI:{item?.upi}
                                    </Typography>
                                  </TableCell>
                                </>
                              ): null}
                             
                          </TableRow>
                        ))}
                        {/* <TableRow
                          sx={{
                            "&:last-child td, &:last-child th": {
                              border: 0,
                            },
                          }}
                        >
                          <TableCell align="left">test1</TableCell>
                          <TableCell align="left">test1</TableCell>
                          <TableCell align="left">test1</TableCell>
                          <TableCell align="left">test1</TableCell>
                          <TableCell align="left">test1</TableCell>
                          <TableCell align="left">test1</TableCell>
                          <TableCell align="left">test1</TableCell>
                        </TableRow> */}
                      </TableBody>
                    </Table>
                  </>)}
                </div>
                <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={allInstruction.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
              </TableContainer>
            </>)}
          </>
        </Box>
      </>
    );
  };

  const InstructionBox = () => {
    return (
      <>
      <Box
          sx={{
            display: { sm: "none" },
          }}
        >

        <Typography paragraph id="inst5" sx={{ display: { sm: "none" } }}>
        
         
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={12}>
            
              
              {!instructionLoader ? (<>
              <Grid container id="inst7">
            <Grid item xs={6}></Grid>
            <Grid item xs={6}><Button onClick={() => setOpen(true)} variant="contained" fullWidth>Add Instruction</Button></Grid>
             
              </Grid>
              </>
              ): null}
              <AddInstructionModal
                    open={open}
                    handleClose={handleClose}
                    handleOpen={handleOpen}
                  />

              <>
              {instructionLoader ? (
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
              {!instructionLoader ? (
                <> {allInstruction?.length === 0 && <div style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  minHeight: "60vh",
                  minWidth:"46vh",
                  color:'black'
                }}>No Result Found</div>}</>
              ) : null}
            {allInstruction?.map((item,i)=>(
              <div id="inst4" key={i}>
                <Grid container>
                  <Grid item xs={8}></Grid>
                  {item?.status === "approved" && (
                          <Grid item xs={4} id="int15">
                            APPROVED
                          </Grid>
                        )}
                        {item?.status === "pending" && (
                          <Grid item xs={4} id="int16">
                            PENDING
                          </Grid>
                        )}
                        {item?.status === "rejected" && (
                          <Grid item xs={4} id="int17">
                            REJECTED
                          </Grid>
                        )}
                         {item?.status === "paid" && (
                          <Grid item xs={4} id="int18">
                            PAID
                          </Grid>
                        )}
                  <Grid item xs={5} id="inst6">
                    Sl No.:
                  </Grid>
                  <Grid item xs={7} id="int8">
                    {i +1}
                  </Grid>
                  <Grid item xs={5} id="inst6" >
                    Date:
                  </Grid>
                  <Grid item xs={7} id="int8">
                  {item?.date}
                  </Grid>
                  <Grid item xs={5} id="inst6">
                    Sender Email:
                  </Grid>
                  <Grid item xs={7} id="int8">
                  {item?.sender?.email}
                  </Grid>
                  <Grid item xs={5} id="inst6">
                   Receiver Email:
                  </Grid>
                  <Grid item xs={7} id="int8">
                  {item?.receiver?.email}
                  </Grid>
                  <Grid item xs={5} id="inst6">
                    Amount:
                  </Grid>
                  <Grid item xs={7} id="int8">
                  {item?.amount}
                  </Grid>
                  <Grid item xs={5} id="inst6">
                    Payment Method:
                  </Grid>
                  <Grid item xs={7} id="int8">
                  {item?.medium}
                  </Grid>
                  {item?.name ?  <Grid item xs={5} id="inst6">
                   Bank Name
                  </Grid>: null}
                  {item?.name ? <Grid item xs={7} id="int8">
                     {item?.name}
                  </Grid> : null}
                  {item.ifsc ?  <Grid item xs={5} id="inst6">
                   Ifsc Code
                  </Grid>: null}
                  {item.ifsc ? <Grid item xs={7} id="int8">
                     {item.ifsc}
                  </Grid> : null}
                  {item?.accountNumber ?  <Grid item xs={5} id="inst6">
                   Account Number
                  </Grid>: null}
                  {item?.accountNumber ? <Grid item xs={7} id="int8">
                     {item?.accountNumber}
                  </Grid> : null}
                  
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
      <InstructionSmall />
      <InstructionBox />
    </>
  );
}
