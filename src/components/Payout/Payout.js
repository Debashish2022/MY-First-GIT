import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import "./Payout.css";
import {
  Button,
  CircularProgress,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TablePagination,
  TextField,
  Typography,
} from "@mui/material";
import AddPaymentModal from "../AddPaymentModal/AddPaymentModal";
import { getId, getToken } from "../../redux/Slice/userSlice";
import { apicaller } from "../../utils/api";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import AddIcon from '@mui/icons-material/Add';

export default function Payout() {
  useEffect(() => {
    getPayout();
  }, []);

  const [getAllPayout, setGetAllPayout] = useState([]);

  // modal
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    getPayout();
  };
  // mofalend

  const Token = useSelector(getToken);
  const userId = useSelector(getId);
  const [payoutPageLoader, setPayoutPageLoader] = useState(true);
  const [orderIdFilter, setOrderIdFilter] = useState([]);
  const [filter, setFilter] = useState([]);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page, setPage] = useState(0);
  const [amountFilterData, setAmountFilterData] = useState([]);
  const [statusFilter, setStatusFilter] = useState("");
  const [filterVal, setFilterVal] = useState("");
  const [orderIdFilterData, setOrderIdFilterData] = useState([]);
  const [channelValue, setChannelValue] = useState("");
  const [channelFilter, setChannelFilter] = useState([]);
  const [allStatus, setAllStatus] = useState("all");
  const [payoutStatus, setPayoutStatus] = useState([]);
  const [statusLoader, setStatusLoader] = useState(false);

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

  // api intergration start

  const getPayout = async () => {
    await apicaller(`payment/payout/${userId}`, null, "get", Token)
      .then((res) => {
        // console.log("payout api get...", res.data.result);
        setGetAllPayout(res?.data?.result);
        setAmountFilterData(res?.data?.result);
        setChannelFilter(res?.data?.result);
      })
      .catch((error) => {
        eToast("Unexpected Error Please Try After Some Time");
      })
      .finally(() => {
        setPayoutPageLoader(false);
      });
  };

  const GetPayoutByStatusFunction = async (status) => {
    setStatusLoader(true);
    await apicaller(
      `payment/payout-status/${userId}?status=${status}`,
      null,
      "get",
      Token
    )
      .then((res) => {
        setPayoutStatus(res?.data?.result);
      })
      .catch((error) => {
        eToast("Unexpected Error Please Try After Some Time");
      })
      .finally(() => {
        setStatusLoader(false);
      });
  };
  // api intergration end

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  // order id searchbar function start
  const statusFilterFunction = (e) => {
    setStatusFilter(e.target.value);
    if (e.target.value === "") {
      setGetAllPayout(amountFilterData);
    } else {
      const status = amountFilterData.filter((item) =>
        item?.status.toLowerCase().includes(e.target.value.toLowerCase())
      );
      // console.log("orderresult....", orderResult);
      setGetAllPayout(status);
    }
  };
  //order id searchbar function end

  // order id searchbar function start
  const channelFilterData = (e) => {
    setChannelValue(e.target.value);
    if (e.target.value === "") {
      setGetAllPayout(channelFilter);
    } else {
      const status = channelFilter.filter((item) =>
        item?.medium.toLowerCase().includes(e.target.value.toLowerCase())
      );
      // console.log("orderresult....", orderResult);
      setGetAllPayout(status);
    }
  };
  //order id searchbar function end
  const PayoutSmall = () => {
    return (
      <>
        {payoutPageLoader ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              minHeight: "90vh",
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
              id="payout4"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              <Grid container spacing={2} id="payout7">
                <Grid item md={2} lg={2} xs={12}>
                  <TextField
                    id="filled-basic"
                    label="Channel"
                    variant="standard"
                    value={channelValue}
                    onChange={(e) => channelFilterData(e)}
                  />
                </Grid>
                {/* <Grid item md={2} lg={2} xs={12}>
            <TextField id="filled-basic" label="Channel" variant="standard" value={filterVal}  onChange={(e)=>orderidFilter(e)}/>
          </Grid> */}
                <Grid item md={2} lg={2} xs={12}>
                  <FormControl variant="standard" sx={{ minWidth: 170 }}>
                    <InputLabel id="demo-simple-select-standard-label">
                      Status
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-standard-label"
                      id="demo-simple-select-standard"
                      value={statusFilter}
                      onChange={(e) => statusFilterFunction(e)}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value="pending">Pending</MenuItem>
                      <MenuItem value="approved">Approved</MenuItem>
                      <MenuItem value="rejected">Rejected</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                {/* <Grid item md={2} lg={2} xs={12}>
            <TextField
              id="date"
              label="Created date"
              type="date"
              variant="standard"
              sx={{ width: 170 }}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid> */}
                {/* <Grid item md={2} lg={2} xs={12}>
                  <Button id="payout11" onClick={handleOpen}>
                    Add Payment
                  </Button>
                  <AddPaymentModal
                    open={open}
                    handleClose={handleClose}
                    handleOpen={handleOpen}
                  />
                </Grid> */}
              </Grid>
              <div id="payout10">
                {getAllPayout.length === 0 && (
                  <div id="payout13">No Result Found</div>
                )}
                {getAllPayout.length !== 0 && (
                  <>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell align="left" id="payout3">
                            Sl No.
                          </TableCell>
                          <TableCell align="left" id="payout3">
                            Channel
                          </TableCell>
                          <TableCell align="left" id="payout3">
                            Attributes
                          </TableCell>

                          <TableCell align="left" id="payout3">
                            Amount{" "}
                          </TableCell>
                          <TableCell align="left" id="payout3">
                            Status{" "}
                          </TableCell>
                          {/* <TableCell align="left" id="payout3">
                  Payout Channel{" "}
                </TableCell> */}
                          <TableCell align="left" id="payout3">
                            Reference Id{" "}
                          </TableCell>
                          <TableCell align="left" id="payout3">
                            Create Time{" "}
                          </TableCell>
                          <TableCell align="left" id="payout3">
                            Download
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {getAllPayout
                          ?.reverse()
                          .slice(
                            page * rowsPerPage,
                            page * rowsPerPage + rowsPerPage
                          )
                          .reverse()
                          .map((item, i) => (
                            <TableRow
                              key={i}
                              sx={{
                                "&:last-child td, &:last-child th": {
                                  border: 0,
                                },
                              }}
                            >
                              {/* <TableCell align="left">{item.order_id}</TableCell> */}
                              <TableCell align="left">
                                {page * 10 + i + 1}
                              </TableCell>
                              <TableCell align="left">{item?.medium}</TableCell>

                              {item?.name ||
                              item?.ifsc ||
                              item?.accountNumber ? (
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
                              {item?.upi && (
                                <>
                                  <TableCell align="left">
                                    <Typography id="payout5">
                                      UPI:{item?.upi}
                                    </Typography>
                                  </TableCell>
                                </>
                              )}
                              <TableCell align="left">{item?.amount}</TableCell>
                              {item?.status === "approved" && (
                                <>
                                  <TableCell align="left">
                                    <Typography id="payout1">
                                      APPROVED
                                    </Typography>
                                  </TableCell>
                                </>
                              )}
                              {item?.status === "pending" && (
                                <>
                                  <TableCell align="left">
                                    <Typography id="payout14">
                                      PENDING
                                    </Typography>
                                  </TableCell>
                                </>
                              )}
                              {item?.status === "rejected" && (
                                <>
                                  <TableCell align="left">
                                    <Typography id="payout15">
                                      REJECTED
                                    </Typography>
                                  </TableCell>
                                </>
                              )}

                              {/* {item?.status === "rejected" && "REJECTED"}
                                {item?.status === "pending" && "PENDING"} */}
                              {/* <TableCell align="left">
                        <Typography id="payout6">NETBANK : 0812204740</Typography>
                      </TableCell> */}
                              <TableCell align="left">
                                {item?.reference_id}
                              </TableCell>
                              <TableCell align="left">{item?.date}</TableCell>
                              <TableCell align="left">
                                <a
                                  href={item?.picture?.url}
                                  id="payout12"
                                  target="_blank"
                                >
                                  <Button variant="contained" id="payout2">
                                    RECIEPT
                                  </Button>
                                </a>
                              </TableCell>
                            </TableRow>
                          ))}
                      </TableBody>
                    </Table>
                  </>
                )}
              </div>
              <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={getAllPayout.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </TableContainer>
          </>
        )}
      </>
    );
  };

  const BottomNavPayout = () => {
    return (
      <>
        {/* <Box id="payout17" > */}
        <Typography paragraph id="payout17" sx={{ display: { sm: "none" } }}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={12}>
              {!payoutPageLoader ? (
                <div id="payout25">
                  <Grid container rowSpacing={1} columnSpacing={{ xs: 1 }}>
                    <Grid
                      item
                      xs={4}
                      id="payout26"
                      onClick={() => setAllStatus("all")}
                    >
                      <Typography
                        id="payout27"
                        sx={
                          allStatus === "all"
                            ? { backgroundColor: "#4c89d8" }
                            : null
                        }
                      >
                        ALL
                      </Typography>
                    </Grid>
                    <Grid
                      item
                      xs={4}
                      id="payout26"
                      onClick={() => {
                        setAllStatus("approved");
                        GetPayoutByStatusFunction("approved");
                      }}
                    >
                      <Typography
                        id="payout27"
                        sx={
                          allStatus === "approved"
                            ? { backgroundColor: "#4c89d8" }
                            : null
                        }
                      >
                        APPROVED
                      </Typography>
                    </Grid>
                    <Grid
                      item
                      xs={4}
                      id="payout26"
                      onClick={() => {
                        setAllStatus("pending");
                        GetPayoutByStatusFunction("pending");
                      }}
                    >
                      <Typography
                        id="payout27"
                        sx={
                          allStatus === "pending"
                            ? { backgroundColor: "#4c89d8" }
                            : null
                        }
                      >
                        PENDING
                      </Typography>
                    </Grid>
                  </Grid>
                </div>
              ) : null}
            </Grid>
            {!payoutPageLoader ?<>  <Grid item xs={12}>
              {/* <Grid container>
                <Grid item xs={7}></Grid>
                      <Grid item xs={5} id="payout29" onClick={handleOpen}>
                      <AddIcon id="payout30"/>
                        <Button >Add Payment</Button>
                      </Grid>
              </Grid> */}
            </Grid></> : null}

            <Grid item xs={12}>
              <>
              {!payoutPageLoader ? (
                <> {getAllPayout?.length === 0 && <div style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  minHeight: "60vh",
                  width: "100%",
                }}>No Result Found</div>}</>
              ) : null}
                {" "}
                {allStatus === "all" ? (
                  <>
                    {getAllPayout?.map((item,i) => (
                      <div id="payout16" key={i}>
                        <Grid
                          container
                          rowSpacing={1}
                          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                        >
                          <Grid item xs={9}>
                            {item?.reference_id ? item?.reference_id : "N/A"}
                          </Grid>

                          {item?.status === "approved" && (
                            <Grid item xs={3} id="payout18">
                              APPROVED
                            </Grid>
                          )}
                          {item?.status === "pending" && (
                            <Grid item xs={3} id="payout24">
                              PENDING
                            </Grid>
                          )}
                          {item?.status === "rejected" && (
                            <Grid item xs={3} id="payout23">
                              REJECTED
                            </Grid>
                          )}

                          <Grid item xs={3} id="payout19">
                            Channel:
                          </Grid>
                          <Grid item xs={9} id="payout20">
                            {item?.medium ? item?.medium : "N/A"}
                          </Grid>
                          {item?.name || item?.ifsc || item?.accountNumber ? (
                            <>
                              <Grid item xs={3} id="payout19">
                                BANK NAME:
                              </Grid>
                              <Grid item xs={9} id="payout20">
                                {item?.name}
                              </Grid>
                              <Grid item xs={3} id="payout19">
                                IFSC CODE:
                              </Grid>
                              <Grid item xs={9} id="payout20">
                                {item?.ifsc}
                              </Grid>
                              <Grid item xs={3} id="payout19">
                                ACCOUNT NUMBER:
                              </Grid>
                              <Grid item xs={9} id="payout20">
                                {item?.accountNumber}
                              </Grid>
                            </>
                          ) : null}
                          {item?.upi ? (
                            <>
                              <Grid item xs={3} id="payout19">
                                UPI :
                              </Grid>
                              <Grid item xs={9} id="payout20">
                                {item?.upi}
                              </Grid>
                            </>
                          ) : null}
                          <Grid item xs={3} id="payout22">
                            Amount :
                          </Grid>
                          <Grid item xs={9} id="payout21">
                            {item?.amount ? item?.amount : "N/A"}
                          </Grid>
                          <Grid item xs={3} id="payout19">
                            Created :
                          </Grid>
                          <Grid item xs={9} id="payout20">
                            {item?.date ? item?.date : "N/A"}
                          </Grid>
                          <Grid item xs={12} id="payout19">
                            Actions
                          </Grid>
                          <Grid item xs={4}>
                            <Button
                              variant="contained"
                              color="secondary"
                              target="_blank"
                              href={item?.picture?.url}
                            >
                              RECIEPT
                            </Button>
                          </Grid>
                        </Grid>
                      </div>
                    ))}
                  </>
                ) : null}
                <>
                  {statusLoader ? (
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        minHeight: "60vh",
                        width: "100%",
                      }}
                    >
                      {" "}
                      <CircularProgress />
                    </div>
                  ) : (
                    <>
                      {" "}
                      {!payoutPageLoader ? (
                <> {getAllPayout?.length === 0 && <div style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  minHeight: "60vh",
                  width: "100%",
                }}>No Result Found</div>}</>
              ) : null}

                      {payoutStatus?.map((item, i) => (
                        <div id="payout16" key={i}>
                          <Grid
                            container
                            rowSpacing={1}
                            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                          >
                            <Grid item xs={9}>
                              {item?.reference_id ? item?.reference_id : "N/A"}
                            </Grid>

                            {item?.status === "approved" && (
                              <Grid item xs={3} id="payout18">
                                APPROVED
                              </Grid>
                            )}
                            {item?.status === "pending" && (
                              <Grid item xs={3} id="payout24">
                                PENDING
                              </Grid>
                            )}
                            {item?.status === "rejected" && (
                              <Grid item xs={3} id="payout23">
                                REJECTED
                              </Grid>
                            )}

                            <Grid item xs={3} id="payout19">
                              Channel:
                            </Grid>
                            <Grid item xs={9} id="payout20">
                              {item?.medium ? item?.medium : "N/A"}
                            </Grid>
                            {item?.name || item?.ifsc || item?.accountNumber ? (
                              <>
                                <Grid item xs={3} id="payout19">
                                  BANK NAME:
                                </Grid>
                                <Grid item xs={9} id="payout20">
                                  {item?.name}
                                </Grid>
                                <Grid item xs={3} id="payout19">
                                  IFSC CODE:
                                </Grid>
                                <Grid item xs={9} id="payout20">
                                  {item?.ifsc}
                                </Grid>
                                <Grid item xs={3} id="payout19">
                                  ACCOUNT NUMBER:
                                </Grid>
                                <Grid item xs={9} id="payout20">
                                  {item?.accountNumber}
                                </Grid>
                              </>
                            ) : null}
                            {item?.upi ? (
                              <>
                                <Grid item xs={3} id="payout19">
                                  UPI :
                                </Grid>
                                <Grid item xs={9} id="payout20">
                                  {item?.upi}
                                </Grid>
                              </>
                            ) : null}
                            <Grid item xs={3} id="payout22">
                              Amount :
                            </Grid>
                            <Grid item xs={9} id="payout21">
                              {item?.amount ? item?.amount : "N/A"}
                            </Grid>
                            <Grid item xs={3} id="payout19">
                              Created :
                            </Grid>
                            <Grid item xs={9} id="payout20">
                              {item?.date ? item?.date : "N/A"}
                            </Grid>
                            <Grid item xs={12} id="payout19">
                              Actions
                            </Grid>
                            <Grid item xs={4}>
                              <Button
                                variant="contained"
                                color="secondary"
                                target="_blank"
                                href={item?.picture?.url}
                              >
                                RECIEPT
                              </Button>
                            </Grid>
                          </Grid>
                        </div>
                      ))}
                    </>
                  )}
                </>
              </>
            </Grid>
          </Grid>
        </Typography>
        {/* </Box> */}
      </>
    );
  };

  return (
    <>
      <PayoutSmall />
      <BottomNavPayout />
    </>
  );
}
