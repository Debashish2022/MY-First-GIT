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
import "./CommissionModal.css";
import CloseIcon from "@mui/icons-material/Close";
import CircleIcon from "@mui/icons-material/Circle";
import { apicaller } from "../../utils/api";
import { useSelector } from "react-redux";
import { getToken } from "../../redux/Slice/userSlice";
import { toast } from "react-toastify";

export default function CommisionModal(props) {

const [amount, setAmount] = useState('');
const [buttonLoader, setButtonLoader] = useState(false);
const Token = useSelector(getToken);



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

  // console.log('amount', amount);

  function validation(){
    if(amount.length === 0){
        eToast("Please Enter a Amount");
        return false;
    }else if(parseInt(amount) == 0 || parseInt(amount) < 0){
      eToast("Enter a Valid Amount");
      return false;
    }else if(props?.commission < amount){
      eToast("Commission Amount Is More Than User Limit");
      return false;
    }else{
        return true;
    }
  }


  const SettleCommission = () => {
    if(validation()){
    setButtonLoader(true);
    const data = {
      "agent": props?.resellerId,
      "amount": parseInt(amount),
    };
    // console.log("data going...$$$", data);
    apicaller("commission/add", data, "post", Token)
    .then((res)=>{
        if(res.status === 201 ||res.status === 200){
            sToast("Commission Sent Successfully");
        }
    })
    .catch(()=>{
        eToast("Could Not Send Due to Internal Error");
    })
    .finally(()=>{
    setButtonLoader(false);
    props.handleClose()
    })

}
  };

//   console.log('commission modal....$$$$', props.resellerId)

  return (
    <div>
      <Modal
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box id="ComModal4">
          <Card id="ComModal3">
            <CardContent>
              <Grid container spacing={2} id="ComModal1">
                <Grid xs={10} sm={10} md={11} lg={11} item></Grid>
                <Grid
                  item
                  xs={2}
                  sm={2}
                  md={1}
                  lg={1}
                  onClick={props.handleClose}
                  id="ComModal2"
                >
                  <CloseIcon />
                </Grid>

                <Grid item lg={12} md={12} xs={12} sm={12}>
                  <TextField
                    id="outlined-basic"
                    label="Amount"
                    variant="outlined"
                    type="number"
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
                  <Typography id="ComModal6">User Maximum Commision Limit is {props?.commission}</Typography>
                  {/* {limitAmount && <Typography id="AddInstruction16">The User Amount Limit is {postReceiverId?.limit}/-</Typography>} */}
                </Grid>
                
                <Grid item lg={4} md={4} xs={0} sm={0}></Grid>
                <Grid item  lg={4} md={4} xs={12} sm={12} id="ComModal5">
                    <Button fullWidth variant="contained" onClick={()=>SettleCommission()}>{buttonLoader ? (
                      <CircularProgress sx={{ color: "white" }} size="1.6rem" />
                    ) : (
                      "SEND COMMISSION"
                    )}</Button>
                </Grid>
                <Grid item lg={4} md={4} xs={0} sm={0}></Grid>

              </Grid>
            </CardContent>
          </Card>
        </Box>
      </Modal>
    </div>
  );
}
