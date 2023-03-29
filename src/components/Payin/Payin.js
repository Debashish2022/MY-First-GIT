import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import "./Payin.css";
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
import { apicaller } from "../../utils/api";
import { useSelector } from "react-redux";
import { getId, getToken } from "../../redux/Slice/userSlice";
import { toast } from "react-toastify";
import { Box } from "@mui/system";
import { drawerWidth } from "../../pages/Dashboard/Dashboard";

export default function Payin() {
  useEffect(() => {
    getPayin();
  }, []);

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

  const Token = useSelector(getToken);
  const userId = useSelector(getId);

  const [getAllPayin, setGetAllPayin] = useState([]);
  const [filterVal, setFilterVal] = useState("");
  const [orderIdFilterData, setOrderIdFilterData] = useState([]);
  const [amountFilterData, setAmountFilterData] = useState([]);
  const [amountVal, setAmountVal] = useState("");
  const [payinPageLoader, setPayinPageLoader] = useState(true);
  const [open, setOpen] = useState(false);
  // const [image, setImage] = useState();
  const [approveButtonLoader, setApproveButtonLoader] = useState();
  const [statusFilter, setStatusFilter] = useState("");
  const [dateFilterValue, setDateFilterValue] = useState("");
  const [rejectButtonLoader, setRejectButtonLoader] = useState();
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page, setPage] = useState(0);
  const [allStatus, setAllStatus] = useState("all");
  const [payinStatus, setPayinStatus] = useState([]);
  const [statusLoader, setStatusLoader] = useState(false);

  // console.log("image link...", image);

  // api intergration start

  const getPayin = async () => {
    await apicaller(`payment/payin/${userId}`, null, "get", Token)
      .then((res) => {
        // console.log("payin response....", res.data.result);
        setGetAllPayin(res?.data?.result);
        setOrderIdFilterData(res?.data?.result);
        setAmountFilterData(res?.data?.result);
      })
      .catch((error) => {
        eToast(error.response.data.response.message);
      })
      .finally(() => {
        setPayinPageLoader(false);
      });
  };

  const GetPayinByStatusFunction = async (status) => {
    setStatusLoader(true);
    await apicaller(
      `payment/payin-status/${userId}?status=${status}`,
      null,
      "get",
      Token
    )
      .then((res) => {
        setPayinStatus(res?.data?.result);
      })
      .catch((error) => {
        eToast(error?.response?.data?.response?.message);
      })
      .finally(() => {
        setStatusLoader(false);
      });
  };

  // api intergration end

  // APPROVAL FUNCTION START
  const PayinApproval = async (id) => {
    if (window.confirm("Are You Sure Want To Approve ?")) {
      setApproveButtonLoader(id);
      const data = {
        status: "approved",
      };
      // console.log('payapproval id.....', id);
      await apicaller(`payment/verification/${id}`, data, "put", Token)
        .then((res) => {
          if (res.status === 201 || res.status === 200) {
            sToast("Payment Approved Successfully");
          }
        })
        .catch((error) => {
          eToast(error?.response?.data?.response?.message);
        })
        .finally(() => {
          getPayin();
          setApproveButtonLoader();
        });
    }
  };

  // APPROVAL FUNCTION END

  const rejectPayment = async (id) => {
    if (window.confirm("Are You Sure Want To Reject ?")) {
      setRejectButtonLoader(id);
      const data = {
        status: "rejected",
      };
      // console.log('payapproval id.....', id);
      await apicaller(`payment/verification/${id}`, data, "put", Token)
        .then((res) => {
          if (res.status === 201 || res.status === 200) {
            sToast("Payment Rejected Successfully");
          }
        })
        .catch((error) => {
          eToast(error?.response?.data?.response?.message);
        })
        .finally(() => {
          getPayin();
          setRejectButtonLoader();
        });
    }
  };

  // order id searchbar function start
  const orderidFilter = (e) => {
    setFilterVal(e.target.value);
    if (e.target.value === "") {
      setGetAllPayin(orderIdFilterData);
    } else {
      const orderResult = orderIdFilterData.filter((item) =>
        item?.medium.toLowerCase().includes(e.target.value.toLowerCase())
      );
      // console.log("orderresult....", orderResult);
      setGetAllPayin(orderResult);
    }
  };
  //order id searchbar function end

  // order id searchbar function start
  const statusFilterFunction = (e) => {
    setStatusFilter(e.target.value);
    if (e.target.value === "") {
      setGetAllPayin(amountFilterData);
    } else {
      const status = amountFilterData.filter((item) =>
        item?.status.toLowerCase().includes(e.target.value.toLowerCase())
      );
      // console.log("orderresult....", orderResult);
      setGetAllPayin(status);
    }
  };
  //order id searchbar function end

  // order id searchbar function start
  const dateStatusFilter = (e) => {
    setDateFilterValue(e.target.value);
    if (e.target.value === "") {
      setGetAllPayin(amountFilterData);
    } else {
      const status = amountFilterData.filter((item) =>
        item?.date.toLowerCase().includes(e.target.value.toLowerCase())
      );
      // console.log("orderresult....", orderResult);
      setGetAllPayin(status);
    }
  };
  //order id searchbar function end

  // order id searchbar function start
  const amountFilter = (e) => {
    setAmountVal(e.target.value);
    if (e.target.value === "") {
      setGetAllPayin(amountFilterData);
    } else {
      const amountResult = amountFilterData.filter((item) =>
        item?.amount.toLowerCase().includes(e.target.value.toLowerCase())
      );
      // console.log("amount filter", amountResult);
      setGetAllPayin(amountResult);
    }
  };
  //order id searchbar function end

  // modal open close function start

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  // modal open close function end

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const PayinSmall = () => {
    return (
      <>
        {payinPageLoader ? (
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
            <CircularProgress sx={{ marginLeft: {xs:'1.8rem', sm: "0rem"}}} />
          </div>
        ) : (
          <>
            <TableContainer
              component={Paper}
              id="payin5"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              <Grid container spacing={2} id="payin6">
                <Grid item md={2} lg={2}>
                  <TextField
                    id="filled-basic"
                    label="Channel"
                    variant="standard"
                    value={filterVal}
                    onChange={(e) => orderidFilter(e)}
                  />
                </Grid>
                {/* <Grid item md={2} lg={2}>
                <TextField
                  id="filled-basic"
                  label="Amount"
                  variant="standard"
                  value={amountVal}
                  onChange={(e) => amountFilter(e)}
                />
              </Grid> */}
                <Grid item md={2} lg={2}>
                  <FormControl variant="standard" sx={{ minWidth: 150 }}>
                    <InputLabel id="demo-simple-select-standard-label">
                      Status
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-standard-label"
                      id="demo-simple-select-standard"
                      value={statusFilter}
                      onChange={(e) => statusFilterFunction(e)}
                      label="Age"
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
                {/* <Grid item md={2} lg={2}>
                <TextField
                  id="filled-basic"
                  variant="standard"
                  type='date'
                  format="MM/dd/yyyy"
                  value={dateFilterValue}
                  onChange={(e)=>dateStatusFilter(e)}
                />
              </Grid> */}
              </Grid>
              <div id="payin10">
                {getAllPayin?.length === 0 && (
                  <div id="payin11">No Result Found</div>
                )}
                {getAllPayin?.length !== 0 && (
                  <>
                    {" "}
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          {/* <TableCell></TableCell> */}
                          {/* <TableCell align="left" id="payin4">
                  Order Id
                </TableCell> */}
                          <TableCell align="left" id="payin4">
                            Sl No.
                          </TableCell>
                          <TableCell align="left" id="payin4">
                            Channel
                          </TableCell>
                          <TableCell align="left" id="payin4">
                            Card
                          </TableCell>
                          <TableCell align="left" id="payin4">
                            Amount{" "}
                          </TableCell>
                          <TableCell align="left" id="payin4">
                            Status{" "}
                          </TableCell>
                          <TableCell align="left" id="payin4">
                            Reference Id{" "}
                          </TableCell>
                          <TableCell align="left" id="payin4">
                            Create Time{" "}
                          </TableCell>
                          <TableCell align="left" id="payin4">
                            Payment Receipt
                          </TableCell>
                          <TableCell align="left" id="payin4">
                            Actions
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {/* <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center">
                  <AddCircleIcon id="payin1" />
                </TableCell>
                <TableCell align="left">16746288120192144804</TableCell>
                <TableCell align="left">UPI</TableCell>
                <TableCell align="left">netranandasahu47@axl</TableCell>
                <TableCell align="left">5000.00</TableCell>
                <TableCell align="left" id="payin2">
                  APPROVED
                </TableCell>
                <TableCell align="left">302520801095</TableCell>
                <TableCell align="left">2023-01-25 12:10:12</TableCell>
                <TableCell align="left">
                  <Button variant="contained" id="payin3">
                    APPROVAL
                  </Button>
                </TableCell>
              </TableRow> */}

                        {getAllPayin
                          ?.slice(
                            page * rowsPerPage,
                            page * rowsPerPage + rowsPerPage
                          )
                          .reverse()
                          .map((item, i) => (
                            <TableRow
                              sx={{
                                "&:last-child td, &:last-child th": {
                                  border: 0,
                                },
                              }}
                            >
                              {/* <TableCell align="center">
                    <AddCircleIcon id="payin1" />
                  </TableCell> */}
                              {/* <TableCell align="left">{item?.order_id}</TableCell> */}
                              <TableCell align="left">
                                {page * 10 + i + 1}
                              </TableCell>

                              <TableCell align="left">
                                {item?.medium ? item?.medium : "N/A"}
                              </TableCell>
                              {/* <TableCell align="left">netranandasahu47@axl</TableCell> */}
                              {item?.name ||
                              item?.ifsc ||
                              item?.accountNumber ? (
                                <>
                                  {" "}
                                  <TableCell align="left">
                                    <Typography id="payin9">
                                      BANK NAME:{item?.name}
                                    </Typography>
                                    <Typography id="payin9">
                                      IFSC CODE:{item?.ifsc}
                                    </Typography>
                                    <Typography id="payin9">
                                      ACCOUNT NUMBER:{item?.accountNumber}
                                    </Typography>
                                  </TableCell>
                                </>
                              ) : null}
                              {item?.upi && (
                                <>
                                  <TableCell align="left">
                                    <Typography id="payin9">
                                      UPI:{item?.upi}
                                    </Typography>
                                  </TableCell>
                                </>
                              )}
                              <TableCell align="left">
                                {item?.amount ? item?.amount : "N/A"}
                              </TableCell>
                              {item?.status === "approved" && (
                                <>
                                  {" "}
                                  <TableCell align="left">
                                    <Typography id="payin21">
                                      APPROVED
                                    </Typography>
                                  </TableCell>
                                </>
                              )}
                              {item?.status === "pending" && (
                                <>
                                  {" "}
                                  <TableCell align="left">
                                    <Typography id="payin22">
                                      PENDING
                                    </Typography>
                                  </TableCell>
                                </>
                              )}
                              {item?.status === "rejected" && (
                                <>
                                  {" "}
                                  <TableCell align="left">
                                    <Typography id="payin23">REJECT</Typography>
                                  </TableCell>
                                </>
                              )}
                              <TableCell align="left">
                                {item?.reference_id
                                  ? item?.reference_id
                                  : "N/A"}
                              </TableCell>
                              <TableCell align="left">
                                {item?.date ? item?.date : "N/A"}
                              </TableCell>
                              <TableCell align="left">
                                {" "}
                                <a
                                  href={item?.picture?.url}
                                  id="payout12"
                                  target="_blank"
                                >
                                  <Button variant="contained" id="payin8">
                                    Receipt
                                  </Button>
                                </a>
                              </TableCell>
                              <TableCell align="left">
                                {item?.status === "approved" ||
                                item?.status === "rejected" ? (
                                  <Button
                                    variant="contained"
                                    id="payin3"
                                    disabled
                                  >
                                    APPROVE
                                  </Button>
                                ) : null}
                                {item?.status === "pending" && (
                                  <Button
                                    variant="contained"
                                    id="payin3"
                                    onClick={() => PayinApproval(item?._id)}
                                  >
                                    {item?._id === approveButtonLoader ? (
                                      <CircularProgress
                                        sx={{ color: "white" }}
                                        size="1rem"
                                      />
                                    ) : (
                                      "APPROVE"
                                    )}
                                  </Button>
                                )}
                              </TableCell>
                              <TableCell align="left">
                                {item?.status === "pending" && (
                                  <Button
                                    variant="contained"
                                    id="payin3"
                                    color="error"
                                    onClick={() => rejectPayment(item?._id)}
                                  >
                                    {item?._id === rejectButtonLoader ? (
                                      <CircularProgress
                                        sx={{ color: "white" }}
                                        size="1rem"
                                      />
                                    ) : (
                                      "REJECT"
                                    )}
                                  </Button>
                                )}
                                {item?.status === "approved" ||
                                item?.status === "rejected" ? (
                                  <Button
                                    variant="contained"
                                    id="payin3"
                                    disabled
                                  >
                                    REJECT
                                  </Button>
                                ) : null}
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
                count={getAllPayin.length}
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

  const BottomNavPayin = () => {
    return (
      <>
        {/* <Box id="payin15" > */}
        <Typography paragraph id="payin15" sx={{ display: { sm: "none" } }}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={12}>
              {!payinPageLoader ? (
                <div id="payin26">
                  <Grid container rowSpacing={1} columnSpacing={{ xs: 1 }}>
                    <Grid
                      item
                      xs={4}
                      id="payin27"
                      onClick={() => setAllStatus("all")}
                    >
                      <Typography
                        id="payin28"
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
                      id="payin27"
                      onClick={() => {
                        setAllStatus("approved");
                        GetPayinByStatusFunction("approved");
                      }}
                    >
                      <Typography
                        id="payin28"
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
                      id="payin27"
                      onClick={() => {
                        setAllStatus("pending");
                        GetPayinByStatusFunction("pending");
                      }}
                    >
                      <Typography
                        id="payin28"
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
              {!payinPageLoader ? (
                <> {getAllPayin?.length === 0 && <div style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  minHeight: "60vh",
                  width: "100%",
                }}>No Result Found</div>}</>
              ) : null}
              {allStatus === "all" ? (
                <>
                  {getAllPayin?.map((item, i) => (
                    <div id="payin13" key={i}>
                      <Grid
                        container
                        rowSpacing={1}
                        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                      >
                        <Grid item xs={9}>
                          {item?.reference_id ? item?.reference_id : "N/A"}
                        </Grid>

                        {item?.status === "approved" && (
                          <Grid item xs={3} id="payin16">
                            APPROVED
                          </Grid>
                        )}
                        {item?.status === "pending" && (
                          <Grid item xs={3} id="payin24">
                            PENDING
                          </Grid>
                        )}
                        {item?.status === "rejected" && (
                          <Grid item xs={3} id="payin25">
                            REJECTED
                          </Grid>
                        )}

                        <Grid item xs={3} id="payin17">
                          Channel:
                        </Grid>
                        <Grid item xs={9} id="payin18">
                          {item?.medium ? item?.medium : "N/A"}
                        </Grid>
                        {item?.name || item?.ifsc || item?.accountNumber ? (
                          <>
                            <Grid item xs={3} id="payin17">
                              BANK NAME:
                            </Grid>
                            <Grid item xs={9} id="payin18">
                              {item?.name}
                            </Grid>
                            <Grid item xs={3} id="payin17">
                              IFSC CODE:
                            </Grid>
                            <Grid item xs={9} id="payin18">
                              {item?.ifsc}
                            </Grid>
                            <Grid item xs={3} id="payin17">
                              ACCOUNT NUMBER:
                            </Grid>
                            <Grid item xs={9} id="payin18">
                              {item?.accountNumber}
                            </Grid>
                          </>
                        ) : null}
                        {item?.upi ? (
                          <>
                            <Grid item xs={3} id="payin17">
                              UPI :
                            </Grid>
                            <Grid item xs={9} id="payin18">
                              {item?.upi}
                            </Grid>
                          </>
                        ) : null}
                        <Grid item xs={3} id="payin20">
                          Amount :
                        </Grid>
                        <Grid item xs={9} id="payin19">
                          {item?.amount ? item?.amount : "N/A"}
                        </Grid>
                        <Grid item xs={3} id="payin17">
                          Created :
                        </Grid>
                        <Grid item xs={9} id="payin18">
                          {item?.date ? item?.date : "N/A"}
                        </Grid>
                        <Grid item xs={12} id="payin17">
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
                        {item?.status === "approved" ||
                        item?.status === "rejected" ? (
                          <Grid item xs={4}>
                            <Button variant="contained" disabled>
                              APPROVE
                            </Button>
                          </Grid>
                        ) : null}

                        {item?.status === "pending" ? (
                          <Grid item xs={4}>
                            <Button
                              variant="contained"
                              onClick={() => PayinApproval(item?._id)}
                            >
                              {item?._id === approveButtonLoader ? (
                                <CircularProgress
                                  sx={{ color: "white" }}
                                  size="1rem"
                                />
                              ) : (
                                "APPROVE"
                              )}
                            </Button>
                          </Grid>
                        ) : null}
                        {item?.status === "pending" ? (
                          <Grid item xs={4}>
                            <Button
                              variant="contained"
                              color="error"
                              onClick={() => rejectPayment(item?._id)}
                            >
                              {item?._id === rejectButtonLoader ? (
                                <CircularProgress
                                  sx={{ color: "white" }}
                                  size="1rem"
                                />
                              ) : (
                                "REJECT"
                              )}
                            </Button>
                          </Grid>
                        ) : null}
                        {item?.status === "approved" ||
                        item?.status === "rejected" ? (
                          <Grid item xs={4}>
                            <Button variant="contained" disabled>
                              REJECT
                            </Button>
                          </Grid>
                        ) : null}
                      </Grid>
                    </div>
                  ))}
                </>
              ) : null}
              <>
                {" "}
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
                    {allStatus === "approved" || allStatus === "pending" ? (
                      <>
                       {!payinPageLoader ? (
                <> {getAllPayin?.length === 0 && <div style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  minHeight: "60vh",
                  width: "100%",
                }}>No Result Found</div>}</>
              ) : null}
                        {payinStatus?.map((item) => (
                          <div id="payin13">
                            <Grid
                              container
                              rowSpacing={1}
                              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                            >
                              <Grid item xs={9}>
                                {item?.reference_id
                                  ? item?.reference_id
                                  : "N/A"}
                              </Grid>

                              {item?.status === "approved" && (
                                <Grid item xs={3} id="payin16">
                                  APPROVED
                                </Grid>
                              )}
                              {item?.status === "pending" && (
                                <Grid item xs={3} id="payin24">
                                  PENDING
                                </Grid>
                              )}
                              {item?.status === "rejected" && (
                                <Grid item xs={3} id="payin25">
                                  REJECTED
                                </Grid>
                              )}

                              <Grid item xs={3} id="payin17">
                                Channel:
                              </Grid>
                              <Grid item xs={9} id="payin18">
                                {item?.medium ? item?.medium : "N/A"}
                              </Grid>
                              {item?.name ||
                              item?.ifsc ||
                              item?.accountNumber ? (
                                <>
                                  <Grid item xs={3} id="payin17">
                                    BANK NAME:
                                  </Grid>
                                  <Grid item xs={9} id="payin18">
                                    {item?.name}
                                  </Grid>
                                  <Grid item xs={3} id="payin17">
                                    IFSC CODE:
                                  </Grid>
                                  <Grid item xs={9} id="payin18">
                                    {item?.ifsc}
                                  </Grid>
                                  <Grid item xs={3} id="payin17">
                                    ACCOUNT NUMBER:
                                  </Grid>
                                  <Grid item xs={9} id="payin18">
                                    {item?.accountNumber}
                                  </Grid>
                                </>
                              ) : null}
                              {item?.upi ? (
                                <>
                                  <Grid item xs={3} id="payin17">
                                    UPI :
                                  </Grid>
                                  <Grid item xs={9} id="payin18">
                                    {item?.upi}
                                  </Grid>
                                </>
                              ) : null}
                              <Grid item xs={3} id="payin20">
                                Amount :
                              </Grid>
                              <Grid item xs={9} id="payin19">
                                {item?.amount ? item?.amount : "N/A"}
                              </Grid>
                              <Grid item xs={3} id="payin17">
                                Created :
                              </Grid>
                              <Grid item xs={9} id="payin18">
                                {item?.date ? item?.date : "N/A"}
                              </Grid>
                              <Grid item xs={12} id="payin17">
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
                              {item?.status === "approved" ||
                              item?.status === "rejected" ? (
                                <Grid item xs={4}>
                                  <Button variant="contained" disabled>
                                    APPROVE
                                  </Button>
                                </Grid>
                              ) : null}

                              {item?.status === "pending" ? (
                                <Grid item xs={4}>
                                  <Button
                                    variant="contained"
                                    onClick={() => PayinApproval(item?._id)}
                                  >
                                    {item?._id === approveButtonLoader ? (
                                      <CircularProgress
                                        sx={{ color: "white" }}
                                        size="1rem"
                                      />
                                    ) : (
                                      "APPROVE"
                                    )}
                                  </Button>
                                </Grid>
                              ) : null}
                              {item?.status === "pending" ? (
                                <Grid item xs={4}>
                                  <Button
                                    variant="contained"
                                    color="error"
                                    onClick={() => rejectPayment(item?._id)}
                                  >
                                    {item?._id === rejectButtonLoader ? (
                                      <CircularProgress
                                        sx={{ color: "white" }}
                                        size="1rem"
                                      />
                                    ) : (
                                      "REJECT"
                                    )}
                                  </Button>
                                </Grid>
                              ) : null}
                              {item?.status === "approved" ||
                              item?.status === "rejected" ? (
                                <Grid item xs={4}>
                                  <Button variant="contained" disabled>
                                    REJECT
                                  </Button>
                                </Grid>
                              ) : null}
                            </Grid>
                          </div>
                        ))}
                      </>
                    ) : null}
                  </>
                )}{" "}
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
      <PayinSmall />
      <BottomNavPayin />
    </>
  );
}
