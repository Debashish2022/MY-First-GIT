import { Grid } from "@mui/material";
import React from "react";
import Account from "../../components/Account/Account";
import Profile from "../../components/Profile/Profile";

export default function UserProfileAccount() {
  return (
    <>
      <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={12}>
        <Profile />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12}>
        <Account />
        </Grid>
      </Grid>
    </>
  );
}
