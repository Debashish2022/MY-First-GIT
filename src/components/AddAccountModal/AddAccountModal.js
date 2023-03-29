import React, { useEffect, useState } from "react";
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
import "./AddAccountModal.css";
import CloseIcon from "@mui/icons-material/Close";
import { getResellerToken, getResellerId } from "../../redux/Slice/userSlice";
import { useSelector } from "react-redux";
import { apicaller } from "../../utils/api";
import { toast } from "react-toastify";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 450,
  //   bgcolor: "background.paper",
  borderRadius: "0.1rem",
  //   boxShadow: 24,
  p: 4,
};

export default function AddAccountModal(props) {
  const Token = useSelector(getResellerToken);
  const OwnerId = useSelector(getResellerId);

  const [paymentCategory, setPaymentCategory] = useState([]);
  const [paymentType, setPaymentType] = useState("");
  const [selectValue, setSelectValue] = useState("");
  const [nameAsPerCard, setNameAsPerCard] = useState("");
  const [bankName, setBankName] = useState("");
  const [userIfsc, setUserIfsc] = useState("");
  const [userAccountNumber, setUserAccountNumber] = useState("");
  const [userCardCvv, setUserCardCvv] = useState("");
  const [userUpi, setUserUpi] = useState("");
  const [cardButtonLoader, setCardButtonLoader] = useState(false);
  const [allCategory, setAllCategory] = useState([]);

  useEffect(() => {
    getPaymentCategory();
    getCategory();
  }, []);

  // GET CATEGORY START

  const getCategory = async () => {
    await apicaller("category/get", null, "get", Token).then((res) => {
      if (res.status === 201 || res.status === 200) {
        setAllCategory(res?.data?.result);
      }
    });
  };

  // GET CATEGORY END

  const onchangePaymentType = () => {
    // console.log("change happening...");
    setBankName("");
    setUserIfsc("");
    setUserAccountNumber("");
    setUserCardCvv("");
    setUserUpi("");
  };

  function validation() {
    if (selectValue.length !== 0) {
      if (selectValue === "UPI") {
        if (nameAsPerCard.length === 0) {
          eToast("Please Enter Your Name As Per Card ");
          return false;
        } else if (userUpi.length === 0) {
          eToast("Please Enter Your Upi Id");
          return false;
        } else {
          return true;
        }
      } else if (selectValue === "NET BANKING") {
        if (selectValue.length === 0) {
          eToast("Please Select a Payment Type");
          return false;
        } else if (nameAsPerCard.length === 0) {
          eToast("Please Enter Your Name");
          return false;
        } else if (bankName.length === 0) {
          eToast("Please Enter Your Bank Name");
          return false;
        } else if (userIfsc.length === 0) {
          eToast("Please Enter Your Ifsc Code");
          return false;
        } else if (userAccountNumber.length === 0) {
          eToast("Please Enter Your Card Expire Date");
          return false;
        } else {
          return true;
        }
      }
    } else {
      eToast("Please Select Card Type");
    }
  }

  // toasts
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

  // getPayment Category api start
  const getPaymentCategory = async () => {
    await apicaller("category/get", null, "get", Token).then((res) => {
      // console.log("paymentCategory...", res.data.result);
      setPaymentCategory(res.data.result);
    });
  };
  // getPayment Category api end

  const postUserAccountDetail = async () => {
    if (validation()) {
      setCardButtonLoader(true);
      //  {
      //     name: nameAsPerCard,
      //     bankName: bankName,
      //     ifsc :,
      //     accountNumber:,
      //     category: paymentType,
      //     owner: OwnerId,
      //  }

      if (selectValue === "UPI") {
        const data = {
          name: nameAsPerCard,
          upi: userUpi,
          category: paymentType,
          owner: OwnerId,
        };
        // console.log("my post upi data..", data);

        await apicaller("card/add", data, "POST", Token)
          .then((res) => {
            if (res.status === 201 || res.status === 200) {
              sToast("Account Added Successfully");
              setNameAsPerCard("");
              setBankName("");
              setSelectValue("");
              setUserIfsc("");
              setUserAccountNumber("");
              setPaymentType("");
              setUserCardCvv("");
              setUserUpi("");
            }
          })
          .catch((error) => {
            eToast('Sorry Account Could Not Added');
          })
          .finally(() => {
            setCardButtonLoader(false);
            props.handleClose();
          });
      } else if (selectValue === "NET BANKING") {
        const data = {
          name: nameAsPerCard,
          bankName: bankName,
          ifsc: userIfsc,
          accountNumber: userAccountNumber,
          category: paymentType,
          owner: OwnerId,
        };

        // console.log("my post bank data..", data);

        await apicaller("card/add", data, "POST", Token)
          .then((res) => {
            if (res.status === 201 || res.status === 200) {
              sToast("Account Added Successfully");
              setNameAsPerCard("");
              setBankName("");
              setSelectValue("");
              setUserIfsc("");
              setUserAccountNumber("");
              setUserCardCvv("");
              setUserUpi("");
              setPaymentType("");
            }
          })
          .catch((error) => {
            eToast('Sorry Account Could Not Added');
          })
          .finally(() => {
            setCardButtonLoader(false);
            props.handleClose();
          });
      }
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
        <Box sx={style}>
          <Card id="AddCard1">
            <CardContent>
              <Grid container>
                <Grid xs={11} sm={11} md={11} lg={11}></Grid>
                <Grid
                  xs={1}
                  sm={1}
                  md={1}
                  lg={1}
                  onClick={props.handleClose}
                  id="AddCard4"
                >
                  <CloseIcon />
                </Grid>

                <Grid xs={12} sm={12} md={12} lg={12} item>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Select Your Payment Type *
                    </InputLabel>
                    <Select
                      required
                      style={{ height: "3rem" }}
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="Select Your Payment Type"
                      defaultValue={selectValue}
                      onChange={(e) => {
                        setPaymentType(e.target.value._id);
                        setSelectValue(e.target.value.type);
                        onchangePaymentType();
                      }}
                    >
                      {paymentCategory?.map((item,i) => (
                        <MenuItem key={i} value={item}>{item?.type}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>

                {selectValue === "NET BANKING" || selectValue === "UPI" ? (
                  <>
                    {" "}
                    <Grid id="AddCard2" xs={12} sm={12} md={12} lg={12} item>
                      <TextField
                        fullWidth
                        required
                        id="outlined-required"
                        label="Enter Your Name"
                        placeholder="Enter Your Name"
                        defaultValue={nameAsPerCard}
                        onChange={(e) => setNameAsPerCard(e.target.value)}
                        inputProps={{
                          style: {
                            height: "0.9rem",
                          },
                        }}
                      />
                    </Grid>
                  </>
                ) : null}

                {selectValue === "NET BANKING" && (
                  <>
                    <Grid id="AddCard2" xs={12} sm={12} md={12} lg={12} item>
                      <TextField
                        fullWidth
                        required
                        defaultValue={bankName}
                        onChange={(e) => setBankName(e.target.value)}
                        id="outlined-required"
                        label="Enter Your Bank Name"
                        placeholder="Enter Your Bank Name"
                        inputProps={{
                          style: {
                            height: "0.9rem",
                          },
                        }}
                      />
                    </Grid>

                    <Grid id="AddCard2" xs={12} sm={12} md={12} lg={12} item>
                      <TextField
                        fullWidth
                        required
                        defaultValue={userIfsc}
                        onChange={(e) => setUserIfsc(e.target.value)}
                        id="outlined-required"
                        label="Enter Your Ifsc Code"
                        placeholder="Enter Your Ifsc Code"
                        inputProps={{
                          style: {
                            height: "0.9rem",
                          },
                        }}
                      />
                    </Grid>
                    {/* <Grid id="AddCard2" xs={12} sm={12} md={12} lg={12} item>
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">
                          Enter Bank Name
                        </InputLabel>
                        <Select
                          style={{ height: "3rem" }}
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          label="Select Card Type"
                          placeholder="Select Card Type"
                          defaultValue={bankName}
                          onChange={(e) => setBankName(e.target.value)}
                        >
                          <MenuItem value="Visa">Visa</MenuItem>
                          <MenuItem value="MasterCard">MasterCard</MenuItem>
                          <MenuItem value="RuPay">RuPay</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid> */}

                    <Grid id="AddCard2" xs={12} sm={12} md={12} lg={12} item>
                      <TextField
                        fullWidth
                        required
                        defaultValue={userAccountNumber}
                        onChange={(e) => setUserAccountNumber(e.target.value)}
                        id="outlined-required"
                        label="Account Number"
                        placeholder="Enter Your Account Number"
                        inputProps={{
                          style: {
                            height: "0.9rem",
                          },
                        }}
                      />
                    </Grid>
                    {/* <Grid id="AddCard2" xs={12} sm={12} md={12} lg={12} item>
                      <TextField
                        fullWidth
                        required
                        defaultValue={userCardCvv}
                        onChange={(e) => setUserCardCvv(e.target.value)}
                        id="outlined-required"
                        label="Cvv"
                        placeholder="Enter Cvv"
                        inputProps={{
                          style: {
                            height: "0.9rem",
                          },
                        }}
                      />
                    </Grid>{" "} */}
                  </>
                )}

                {selectValue === "UPI" && (
                  <Grid id="AddCard2" xs={12} sm={12} md={12} lg={12} item>
                    <TextField
                      fullWidth
                      required
                      defaultValue={userUpi}
                      onChange={(e) => setUserUpi(e.target.value)}
                      id="outlined-required"
                      label="UPI ID"
                      placeholder="Enter Your UPI ID"
                      inputProps={{
                        style: {
                          height: "0.9rem",
                        },
                      }}
                    />
                  </Grid>
                )}

                <Grid item xs={12} sm={12} md={12} lg={12}>
                  <Button
                    onClick={() => postUserAccountDetail()}
                    variant="contained"
                    fullWidth
                    id="AddCard3"
                  >
                    {cardButtonLoader ? (
                      <CircularProgress sx={{ color: "white" }} size="1rem" />
                    ) : (
                      "ADD"
                    )}
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Box>
      </Modal>
    </div>
  );
}
