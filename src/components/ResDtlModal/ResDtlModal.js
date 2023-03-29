import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./ResDtlModal.css";
import { CircularProgress, Grid } from "@mui/material";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { apicaller } from "../../utils/api";
import { useSelector } from "react-redux";
import { getToken } from "../../redux/Slice/userSlice";
import CancelSharpIcon from "@mui/icons-material/CancelSharp";
import { display } from "@mui/system";
import { toast } from "react-toastify";

// const style = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: "80%",
//   bgcolor: "background.paper",
//   borderRadius:'1rem',
//   p: 4,
// };

export default function ResDtlModal(props) {
  const [toggle, setToggle] = React.useState("");

  const [category, setCategory] = React.useState([]);
  const [netBank, setNetBank] = React.useState([]);

  const [netbankid, setNetBankId] = React.useState("");
  const [upiid, setUpiid] = React.useState("");
  const [categoryLoader, setCategoryLoader] = useState(false);
  const [oneTime, setOneTime] = useState(0);
  const idd = props.id;
  const [change, setChange] = useState(0);
  const [userPayinPrice, setUserPayinPrice] = useState("");
  const [userPayoutPrice, setUserPayoutPrice] = useState("");
  const [loader, setLoader] = useState(true);

  const token = useSelector(getToken);

  // console.log("reseller commission getting...$$$", props?.agentcommisson);

  // console.log('toggle value isss getiing ...', toggle);

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

  React.useEffect(() => {
    getCategory();
    getPayin();
  }, []);

  const getCategory = async () => {
    await apicaller(`category/get`, null, "GET", token).then((res) => {
      setCategory(res?.data);
      setNetBankId(res?.data?.result[1]?._id);
      setUpiid(res?.data?.result[0]?._id);
    });
  };

  // console.log("payin idd getting....", props.id);
  const GetAccountDetails = (id) => {
    setCategoryLoader(true);
    apicaller(`card/get/${props?.id}?type=${id}`, null, "GET", token)
      .then((res) => {
        setNetBank(res?.data?.result);
        // console.log("netbanking data", res?.data?.result);
      })
      .finally(() => {
        setCategoryLoader(false);
      });
  };

  const getPayin = async () => {
    await apicaller(`payment/payin/${props.id}`, null, "get", token).then(
      (res) => {
        // console.log('payin getting....$$$', res?.data?.payIn);
        setUserPayinPrice(res?.data?.payIn);
      }
    );

    await apicaller(`payment/payout/${props.id}`, null, "get", token)
      .then((res) => {
        // console.log('payin getting....$$$', res?.data?.payIn);
        setUserPayoutPrice(res?.data?.payOut);
      })
      .finally(() => {
        setLoader(false);
      });
  };

  const modalClose = () => {
    setToggle("");
    props.handleClose();
  };

  return (
    <div>
      <Modal
        keepMounted
        open={props.open}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box id="proRes18">
          {loader ? (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "30vh",
                width: "100%",
              }}
            >
              {" "}
              <CircularProgress size="2.5rem" />
            </div>
          ) : (
            <>
              <Grid item md={6} lg={6} xs={12}>
                <Grid item xs={10} sm={10} md={11} lg={11}>
                  <div id="resellerProfileTxt1">Details</div>
                </Grid>
                <Grid
                  item
                  xs={2}
                  sm={2}
                  md={1}
                  lg={1}
                  id="proResl6"
                  onClick={modalClose}
                >
                  <div>
                    {" "}
                    <CancelSharpIcon />
                  </div>
                </Grid>
                <Grid item xs={12} md={12} lg={12}>
                  <div id="profile1">
                    <Grid container>
                      <Grid item xs={6} md={3} lg={3}>
                        <div id="proRes19">Payin: </div>
                      </Grid>
                      <Grid item xs={6} md={9} lg={9}>
                        <div id="proRes20">
                          {userPayinPrice ? userPayinPrice : 0}/-
                        </div>
                      </Grid>
                      <Grid item xs={6} md={3} lg={3}>
                        <div id="proRes19">Payout: </div>
                      </Grid>
                      <Grid item xs={6} md={9} lg={9}>
                        <div id="proRes20">
                          {userPayoutPrice ? userPayoutPrice : 0}/-
                        </div>
                      </Grid>
                      <Grid item xs={6} md={3} lg={3}>
                        <div id="proRes19">Commission: </div>
                      </Grid>
                      <Grid item xs={6} md={9} lg={9}>
                        <div id="proRes20">
                          {props?.agentcommisson ? props?.agentcommisson : 0}/-
                        </div>
                      </Grid>
                    </Grid>
                  </div>
                </Grid>

                <Grid item xs={10} sm={10} md={11} lg={11}>
                  <div id="proRes21">Account Details</div>
                </Grid>
                <Grid item xs={2} sm={2} md={1} lg={1}></Grid>

                <div id="profile1">
                  <Button
                    id={toggle === "netbanking" ? "proResl1" : "proResl4"}
                    onClick={() => {
                      GetAccountDetails(netbankid);
                      setToggle("netbanking");
                    }}
                  >
                    Netbanking
                  </Button>
                  <Button
                    id={toggle === "upi" ? "proResl5" : "proResl2"}
                    onClick={() => {
                      GetAccountDetails(upiid);
                      setToggle("upi");
                    }}
                  >
                    UPI
                  </Button>

                  {categoryLoader ? (
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        minHeight: "30vh",
                        width: "100%",
                      }}
                    >
                      {" "}
                      <CircularProgress size="2.5rem" />
                    </div>
                  ) : (
                    <>
                      {toggle === "netbanking" ? (
                        <>
                          {netBank.length === 0 ? (
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                minHeight: "20vh",
                              }}
                            >
                              No Bank Account Added
                            </div>
                          ) : null}
                          {netBank?.map((item, i) => (
                            <div id="proResl3" key={i}>
                              <div>Name: {item?.name}</div>
                              <div>Bank Name: {item?.bankName}</div>
                              <div>Account Number: {item?.accountNumber}</div>
                              <div>IFSC Code: {item?.ifsc}</div>
                            </div>
                          ))}
                        </>
                      ) : null}

                      {toggle === "upi" ? (
                        <>
                          {netBank.length === 0 ? (
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                minHeight: "20vh",
                              }}
                            >
                              No UPI ID Added
                            </div>
                          ) : null}
                          {netBank?.map((item, i) => (
                            <div id="proResl3" key={i}>
                              <div>Name: {item?.name}</div>
                              <div>UPI Id: {item?.upi}</div>
                            </div>
                          ))}
                        </>
                      ) : null}
                    </>
                  )}
                </div>
              </Grid>
            </>
          )}
        </Box>
      </Modal>
    </div>
  );
}
