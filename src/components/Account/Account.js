import React, { useEffect, useState } from "react";
import "./Account.css";
import {
  Button,
  CircularProgress,
  Grid,
  Switch,
  Toolbar,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { drawerWidth } from "../../pages/Dashboard/Dashboard";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";

import { apicaller } from "../../utils/api";
import { getResellerToken } from "../../redux/Slice/userSlice";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import AddAccountModal from "../AddAccountModal/AddAccountModal";
import { getResellerId } from "../../redux/Slice/userSlice";

export default function Account() {
  useEffect(() => {
    // ResellerLogin();
    getCategory();
  }, []);

  const userId = useSelector(getResellerId);
  const Token = useSelector(getResellerToken);
  const [AccountDetail, setAccountDetail] = useState([]);
  const [buttonClick, setButtonClick] = useState("NetBanking");
  const [open, setOpen] = useState(false);
  const [accoutnPageLoader, setAccoutnPageLoader] = useState(true);
  const [upiCategory, setUpiCategory] = useState();
  const [bankingCategory, setBankingCategory] = useState();
  const [categoryLoader, setCategoryLoader] = useState(false);
  const [cardButtonStatus, setCardButtonStatus] = useState();

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
    ResellerLogin(upiCategory);
  };
  // modal open close function end

  // console.log("user id", userId);

  // GET CATEGORY START
  const getCategory = async () => {
    await apicaller("category/get", null, "get", Token).then((res) => {
      if (res.status === 201 || res.status === 200) {
        setUpiCategory(res?.data?.result[0]._id);
        setBankingCategory(res?.data?.result[1]._id);
        ResellerLogin(res?.data?.result[1]._id);
      }
    });
  };

  // GET CATEGORY END

  // console.log("category id set...", upiCategory);

  // getAccountdata api start
  const ResellerLogin = async (id) => {
    setCategoryLoader(true);
    await apicaller(`card/get/${userId}?type=${id}`, null, "get", Token)
      .then((res) => {
        // console.log("getaccount...", res.data);
        setAccountDetail(res.data.result);
      })
      .catch((error) => {
        eToast(error?.response?.data?.response?.message);
      })
      .finally(() => {
        setAccoutnPageLoader(false);
        setCategoryLoader(false);
      });
  };
  // getAccountdata api end

  //card enable disable button start

  // const cardButton = async (id, status) => {

  // }

  //card enable disable button end

  const cardStatusNetBankChange = async (
    status,
    name,
    accountNumber,
    bankName,
    ifsc,
    category,
    owner,
    id
  ) => {
    if (
      window.confirm(
        `Are You Sure Want To ${
          status === "active" ? "Disable" : "Enable"
        } Your Card  ?`
      )
    ) {
      const data = {
        name: name,
        accountNumber: accountNumber,
        bankName: bankName,
        ifsc: ifsc,
        category: category,
        owner: owner,
        status: status === "active" ? "inactive" : "active",
        _id: id,
      };
      await apicaller("card/update", data, "put", Token)
        .then((res) => {
          if (res.status === 201 || res.status === 200) {
            if (status === "active") {
              sToast("Card Disabled Successfully");
            } else if (status === "inactive") {
              sToast("Card Enabled Successfully");
            }
          }
        })
        .catch((error) => {
          eToast(error?.response?.data?.response?.message);
        })
        .finally(() => {
          ResellerLogin(bankingCategory);
        });

      // console.log('staus button data is.....', data);
    }
  };

  const cardStatusUpiChange = async (
    status,
    name,
    category,
    owner,
    id,
    upi
  ) => {
    if (
      window.confirm(
        `Are You Sure Want To ${
          status === "active" ? "Disable" : "Enable"
        } Your Card  ?`
      )
    ) {
      const data = {
        name: name,
        upi: upi,
        category: category,
        owner: owner,
        status: status === "active" ? "inactive" : "active",
        _id: id,
      };
      await apicaller("card/update", data, "put", Token)
        .then((res) => {
          if (res.status === 201 || res.status === 200) {
            if (status === "active") {
              sToast("Card Disabled Successfully");
            } else if (status === "inactive") {
              sToast("Card Enabled Successfully");
            }
          }
        })
        .catch((error) => {
          eToast(error?.response?.data?.response?.message);
        })
        .finally(() => {
          ResellerLogin(upiCategory);
        });

      // console.log('staus button data is.....', data);
    }
  };

  return (
    <>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          marginBottom: "3rem",
        }}
      >
        {accoutnPageLoader ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              minHeight: "80vh",
            }}
          >
            {" "}
            <CircularProgress />
          </div>
        ) : (
          <>
            <Toolbar />
            <Typography paragraph>
              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 1, md: 1 }}
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
                  <Grid item xs={12} md={12} lg={12}>
                    <div id="account7">
                      <Button
                        size="small"
                        id={
                          buttonClick === "NetBanking"
                            ? "account8"
                            : "account10"
                        }
                        onClick={() => {
                          setButtonClick("NetBanking");
                          ResellerLogin(bankingCategory);
                        }}
                      >
                        Netbanking
                      </Button>
                      <Button
                        size="small"
                        id={buttonClick === "UPI" ? "account9" : "account5"}
                        onClick={() => {
                          setButtonClick("UPI");
                          ResellerLogin(upiCategory);
                        }}
                      >
                        UPI
                      </Button>{" "}
                      <>
                        {" "}
                        {AccountDetail?.map((item) => (
                          <>
                            {categoryLoader ? (
                              <div
                                style={{
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                  minHeight: "80vh",
                                }}
                              >
                                {" "}
                                <CircularProgress />
                              </div>
                            ) : (
                              <>
                                <Grid container>
                                  <Grid item md={5} lg={4} xs={10}>
                                    <div id="account6">
                                      {buttonClick === "UPI" ? (
                                        <div>
                                          <div>Name : {item?.name}</div>
                                          <div>UPI ID : {item?.upi}</div>
                                        </div>
                                      ) : null}
                                      {buttonClick === "NetBanking" ? (
                                        <div>
                                          <div>Name : {item?.name}</div>
                                          <div>
                                            Bank Name : {item?.bankName}
                                          </div>
                                          <div>Ifsc : {item?.ifsc}</div>
                                          <div>
                                            Account Number :{" "}
                                            {item?.accountNumber}
                                          </div>
                                        </div>
                                      ) : null}
                                    </div>
                                  </Grid>
                                  <Grid
                                    item
                                    md={2}
                                    lg={2}
                                    xs={2}
                                    id="account13"
                                  >
                                    {buttonClick === "UPI" ? (
                                      <Switch
                                        checked={
                                          item?.status === "active"
                                            ? true
                                            : false
                                        }
                                        onChange={() => {
                                          cardStatusUpiChange(
                                            item?.status,
                                            item?.name,
                                            item?.category,
                                            item?.owner,
                                            item?._id,
                                            item?.upi
                                          );
                                        }}
                                        inputProps={{
                                          "aria-label": "controlled",
                                        }}
                                      />
                                    ) : null}
                                    {buttonClick === "NetBanking" ? (
                                      <Switch
                                        checked={
                                          item?.status === "active"
                                            ? true
                                            : false
                                        }
                                        onChange={() => {
                                          cardStatusNetBankChange(
                                            item?.status,
                                            item?.name,
                                            item?.accountNumber,
                                            item?.bankName,
                                            item?.ifsc,
                                            item.category,
                                            item.owner,
                                            item._id
                                          );
                                        }}
                                        inputProps={{
                                          "aria-label": "controlled",
                                        }}
                                      />
                                    ) : null}
                                  </Grid>
                                  {item?.status === "inactive" ? (
                                    <Grid item md={2} lg={2} id="account13">
                                      <Typography id="account14">
                                        Disabled
                                      </Typography>
                                    </Grid>
                                  ) : null}
                                </Grid>
                              </>
                            )}
                          </>
                        ))}
                      </>
                    </div>
                  </Grid>
                </Grid>
              </Grid>
            </Typography>
          </>
        )}
      </Box>
    </>
  );
}
