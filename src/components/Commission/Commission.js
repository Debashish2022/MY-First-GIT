import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import "./Commission.css";
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
import { getResellerToken, getResellerId } from "../../redux/Slice/userSlice";
import { toast } from "react-toastify";
import { Box } from "@mui/system";
import { drawerWidth } from "../../pages/Dashboard/Dashboard";

export default function Commission() {
  useEffect(() => {
    getCommission();
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

  const Token = useSelector(getResellerToken);
  const userId = useSelector(getResellerId);

  const [allCommission, setallCommission] = useState([]);
  const [filterVal, setFilterVal] = useState("");
  const [orderIdFilterData, setOrderIdFilterData] = useState([]);
  const [amountFilterData, setAmountFilterData] = useState([]);
  const [amountVal, setAmountVal] = useState("");
  const [commissionloader, setcommissionloader] = useState(true);
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

  const getCommission = async () => {
    await apicaller(`commission/get?id=${userId}`, null, "get", Token)
      .then((res) => {
        // console.log("payin response....", res.data.result);
        setallCommission(res?.data?.result);
        setOrderIdFilterData(res?.data?.result);
        setAmountFilterData(res?.data?.result);
      })
      .catch((error) => {
        eToast("NetWork Error");
      })
      .finally(() => {
        setcommissionloader(false);
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
        eToast("Network Error");
      })
      .finally(() => {
        setStatusLoader(false);
      });
  };

  const CommissionApproval = async (id) => {
    if (window.confirm("Are You Sure Want To Approve ?")) {
      setApproveButtonLoader(id);
      const data = {
        _id: id,
        status: "approved",
      };

      await apicaller(`commission/update`, data, "put", Token)
        .then((res) => {
          if (res.status === 201 || res.status === 200) {
            sToast("Payment Approved Successfully");
          }
        })
        .catch((error) => {
          eToast("Sorry Could Not Approved");
        })
        .finally(() => {
          getCommission();
          setApproveButtonLoader();
        });
    }
  };

  const rejectCommission = async (id) => {
    if (window.confirm("Are You Sure Want To Reject ?")) {
      setRejectButtonLoader(id);
      const data = {
        _id: id,
        status: "rejected",
      };
      await apicaller(`commission/update`, data, "put", Token)
        .then((res) => {
          if (res.status === 201 || res.status === 200) {
            sToast("Payment Rejected Successfully");
          }
        })
        .catch((error) => {
          eToast("Sorry Could Not Rejected");
        })
        .finally(() => {
          getCommission();
          setRejectButtonLoader();
        });
    }
  };

  const orderidFilter = (e) => {
    setFilterVal(e.target.value);
    if (e.target.value === "") {
      setallCommission(orderIdFilterData);
    } else {
      const orderResult = orderIdFilterData.filter((item) =>
        item?.medium.toLowerCase().includes(e.target.value.toLowerCase())
      );
      // console.log("orderresult....", orderResult);
      setallCommission(orderResult);
    }
  };
  //order id searchbar function end

  // order id searchbar function start
  const statusFilterFunction = (e) => {
    setStatusFilter(e.target.value);
    if (e.target.value === "") {
      setallCommission(amountFilterData);
    } else {
      const status = amountFilterData.filter((item) =>
        item?.status.toLowerCase().includes(e.target.value.toLowerCase())
      );
      // console.log("orderresult....", orderResult);
      setallCommission(status);
    }
  };
  //order id searchbar function end

  // order id searchbar function start
  const dateStatusFilter = (e) => {
    setDateFilterValue(e.target.value);
    if (e.target.value === "") {
      setallCommission(amountFilterData);
    } else {
      const status = amountFilterData.filter((item) =>
        item?.date.toLowerCase().includes(e.target.value.toLowerCase())
      );
      // console.log("orderresult....", orderResult);
      setallCommission(status);
    }
  };

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

  const CommissionChild = () => {
    return (
      <>
        {commissionloader ? (
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
            <CircularProgress sx={{ marginLeft: { xs: '1.8rem', sm: "0rem" } }} />
          </div>
        ) : (
          <>
            <TableContainer
              component={Paper}
              id="commission5"
              // sx={{ display: { xs: "none", sm: "block" } }}
            >
              <Grid container spacing={2} id="commission6">

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

              </Grid>
              <div id="commission10">
                {allCommission?.length === 0 && (
                  <div id="commission11">No Result Found</div>
                )}
                {allCommission?.length !== 0 && (
                  <>
                    {" "}
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell align="left" id="commission4">
                            Sl No.
                          </TableCell>
                          <TableCell align="left" id="commission4">
                            Amount{" "}
                          </TableCell>
                          <TableCell align="left" id="commission4">
                            Status{" "}
                          </TableCell>
                          <TableCell align="left" id="commission4">
                            Reference Id{" "}
                          </TableCell>
                          <TableCell align="left" id="commission4">
                            Create Time{" "}
                          </TableCell>
                          <TableCell align="left" id="commission4">
                            Actions
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>

                        {allCommission
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
                    <AddCircleIcon id="commission1" />
                  </TableCell> */}
                              {/* <TableCell align="left">{item?.order_id}</TableCell> */}
                              <TableCell align="left">
                                {page * 10 + i + 1}
                              </TableCell>

                              {/* <TableCell align="left">netranandasahu47@axl</TableCell> */}




                              <TableCell align="left">
                                {item?.amount ? item?.amount : "N/A"}
                              </TableCell>



                              {item?.status === "approved" && (
                                <>
                                  {" "}



                                  <TableCell align="left">
                                    <Typography id="commission21">
                                      APPROVED
                                    </Typography>
                                  </TableCell>
                                </>
                              )}
                              {item?.status === "paid" && (
                                <>
                                  {" "}


                                  <TableCell align="left">
                                    <Typography id="commission22">
                                      PAID
                                    </Typography>
                                  </TableCell>
                                </>
                              )}
                              {item?.status === "rejected" && (
                                <>
                                  {" "}
                                  <TableCell align="left">
                                    <Typography id="commission23">REJECT</Typography>
                                  </TableCell>
                                </>
                              )}
                              <TableCell align="left">
                                {item?.reference_id
                                  ? item?.reference_id
                                  : "N/A"}
                              </TableCell>
                              <TableCell align="left">
                                {item?.createdAt
                                  ? item?.createdAt.slice(0, 10)
                                  : "N/A"}
                              </TableCell>
                              {/* <TableCell align="left">
                                {" "}
                                <a
                                  href={item?.picture?.url}
                                  id="payout12"
                                  target="_blank"
                                >
                                  <Button variant="contained" id="commission8">
                                    Receipt
                                  </Button>
                                </a>
                              </TableCell> */}
                              <TableCell align="left">
                                {item?.status === "approved" ||
                                  item?.status === "rejected" ? (
                                  <Button
                                    variant="contained"
                                    id="commission3"
                                    disabled
                                  >
                                    APPROVE
                                  </Button>
                                ) : null}
                                {item?.status === "paid" && (
                                  <Button
                                    variant="contained"
                                    id="commission3"
                                    onClick={() => CommissionApproval(item?._id)}
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
                                {item?.status === "paid" && (
                                  <Button
                                    variant="contained"
                                    id="commission3"
                                    color="error"
                                    onClick={() => rejectCommission(item?._id)}
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
                                    id="commission3"
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
                count={allCommission.length}
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
        {/* <Box id="commission15" > */}
        <Typography paragraph id="commission15" sx={{ display: { sm: "none" } }}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={12}>
              {!commissionloader ? (
                <div id="commission26">
                  <Grid container rowSpacing={1} columnSpacing={{ xs: 1 }}>
                    <Grid
                      item
                      xs={4}
                      id="commission27"
                      onClick={() => setAllStatus("all")}
                    >
                      <Typography
                        id="commission28"
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
                      id="commission27"
                      onClick={() => {
                        setAllStatus("approved");
                        GetPayinByStatusFunction("approved");
                      }}
                    >
                      <Typography
                        id="commission28"
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
                      id="commission27"
                      onClick={() => {
                        setAllStatus("pending");
                        GetPayinByStatusFunction("pending");
                      }}
                    >
                      <Typography
                        id="commission28"
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
              {!commissionloader ? (
                <> {allCommission?.length === 0 && <div style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  minHeight: "60vh",
                  width: "100%",
                }}>No Result Found</div>}</>
              ) : null}
              {allStatus === "all" ? (
                <>
                  {allCommission?.map((item) => (
                    <div id="commission13">
                      <Grid
                        container
                        rowSpacing={1}
                        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                      >
                        <Grid item xs={9}>
                          {item?.reference_id ? item?.reference_id : "N/A"}
                        </Grid>

                        {item?.status === "approved" && (
                          <Grid item xs={3} id="commission16">
                            APPROVED
                          </Grid>
                        )}
                        {item?.status === "pending" && (
                          <Grid item xs={3} id="commission24">
                            PENDING
                          </Grid>
                        )}
                        {item?.status === "rejected" && (
                          <Grid item xs={3} id="commission25">
                            REJECTED
                          </Grid>
                        )}

                       
                       
                      
                        <Grid item xs={3} id="commission20">
                          Amount :
                        </Grid>
                        <Grid item xs={9} id="commission19">
                          {item?.amount ? item?.amount : "N/A"}
                        </Grid>
                        <Grid item xs={3} id="commission17">
                          Created :
                        </Grid>
                        <Grid item xs={9} id="commission18">
                          {item?.date ? item?.date : "N/A"}
                        </Grid>
                        <Grid item xs={12} id="commission17">
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
                              onClick={() => CommissionApproval(item?._id)}
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
                              onClick={() => rejectCommission(item?._id)}
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
                        {!commissionloader ? (
                          <> {allCommission?.length === 0 && <div style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            minHeight: "60vh",
                            width: "100%",
                          }}>No Result Found</div>}</>
                        ) : null}
                        {payinStatus?.map((item,i) => (
                          <div id="commission13" key={i}>
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
                                <Grid item xs={3} id="commission16">
                                  APPROVED
                                </Grid>
                              )}
                              {item?.status === "pending" && (
                                <Grid item xs={3} id="commission24">
                                  PENDING
                                </Grid>
                              )}
                              {item?.status === "rejected" && (
                                <Grid item xs={3} id="commission25">
                                  REJECTED
                                </Grid>
                              )}

                              <Grid item xs={3} id="commission17">
                                Channel:
                              </Grid>
                              <Grid item xs={9} id="commission18">
                                {item?.medium ? item?.medium : "N/A"}
                              </Grid>
                  
                        
                              <Grid item xs={3} id="commission20">
                                Amount :
                              </Grid>
                              <Grid item xs={9} id="commission19">
                                {item?.amount ? item?.amount : "N/A"}
                              </Grid>
                              <Grid item xs={3} id="commission17">
                                Created :
                              </Grid>
                              <Grid item xs={9} id="commission18">
                                {item?.date ? item?.date : "N/A"}
                              </Grid>
                              <Grid item xs={12} id="commission17">
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
                                    APPROVED
                                  </Button>
                                </Grid>
                              ) : null}

                              {item?.status === "pending" ? (
                                <Grid item xs={4}>
                                  <Button
                                    variant="contained"
                                    onClick={() => CommissionApproval(item?._id)}
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
                                    onClick={() => rejectCommission(item?._id)}
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
      <CommissionChild />
    </>
  );
}
