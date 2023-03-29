import { Box, Button, Card, CardContent, CircularProgress, Grid, Modal, Typography } from "@mui/material";
import React, { Fragment, useEffect, useState } from "react";
import "./ApproveModal.css";
import CloseIcon from "@mui/icons-material/Close";

import AttachFileIcon from "@mui/icons-material/AttachFile";
import { toast } from "react-toastify";
import { getResellerId, getResellerToken } from "../../redux/Slice/userSlice";
import { apicaller } from "../../utils/api";
import { useSelector } from "react-redux";

export default function ApproveModal(props) {
  const userId = useSelector(getResellerId);
  const Token = useSelector(getResellerToken);
  const [uploaderLoader, setUploadLoader] = useState(false);

  const [empty, setEmpty] = useState('');
  const [labImages, setLabImages] = useState([]);

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

  function validation() {
    if (empty === '') {
      eToast("Please Choose a Image");
      return false;
    } else {
      return true;
    }
  }

  //   console.log('approve page payout...$$$$', props.payout)
  const attachImage = (e) => {
    // console.log(e.target.files[0]);
    setLabImages(e.target.files[0]);
    setEmpty(e.target.value);
  };

  const AddNewPayment = async () => {
    // const data ={
    //     'img' : labImages,
    //     'senderid': props.payout,
    // }

    // console.log('approved post data...$$$$', data);
    if (validation()) {
      setUploadLoader(true);
      var data = new FormData();
      data.append("recfile", labImages);
      data.append("id", props.payout);

      await apicaller(
        "payment/make-payment",
        data,
        "put",
        Token,
        "multipart/form-data"
      )
        .then((res) => {
          if (res.status === 201 || res.status === 200) {
            sToast("Image Uploaded Successfully");
          }
        })
        .catch((error) => {
          eToast("Sorry Could Not Upload Due To Internal Issue");
        })
        .finally(() => {
          setUploadLoader(false);
          setEmpty(" ");
          setLabImages([]);
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
        <Box id="approve1">
          <Card id="approve2">
            <CardContent>
              <Grid container spacing={2} id="approve4">
                <Grid xs={10} sm={10} md={11} lg={11} item></Grid>
                <Grid
                  item
                  xs={2}
                  sm={2}
                  md={1}
                  lg={1}
                  onClick={props.handleClose}
                  id="approve3"
                >
                  <CloseIcon />
                </Grid>

                <Grid xs={12} sm={12} md={12} lg={12} item>
                  <Typography id="approve7">*Please Upload Payment Receipt</Typography>
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
                        id="approve5"
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
                <Grid item md={3} xs={3}></Grid>
                <Grid item md={6} lg={6} xs={12} id="approve6">
                  <Button variant="contained" fullWidth  onClick={() => AddNewPayment()} >
                  {uploaderLoader ? (
                      <CircularProgress sx={{ color: "white" }} size="1.6rem" />
                    ) : (
                      "UPLOAD  RECEIPT"
                    )}
                  </Button>
                </Grid>
                <Grid item md={3} xs={3}></Grid>

              </Grid>
            </CardContent>
          </Card>
        </Box>
      </Modal>
    </div>
  );
}
