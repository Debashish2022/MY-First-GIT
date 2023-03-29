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
import { getToken } from "../../redux/Slice/userSlice";
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
  const Token = useSelector(getToken);

  const [paymentCategory, setPaymentCategory] = useState([]);
  const [paymentType, setPaymentType] = useState("");
  const [selectValue, setSelectValue] = useState("");
  const [nameAsPerCard, setNameAsPerCard] = useState("");
  const [usercardType, setUsercardType] = useState("");
  const [usercardNumber, setUsercardNumber] = useState("");
  const [userCardExpireDate, setUserCardExpireDate] = useState("");
  const [userCardCvv, setUserCardCvv] = useState("");
  const [userUpi, setUserUpi] = useState("");
  const [cardButtonLoader, setCardButtonLoader] = useState(false);

  useEffect(() => {
    getPaymentCategory();
  }, []);

  const onchangePaymentType = () => {
    // console.log('change happening...');
    setUsercardType("");
    setUsercardNumber("");
    setUserCardExpireDate("");
    setUserCardCvv("");
    setUserUpi("");
  };

  function validation() {

    if(selectValue === 'UPI'){

    if(nameAsPerCard.length === 0){
      eToast("Please Enter Your Name As Per Card ");
      return false;
    }else if(userUpi.length === 0){
      eToast("Please Enter Your Upi Id");
      return false;
    }else{
      return true;
    }
  }else if(selectValue === 'CARD'){
    if(selectValue.length === 0){
      eToast("Please Select a Payment Type");
      return false;
    }else if(nameAsPerCard.length === 0){
      eToast("Please Enter Your Name As Per Card ");
      return false;
    }else if(usercardNumber.length === 0){
      eToast("Please Enter Your Card Number");
      return false;
    }else if(usercardType.length === 0){
      eToast("Please Select Your Card Type");
      return false;
    }else if(userCardExpireDate.length === 0){
      eToast("Please Enter Your Card Expire Date");
      return false;
    }else if(userCardExpireDate.length !== 5){
      eToast("Please Enter a Valid Card Expire Date");
      return false;
    }else if(userCardCvv.length === 0){
      eToast("Please Enter Your Card Cvv");
      return false;
    }else if(userCardCvv.length !== 3){
      eToast("Please Enter a Valid Card Cvv");
      return false;
    }else {
      return true;
    }
  }

  };

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

    if(validation()){
      setCardButtonLoader(true);
    const data = {
      name: nameAsPerCard,
      cardType: usercardType,
      cvv: userCardCvv,
      cardNumber: usercardNumber,
      upi: userUpi,
      expireDate: userCardExpireDate,
      category: paymentType,
      // owner: OwnerId,
    };

    // console.log("my post data..", data);

    await apicaller("card/add", data, "POST", Token)
    .then((res)=>{
      if(res.status === 201 || res.status === 200){
        sToast("Account Added Successfully");
        setNameAsPerCard("");
        setUsercardType("");
        setSelectValue("");
        setUsercardNumber("");
        setUserCardExpireDate("");
        setUserCardCvv("");
        setUserUpi("");
        setPaymentType("");
      }

    })
    .catch((error) => {
      eToast(error?.response?.data?.response?.message);
  })
  .finally(() =>{
    setCardButtonLoader(false);
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
                      Select Payment Type
                    </InputLabel>
                    <Select
                      style={{ height: "3rem" }}
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="Payment Type"
                      defaultValue={selectValue}
                      onChange={(e) => {
                        setPaymentType(e.target.value._id);
                        setSelectValue(e.target.value.type);
                        onchangePaymentType()
                      }}
                    >
                      {paymentCategory.map((item,i) => (
                        <MenuItem value={item} key={i}>{item.type}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>

                {selectValue === "CARD" || selectValue === "UPI" ? (
                  <>
                    {" "}
                    <Grid id="AddCard2" xs={12} sm={12} md={12} lg={12} item>
                      <TextField
                        fullWidth
                        required
                        id="outlined-required"
                        label="Name  as per card"
                        placeholder="Name  as per card"
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

                {selectValue === "CARD" && (
                  <>
                    {" "}
                    <Grid id="AddCard2" xs={12} sm={12} md={12} lg={12} item>
                      <TextField
                        fullWidth
                        required
                        defaultValue={usercardNumber}
                        onChange={(e) => setUsercardNumber(e.target.value)}
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
                    <Grid id="AddCard2" xs={12} sm={12} md={12} lg={12} item>
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">
                          Select Card Type
                        </InputLabel>
                        <Select
                          style={{ height: "3rem" }}
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          label="Select Card Type"
                          placeholder="Select Card Type"
                          defaultValue={usercardType}
                          onChange={(e) => setUsercardType(e.target.value)}
                        >
                          <MenuItem value="Visa">Visa</MenuItem>
                          <MenuItem value="MasterCard">MasterCard</MenuItem>
                          <MenuItem value="RuPay">RuPay</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid id="AddCard2" xs={12} sm={12} md={12} lg={12} item>
                      <TextField
                        fullWidth
                        required
          
                        defaultValue={userCardExpireDate}
                        onChange={(e) => setUserCardExpireDate(e.target.value)}
                        id="outlined-required"
                        label="Expiry Date"
                        placeholder="MM/YY"
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
                    </Grid>{" "}
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
                    {cardButtonLoader ? <CircularProgress sx={{color:'white'}} size="1rem" /> : "ADD"}
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














// import * as React from "react";
// import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
// import Modal from "@mui/material/Modal";
// import { Card, CardContent, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from "@mui/material";
// import "./AddCardModal.css"
// import CloseIcon from '@mui/icons-material/Close';

// const style = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: 400,
//   bgcolor: "background.paper",
//   borderRadius:'0.1rem',
//   boxShadow: 24,
//   p: 4,
// };

// export default function AddCardModal(props) {
  

//   return (
//     <div>
//       <Modal
//         open={props.open}
//         onClose={props.handleClose}
//         aria-labelledby="modal-modal-title"
//         aria-describedby="modal-modal-description"
//       >
//         <Box sx={style}>
//           <Card id="AddCard1">
//             <CardContent>
//               <Grid container>
//                 <Grid xs={11} sm={11} md={11} lg={11}>
//                 </Grid>
//                 <Grid xs={1} sm={1} md={1} lg={1} onClick={props.handleClose} id="AddCard4"><CloseIcon/></Grid>
//                 <Grid  xs={12} sm={12} md={12} lg={12} item>
//                   <FormControl
//                     fullWidth  >
//                     <InputLabel id="demo-simple-select-label">
//                     Card type
//                     </InputLabel>
//                     <Select
//                     style={{height:'3rem'}}
//                       labelId="demo-simple-select-label"
//                       id="demo-simple-select"
//                       label="Currency"
//                       placeholder="Currency"
                      
//                     >
//                       <MenuItem value={10}>Ten</MenuItem>
//                       <MenuItem value={20}>Twenty</MenuItem>
//                       <MenuItem value={30}>Thirty</MenuItem>
//                     </Select>
//                   </FormControl>
//                 </Grid>

//                 <Grid id="AddCard2" xs={12} sm={12} md={12} lg={12} item>
//                   <TextField
//                     fullWidth
//                     required
//                     id="outlined-required"
//                     label="Card Number"
//                     placeholder="Enter Card Number"
//                     inputProps={{
//                       style: {
//                         height: "0.9rem",
//                       },
//                     }}
//                   />
//                 </Grid>

//                 <Grid id="AddCard2" xs={12} sm={12} md={12} lg={12} item>
//                   <TextField
//                     fullWidth
//                     required
//                     id="outlined-required"
//                     label="Expiry Date"
//                     placeholder="Enter Expire Date"
//                     inputProps={{
//                       style: {
//                         height: "0.9rem",
//                       },
//                     }}
//                   />
//                 </Grid>
//                 <Grid id="AddCard2" xs={12} sm={12} md={12} lg={12} item>
//                   <TextField
//                     fullWidth
//                     required
//                     id="outlined-required"
//                     label="Cvv"
//                     placeholder="Enter Cvv"
//                     inputProps={{
//                       style: {
//                         height: "0.9rem",
//                       },
//                     }}
//                   />
//                 </Grid>
//                 <Grid id="AddCard2" xs={12} sm={12} md={12} lg={12} item>
//                   <TextField
//                     fullWidth
//                     required
//                     id="outlined-required"
//                     label="Name  as per card"
//                     placeholder="Name  as per card"
//                     inputProps={{
//                       style: {
//                         height: "0.9rem",
//                       },
//                     }}
//                   />
//                 </Grid>
//                 <Grid id="AddCard2" xs={12} sm={12} md={12} lg={12} item>
//                   <TextField
//                     fullWidth
//                     required
//                     id="outlined-required"
//                     label="UPI ID"
//                     placeholder="Enter Your UPI ID"
//                     inputProps={{
//                       style: {
//                         height: "0.9rem",
//                       },
//                     }}
//                   />
//                 </Grid>

//                 <Grid item xs={12} sm={12} md={12} lg={12}>
//                 <Button variant="contained" fullWidth id="AddCard3" >ADD</Button>
//                 </Grid>
//               </Grid>
//             </CardContent>
//           </Card>
//         </Box>
//       </Modal>
//     </div>
//   );
// }
