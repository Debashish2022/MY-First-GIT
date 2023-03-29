import React, { Fragment, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import {
  Card,
  CardContent,
  CircularProgress,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import "./AddPaymentModal.css";
import CloseIcon from "@mui/icons-material/Close";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import { getResellerId, getResellerToken } from "../../redux/Slice/userSlice";
import { useSelector } from "react-redux";
import { apicaller } from "../../utils/api";
import { toast } from "react-toastify";

export default function AddPaymentModal(props) {
  const userId = useSelector(getResellerId);
  const Token = useSelector(getResellerToken);

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
    getAdminDetails();
  }, []);

  const getAdminDetails = async () => {
    await apicaller("admin", null, "get", Token).then((res) => {
      // console.log(
      //   "admin detail in addpayment modal",
      //   res.data.result.data[0]._id
      // );
      setAdminID(res.data.result.data[0]._id);
      setAdminEmail(res.data.result.data[0].email);
      // console.log('Admin Email',res.data.result.data[0].email );
    });
  };

  const [adminID, setAdminID] = useState();
  const [adminEmail, setAdminEmail] = useState();
  const [chooseAdmin, setChooseAdmin] = useState("");
  // const [senderId, setSenderId] = useState(userId);
  const [receiverId, setReceiverId] = useState("");
  const [payoutAmount, setPayoutAmount] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [empty, setEmpty] = useState("");
  const [labImages, setLabImages] = useState([]);
  const [addPayoutLoader, setAddPayoutLoader] = useState(false);
  const [bankAccount, setBankAccount] = useState("");
  const [bankName, setBankName] = useState("");
  const [ifsc, setIfsc] = useState("");
  const [upiId, setUpiId] = useState("");
  const [date, setDate] = useState("");

  // console.log('admin id',adminID , 'adminEmail...' ,adminEmail);
  // console.log("receiver id iss..", receiverId, "choose admin", chooseAdmin);

  // const [enterAmount, setEnterAmount] = useState("");
  // const [transactionId, setTransactionId] = useState("");
  // const [paymentMethod, setPaymentMethod] = useState("");
  // const [selectPaymentId, setSelectPaymentId] = useState("");

  const onchangePaymentType = () => {
    // console.log("change happening...");
    setPayoutAmount("");
    setTransactionId("");
    setBankAccount("");
    setBankName("");
    setIfsc("");
    setUpiId("");
    setDate("");
    setEmpty("");
  };

  function validation() {
    if (chooseAdmin.length === 0) {
      eToast("Please Select Sent Amount To");
      return false;
    } else if (paymentMethod.length === 0) {
      eToast("Please Select Payment Method");
      return false;
    } else if (paymentMethod !== 0) {
      if (paymentMethod === "UPI") {
        if (payoutAmount.length === 0) {
          eToast("Please Enter Amount");
          return false;
        } else if (upiId.length === 0) {
          eToast("Please Enter Your Upi Id");
          return false;
        } else if (transactionId.length === 0) {
          eToast("Please Enter Transaction Id");
          return false;
        } else if (date.length === 0) {
          eToast("Please Enter Your Transaction Date");
          return false;
        } else if (empty.length === 0) {
          eToast("Please Attach a Image");
          return false;
        } else {
          return true;
        }
      } else if (paymentMethod === "NET BANKING") {
        if (payoutAmount.length === 0) {
          eToast("Please Enter Amount");
          return false;
        } else if (bankName.length === 0) {
          eToast("Please Enter Bank Name");
          return false;
        } else if (ifsc.length === 0) {
          eToast("Please Enter Your Ifsc Code");
          return false;
        } else if (bankAccount.length === 0) {
          eToast("Please Enter Your Bank Account Number");
          return false;
        } else if (transactionId.length === 0) {
          eToast("Please Enter Your Transaction Id");
          return false;
        } else if (date.length === 0) {
          eToast("Please Enter Your Transaction Date");
          return false;
        } else if (empty.length === 0) {
          eToast("Please Attach a Image");
          return false;
        } else {
          return true;
        }
      }
    }
  }

  const attachImage = (e) => {
    // console.log(e.target.files[0]);
    setLabImages(e.target.files[0]);
    setEmpty(e.target.value);
  };

  const AddNewPayment = async () => {
    if (validation()) {
      setAddPayoutLoader(true);
      var data = new FormData();
      data.append("medium", paymentMethod);
      data.append("recfile", labImages);
      data.append("amount", payoutAmount);
      data.append("reference_id", transactionId);
      data.append("accountNumber", bankAccount);
      data.append("name", bankName);
      data.append("ifsc", ifsc);
      data.append("upi", upiId);
      data.append("date", date);
      data.append("sender", userId);
      data.append("receiver", chooseAdmin);

      await apicaller("payment/add", data, "post", Token, "multipart/form-data")
        .then((res) => {
          if (res.status === 201 || res.status === 200) {
            sToast("New Payment Added Successfully");
            setChooseAdmin("");
            setReceiverId("");
            setPaymentMethod("");
            setPayoutAmount("");
            setTransactionId("");
            setBankAccount("");
            setBankName("");
            setIfsc("");
            setUpiId("");
            setDate("");
            setEmpty("");
          }
        })
        .catch((error) => {
          eToast('Sorry New Payment is Not Added');
        })
        .finally(() => {
          setAddPayoutLoader(false);
          props.handleClose();
        });
    }
  };

  return (
    <div>
      <Modal
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box id="AddPayment6">
          <Card id="AddPayment3">
            <CardContent>
              <Grid container spacing={2} id="AddPayment1">
                <Grid xs={10} sm={10} md={11} lg={11} item></Grid>
                <Grid
                  item
                  xs={2}
                  sm={2}
                  md={1}
                  lg={1}
                  onClick={props.handleClose}
                  id="AddPayment2"
                >
                  <CloseIcon />
                </Grid>
                <Grid xs={12} sm={12} md={6} lg={6} item>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Sent Amount To
                    </InputLabel>
                    <Select
                      style={{ height: "3rem" }}
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="Sent Amount To"
                      placeholder="Sent Amount To"
                      value={chooseAdmin}
                      onChange={(e) => setChooseAdmin(e.target.value)}
                    >
                      <MenuItem value={adminID}>{adminEmail}</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>

                {/* <Grid xs={12} sm={12} md={6} lg={6} item>
                  <TextField
                    fullWidth
                    required
                    id="outlined-required"
                    label="Sender Id"
                    placeholder="Sender Id"
                    defaultValue={senderId}
                    onChange={(e) => setSenderId(e.target.value)}
                    inputProps={{
                      style: {
                        height: "0.9rem",
                      },
                    }}
                  />
                </Grid> */}

                {/* <Grid xs={12} sm={12} md={6} lg={6} item>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Receiver Id
                    </InputLabel>
                    <Select
                      style={{ height: "3rem" }}
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="Receiver Id"
                      placeholder="Receiver Id"
                      value={receiverId}
                      onChange={(e) => setReceiverId(e.target.value)}
                    >
                      <MenuItem value={adminID}>{adminID}</MenuItem>
                    </Select>
                  </FormControl>
                </Grid> */}

                <Grid xs={12} sm={12} md={6} lg={6} item>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Payment method
                    </InputLabel>
                    <Select
                      style={{ height: "3rem" }}
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="Payment method"
                      placeholder="Payment method"
                      value={paymentMethod}
                      onChange={(e) => {
                        setPaymentMethod(e.target.value);
                        onchangePaymentType();
                      }}
                    >
                      <MenuItem value="NET BANKING">NET BANKING</MenuItem>
                      <MenuItem value="UPI">UPI</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>

                <Grid xs={12} sm={12} md={6} lg={6} item>
                  <TextField
                    fullWidth
                    required
                    id="outlined-required"
                    label="Enter Amount"
                    placeholder="Enter Amount"
                    value={payoutAmount}
                    onChange={(e) => setPayoutAmount(e.target.value)}
                    inputProps={{
                      style: {
                        height: "0.9rem",
                      },
                    }}
                  />
                </Grid>

                {paymentMethod === "UPI" && (
                  <>
                    <Grid xs={12} sm={12} md={6} lg={6} item>
                      <TextField
                        fullWidth
                        required
                        id="outlined-required"
                        label="Enter Your Upi Id"
                        placeholder="Enter Your Upi Id"
                        value={upiId}
                        onChange={(e) => setUpiId(e.target.value)}
                        inputProps={{
                          style: {
                            height: "0.9rem",
                          },
                        }}
                      />
                    </Grid>
                  </>
                )}

                {paymentMethod === "NET BANKING" && (
                  <>
                    <Grid xs={12} sm={12} md={6} lg={6} item>
                      <TextField
                        fullWidth
                        required
                        id="outlined-required"
                        label="Enter Bank Name"
                        placeholder="Enter Your Bank Name"
                        value={bankName}
                        onChange={(e) => setBankName(e.target.value)}
                        inputProps={{
                          style: {
                            height: "0.9rem",
                          },
                        }}
                      />
                    </Grid>
                    <Grid xs={12} sm={12} md={6} lg={6} item>
                      <TextField
                        fullWidth
                        required
                        id="outlined-required"
                        label="Enter Your Ifsc Code"
                        placeholder="Enter Your Ifsc Code"
                        value={ifsc}
                        onChange={(e) => setIfsc(e.target.value)}
                        inputProps={{
                          style: {
                            height: "0.9rem",
                          },
                        }}
                      />
                    </Grid>
                    <Grid xs={12} sm={12} md={6} lg={6} item>
                      <TextField
                        fullWidth
                        required
                        id="outlined-required"
                        label="Bank Account Number"
                        placeholder="Enter Your Bank Account Number"
                        value={bankAccount}
                        onChange={(e) => setBankAccount(e.target.value)}
                        inputProps={{
                          style: {
                            height: "0.9rem",
                          },
                        }}
                      />
                    </Grid>
                  </>
                )}

                <Grid xs={12} sm={12} md={6} lg={6} item>
                  <TextField
                    fullWidth
                    required
                    id="outlined-required"
                    label="Transaction id"
                    placeholder="Transaction id"
                    value={transactionId}
                    onChange={(e) => setTransactionId(e.target.value)}
                    inputProps={{
                      style: {
                        height: "0.9rem",
                      },
                    }}
                  />
                </Grid>

                <Grid xs={12} sm={12} md={6} lg={6} item>
                  <TextField
                    id="outlined-required"
                    type="date"
                    fullWidth
                    inputProps={{
                      style: {
                        height: "0.9rem",
                      },
                    }}
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                </Grid>

                <Grid xs={12} sm={12} md={6} lg={6} item>
                  <Fragment>
                    <input
                      color="primary"
                      accept="image/*"
                      type="file"
                      value={empty}
                      onChange={attachImage}
                      id="icon-button-file"
                      style={{ display: "none" }}
                    />
                    <label htmlFor="icon-button-file">
                      <Button
                        fullWidth
                        id="AddPayment5"
                        variant="outlined"
                        component="span"
                        // className={classes.button}
                        size="large"
                        color="primary"
                      >
                        <AttachFileIcon /> Attach Image
                      </Button>
                    </label>
                  </Fragment>
                </Grid>

                {/* <Grid id="AddCard2" xs={12} sm={12} md={6} lg={6} item>
                  <TextField
                    fullWidth
                    required
                    id="outlined-required"
                    label="Card Number"
                    placeholder="Enter Card Number"
                    inputProps={{
                      style: {
                        height: "0.9rem",
                      },
                    }}
                  />
                </Grid>

                <Grid id="AddCard2" xs={12} sm={12} md={6} lg={6} item>
                  <TextField
                    fullWidth
                    required
                    id="outlined-required"
                    label="Expiry Date"
                    placeholder="Enter Expire Date"
                    inputProps={{
                      style: {
                        height: "0.9rem",
                      },
                    }}
                  />
                </Grid>
                <Grid  xs={12} sm={12} md={6} lg={6} item>
                  <TextField
                    fullWidth
                    required
                    id="outlined-required"
                    label="Cvv"
                    placeholder="Enter Cvv"
                    inputProps={{
                      style: {
                        height: "0.9rem",
                      },
                    }}
                  />
                </Grid>
                <Grid xs={12} sm={12} md={6} lg={6} item>
                  <TextField
                    fullWidth
                    required
                    id="outlined-required"
                    label="Name  as per card"
                    placeholder="Name  as per card"
                    inputProps={{
                      style: {
                        height: "0.9rem",
                      },
                    }}
                  />
                </Grid>
                <Grid id="AddCard2" xs={12} sm={12} md={6} lg={6} item>
                  <TextField
                    fullWidth
                    required
                    id="outlined-required"
                    label="UPI ID"
                    placeholder="Enter Your UPI ID"
                    inputProps={{
                      style: {
                        height: "0.9rem",
                      },
                    }}
                  />
                </Grid> */}

                <Grid item xs={0} sm={0} md={4} lg={4}></Grid>

                <Grid item xs={12} sm={12} md={4} lg={4}>
                  <Button
                    id="AddPayment4"
                    fullWidth
                    onClick={() => AddNewPayment()}
                  >
                    {addPayoutLoader ? (
                      <CircularProgress sx={{ color: "white" }} size="1.6rem" />
                    ) : (
                      "ADD PAYMENT"
                    )}
                  </Button>
                </Grid>
                <Grid item xs={0} sm={0} md={4} lg={4}></Grid>
              </Grid>
            </CardContent>
          </Card>
        </Box>
      </Modal>
    </div>
  );
}
