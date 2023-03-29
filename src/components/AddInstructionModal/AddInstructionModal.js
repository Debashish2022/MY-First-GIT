import {
  Box,
  Button,
  Card,
  CardContent,
  CircularProgress,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import "./AddInstructionModal.css";
import CloseIcon from "@mui/icons-material/Close";
import { API, apicaller } from "../../utils/api";
import { getId, getToken } from "../../redux/Slice/userSlice";
import { useSelector } from "react-redux";
import CircleIcon from "@mui/icons-material/Circle";
import { toast } from "react-toastify";
import axios from "axios";

export default function AddInstructionModal(props) {
  useEffect(() => {
    getResellersDetails();
    getCategory();
  }, []);

  const userId = useSelector(getId);
  const Token = useSelector(getToken);
  const date1 = new Date();

  let day = date1.getDate();
  let month = date1.getMonth() + 1;
  let year = date1.getFullYear();
  const mydate = year + "-" + "0" + month + "-" + "0" + day;

  const [category, setCategory] = useState([]);
  const [resellerAccountDetails, setResellerAccountDetails] = useState([]);
  // const [upiCategory, setUpiCategory] = useState();
  // const [bankingCategory, setBankingCategory] = useState();
  const [allUserId, setAllUserId] = useState([]);
  const [allUserEmail, setAllUserEmail] = useState([]);
  const [postSenderEmail, setPostSenderEmail] = useState("");
  const [postSenderId, setPostSenderId] = useState("");
  const [postReceiverEmail, setPostReceiverEmail] = useState("");
  const [postReceiverId, setPostReceiverId] = useState("");
  const [amount, setAmount] = useState("");
  const [postPaymentCategoryId, setPostPaymentCategoryId] = useState("");
  const [resellerAccountData, setResellerAccountData] = useState("");
  const [postresellerAccountData, setPostResellerAccountData] = useState("");
  const [postAccountName, setPostAccountName] = useState("");
  const [postAccountNumber, setPostAccountNumber] = useState("");
  const [postIfscCode, setPostIfscCode] = useState("");
  const [postBankName, setPostBankName] = useState("");
  const [postUpiId, setPostUpiId] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [date, setDate] = useState({ mydate });
  const [buttonLoader, setButtonLoader] = useState(false);
  const [upiData, setUpiData] = useState("");
  const [dateClick, setDateClick] = useState(false);
  const [limitAmount, setLimitAmount] = useState(false);
  const [loader, setLoader] = useState(true);

  // console.log('my date going..', date);

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

  const getResellersDetails = async () => {
    await apicaller("admin/all-reseller?status=approved", null, "get", Token)
      .then((res) => {
        // console.log("resellersssss list : ", res.data.result.data);
        setAllUserId(res?.data?.result?.data);
        setAllUserEmail(res?.data?.result?.data);
      })
      .finally(() => {
        setLoader(false);
      });
  };

  // GET CATEGORY START
  const getCategory = async () => {
    await apicaller("category/get", null, "get", Token).then((res) => {
      if (res.status === 201 || res.status === 200) {
        setCategory(res?.data?.result);

        // GetAllAccountDetails(res?.data?.result[1]._id);
      }
    });
  };

  // console.log("category getting...$$", category);

  const GetAllAccountDetails = async (id) => {
    await apicaller(
      `card/get/${postReceiverId._id}?type=${id}`,
      null,
      "get",
      Token
    )
      .then((res) => {
        // console.log("getaccount...", res.data);
        // setAccountDetail(res.data.result);
        // console.log('id getting', id, 'userid iss..', userId);
        // console.log("all account details getting...$$$$...", res.data.result);
        setResellerAccountDetails(res?.data?.result);
      })
      .catch((error) => {
        eToast(error?.response?.data?.response?.message);
      });
  };

  function validation() {
    if (postSenderId.length === 0) {
      eToast("Please Select a Sender");
      return false;
    } else if (postReceiverId.length === 0) {
      eToast("Please Select a Receiver");
      return false;
    } else if (postSenderId === postReceiverId) {
      eToast("Sender and Receiver Could Not Be Same");
      return false;
    } else if (amount.length === 0) {
      eToast("Please Enter a Amount");
      return false;
    } else if (amount > postReceiverId?.limit) {
      eToast("The Amount is More Than User Limit");
      return false;
    } else if (paymentMethod.length === 0) {
      eToast("Please Select Payment Method");
    } else if (paymentMethod !== 0) {
      if (paymentMethod === "NET BANKING") {
        if (resellerAccountData.length === 0) {
          eToast("Please Select Bank Name");
          return false;
        } else if (date.length === 0) {
          eToast("Please Select a Date");
        } else {
          return true;
        }
      } else if (paymentMethod === "UPI") {
        if (upiData.length === 0) {
          eToast("Please Select a UPI Id");
          return false;
        } else if (date.length === 0) {
          eToast("Please Select a Date");
        } else {
          return true;
        }
      }
    }
  }
  var mynewdate = 0;
  if (dateClick) {
    mynewdate = date;
  } else {
    mynewdate = date.mydate;
  }

  // console.log('mynew trial date', mynewdate);

  const AddInstruction = () => {
    if (validation()) {
      setButtonLoader(true);
      // sToast("Data added Successfully");
      // const data1 = {
      //   paymentmehod: paymentMethod,
      //   amount: amount,
      //   name: postAccountName,
      //   ifsc: postIfscCode,
      //   upi: postUpiId,
      //   date: mynewdate,
      //   sender: postSenderId?._id,
      //   receiver: postReceiverId?._id,
      // };
      // console.log("datat iss...", data1);

      const data = new FormData();
      data.append("medium", paymentMethod);
      data.append("amount", amount);
      data.append("accountNumber", postAccountNumber);
      data.append("name", postBankName);
      data.append("ifsc", postIfscCode);
      data.append("upi", postUpiId);
      data.append("date", mynewdate);
      data.append("sender", postSenderId?._id);
      data.append("receiver", postReceiverId?._id);

      var config = {
        method: "post",
        maxBodyLength: Infinity,
        url: `${API}/payment/add`,
        headers: {
          Authorization: "Bearer " + Token,
        },
        data: data,
      };

      axios(config)
        .then(function (response) {
          // console.log(JSON.stringify(response.data));
          sToast("New Instruction Added Successfully");
          setButtonLoader(false);
        })
        .catch((error) => {
          eToast(error?.response?.data?.response?.message);
          // console.log("error", error);
        })
        .finally(() => {
          props.handleClose();
          setPaymentMethod("");
          setAmount("");
          setPostAccountName("");
          setPostBankName("");
          setPostIfscCode("");
          setPostUpiId("");
          setDate("");
          setPostSenderId("");
          setPostReceiverId("");
          setLimitAmount(false);
        });
    }
  };

  // console.log(
  //   "selected sender is...$$$...",
  //   postSenderEmail,
  //   "sender id ..&&",
  //   postSenderId._id
  // );
  // console.log(
  //   "selected receiver is...$$$...",
  //   postReceiverEmail,
  //   "receiver id ..&&",
  //   postReceiverId._id
  // );

  // console.log("select payment category...", paymentMethod);

  return (
    <div>
      <Modal
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box id="AddInstruction6">
        
          <Card id="AddInstruction3">
          {loader ? (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      minHeight: "30vh",
                      minWidth: "46vh",
                    }}
                  >
                    {" "}
                    <CircularProgress/>
                  </div>
                ) : (
          
            <CardContent>
              <>
                
                  <Grid container spacing={2} id="AddInstruction1">
                    <Grid xs={10} sm={10} md={11} lg={11} item></Grid>
                    <Grid
                      item
                      xs={2}
                      sm={2}
                      md={1}
                      lg={1}
                      onClick={props.handleClose}
                      id="AddInstruction2"
                    >
                      <CloseIcon />
                    </Grid>

                    <Grid xs={12} sm={12} md={6} lg={6} item>
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">
                          Sender
                        </InputLabel>
                        <Select
                          style={{ height: "3rem" }}
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          label="Sender"
                          placeholder="Sender"
                          value={postSenderEmail}
                          onChange={(e) => {
                            setPostSenderEmail(e.target.value);
                          }}
                        >
                          {allUserEmail?.map((item, i) => (
                            <MenuItem
                              value={item?.email}
                              onClick={() => setPostSenderId(item)}
                              key={i}
                            >
                              {item?.email}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Grid>

                    <Grid xs={12} sm={12} md={6} lg={6} item>
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">
                          Receiver
                        </InputLabel>
                        <Select
                          style={{ height: "3rem" }}
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          label="Receiver"
                          placeholder="Receiver"
                          value={postReceiverEmail}
                          onChange={(e) => setPostReceiverEmail(e.target.value)}
                        >
                          {allUserEmail?.map((item, i) => (
                            <MenuItem
                              value={item?.email}
                              onClick={() => {
                                setPostReceiverId(item);
                                setLimitAmount(true);
                              }}
                              key={i}
                            >
                              {item?.email}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Grid>

                    <Grid item lg={6} md={6} xs={12} sm={12}>
                      <TextField
                        id="outlined-basic"
                        label="Amount"
                        variant="outlined"
                        inputProps={{
                          style: {
                            height: "0.9rem",
                          },
                        }}
                        placeholder="Amount"
                        fullWidth
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                      />
                      {limitAmount && (
                        <Typography id="AddInstruction16">
                          The User Amount Limit is {postReceiverId?.limit}/-
                        </Typography>
                      )}
                    </Grid>
                    {/* <Grid item lg={6}>
                  <TextField
                    id="outlined-basic"
                    label="From"
                    variant="outlined"
                    inputProps={{
                      style: {
                        height: "0.9rem",
                      },
                    }}
                    fullWidth
                  />
                </Grid> */}

                    <Grid item lg={6} md={6} xs={12} sm={12}>
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">
                          Payment Method
                        </InputLabel>
                        <Select
                          style={{ height: "3rem" }}
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          label="Payment Method"
                          placeholder="Select Payment Method"
                          value={paymentMethod}
                          onChange={(e) => setPaymentMethod(e.target.value)}
                        >
                          {category?.map((item, i) => (
                            <MenuItem
                              value={item?.type}
                              key={i}
                              onClick={() => {
                                setPostPaymentCategoryId(item?._id);
                                GetAllAccountDetails(item?._id);
                              }}
                            >
                              {item?.type}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Grid>

                    {paymentMethod === "NET BANKING" ? (
                      <>
                        <Grid item lg={6} md={6} xs={12} sm={12}>
                          <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">
                              Bank Name
                            </InputLabel>
                            <Select
                              style={{ height: "3rem" }}
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              label="Category"
                              className="AddInstruction11"
                              placeholder="Category"
                              value={resellerAccountData}
                              onChange={(e) =>
                                setResellerAccountData(e.target.value)
                              }
                            >
                              {resellerAccountDetails?.map((item, i) => (
                                <MenuItem
                                  value={item.bankName}
                                  key={i}
                                  onClick={() => {
                                    setPostAccountName(item.name);
                                    setPostAccountNumber(item?.accountNumber);
                                    setPostBankName(item?.bankName);
                                    setPostIfscCode(item?.ifsc);
                                    setPostUpiId(item?.upi);
                                  }}
                                >
                                  <Typography paragraph>
                                    <div id="AddInstruction9">
                                      <div>
                                        {" "}
                                        {item?.bankName
                                          ? item?.bankName
                                          : "No Bank Added By User"}
                                      </div>
                                      <div id="AddInstruction10">
                                        {" "}
                                        {item?.status === "inactive" && (
                                          <Typography id="AddInstruction12">
                                            <CircleIcon id="AddInstruction14" />
                                          </Typography>
                                        )}
                                        {item.status === "active" && (
                                          <Typography id="AddInstruction13">
                                            <CircleIcon id="AddInstruction14" />
                                          </Typography>
                                        )}
                                      </div>
                                    </div>
                                  </Typography>
                                </MenuItem>
                              ))}
                            </Select>
                          </FormControl>
                        </Grid>
                      </>
                    ) : null}

                    {paymentMethod === "UPI" ? (
                      <>
                        <Grid item lg={6} md={6} xs={12} sm={12}>
                          <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">
                              UPI ID
                            </InputLabel>
                            <Select
                              style={{ height: "3rem" }}
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              label="Category"
                              placeholder="Category"
                              value={upiData}
                              onChange={(e) => setUpiData(e.target.value)}
                            >
                              {resellerAccountDetails?.map((item, i) => (
                                <MenuItem
                                  value={item.upi}
                                  key={i}
                                  onClick={() => {
                                    setPostAccountName(item.name);
                                    setPostUpiId(item?.upi);
                                  }}
                                >
                                  <div id="AddInstruction9">
                                    <div>
                                      {" "}
                                      {item?.upi
                                        ? item?.upi
                                        : "No UPI Added User"}
                                    </div>
                                    <div id="AddInstruction10">
                                      {" "}
                                      {item?.status === "inactive" && (
                                        <Typography id="AddInstruction12">
                                          <CircleIcon id="AddInstruction14" />
                                        </Typography>
                                      )}
                                      {item.status === "active" && (
                                        <Typography id="AddInstruction13">
                                          <CircleIcon id="AddInstruction14" />
                                        </Typography>
                                      )}
                                    </div>
                                  </div>
                                </MenuItem>
                              ))}
                            </Select>
                          </FormControl>
                        </Grid>
                      </>
                    ) : null}

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
                        value={date.mydate}
                        onChange={(e) => {
                          setDateClick(true);
                          setDate(e.target.value);
                        }}
                      />
                    </Grid>

                    {/* {item.status != 'inactive' ?   <>{item?.bankName != undefined ? item?.bankName : null}</> : null } */}
                    {/* { item.status == 'active' ? <>{item.bankName != undefined ? <>{item.bankName.length > 0 ? 'no account' : null   }</>: null}</>: null } */}

                    {/* <Grid item lg={6} md={6} xs={12} sm={12}>
                  <TextField
                    id="outlined-basic"
                    label=""
                    variant="outlined"
                    inputProps={{
                      style: {
                        height: "0.9rem",
                      },
                    }}
                    fullWidth
                  />
                </Grid> */}
                    {paymentMethod.length === 0 && (
                      <Grid item lg={6} md={6} xs={0} sm={0}></Grid>
                    )}

                    <Grid item lg={6} md={6} xs={12} sm={12}>
                      <Button
                        variant="contained"
                        onClick={() => AddInstruction()}
                      >
                        {buttonLoader ? (
                          <CircularProgress
                            sx={{ color: "white" }}
                            size="1.6rem"
                          />
                        ) : (
                          "ADD INSTRUCTION"
                        )}
                      </Button>
                    </Grid>
                  </Grid>
                
              </>
            </CardContent>)}
          </Card>
        </Box>
      </Modal>
    </div>
  );
}
