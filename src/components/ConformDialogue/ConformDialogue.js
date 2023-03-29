import { Button, Dialog, DialogActions, DialogTitle } from "@mui/material";
import React from "react";

export default function ConformDialogue(props) {
  
  return (
    <>
      <Dialog open={props.open} onClose={props.handleClose}>
        <DialogTitle>Are you sure, you want to leave?</DialogTitle>

        <DialogActions onClick={props.handleClose}>
          <Button onClick={props.logout}>Yes</Button>
          <Button onClick={props.handleClose}>No</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
