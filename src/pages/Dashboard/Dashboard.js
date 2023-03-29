import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import DashboardIcon from "@mui/icons-material/Dashboard";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import GradingRoundedIcon from "@mui/icons-material/GradingRounded";
import DoNotTouchOutlinedIcon from "@mui/icons-material/DoNotTouchOutlined";
import EventNoteOutlinedIcon from "@mui/icons-material/EventNoteOutlined";
import "./Dashboard.css";
import logo from "../../assets/dashboard/logo.png";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LogoutIcon from "@mui/icons-material/Logout";
import DashboardContent from "../../components/DashboardContent/DashboardContent";
import Profile from "../../components/Profile/Profile";
import Payin from "../../components/Payin/Payin";
import Payout from "../../components/Payout/Payout";
import Account from "../../components/Account/Account";
import Resellers from "../../components/Resellers/Resellers";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import ConformDialogue from "../../components/ConformDialogue/ConformDialogue";
import { Navigate, useNavigate } from "react-router-dom";
import { clear } from "../../redux/Slice/userSlice";
import UserProfileAccount from "../UserProfileAccount/UserProfileAccount";
import Instruction from "../../components/Instruction/Instruction";
import Commission from "../../components/Commission/Commission";
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import PercentIcon from '@mui/icons-material/Percent';
import GroupIcon from '@mui/icons-material/Group';

export const drawerWidth = 240;

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const [value, setValue] = React.useState(0);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const styles = {
    customizeToolbar: {
      minHeight: 36,
    },
  };

  const [toggle, setToggle] = React.useState("Dashboard");

  const drawer = (
    <div>
      <Toolbar variant="dense">
        <img src={logo} alt="logo" loading="lazy" id="dashboard1" />
      </Toolbar>
      <Divider />
      <List>
        {["Dashboard", "Profile", "Resellers","Instructions","Commission"].map(
          (text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton onClick={() =>{setToggle(text);setMobileOpen(false);}}>
                <ListItemIcon>
                  {index === 0 ? (
                    <DashboardIcon onClick={() =>{ setToggle("Dashboard");setMobileOpen(false);}} />
                  ) : index === 1 ? (
                    <AccountCircleOutlinedIcon
                      onClick={() => {setToggle("Profile");setMobileOpen(false);}}
                    />
                  ) : //  : index === 2 ? (
                  //   <AccountBalanceWalletOutlinedIcon
                  //     onClick={() => setToggle("Account")}
                  //   />
                  // )
                  // index === 2 ? (
                  //   <EventNoteOutlinedIcon onClick={() => {setToggle("Payin");setMobileOpen(false);}} />
                  // ) : index === 3 ? (
                  //   <GradingRoundedIcon onClick={() => {setToggle("Payout");setMobileOpen(false);}} />
                  // ) : 
                  index === 2 ? (
                    <GroupIcon
                      onClick={() => {setToggle("Resellers");setMobileOpen(false);}}
                    />
                  ) : index === 3 ? (
                    <BookmarkAddIcon
                      onClick={() => {setToggle("Instructions");setMobileOpen(false);}}
                    />
                  ): index === 4 ? (
                    <PercentIcon
                      onClick={() => {setToggle("Commission");setMobileOpen(false);}}
                    />
                  ) : (
                    <DoNotTouchOutlinedIcon />
                  )}
                </ListItemIcon>
                <ListItemText primary={text} onClick={() =>{setToggle(text);setMobileOpen(false);}} />
              </ListItemButton>
            </ListItem>
          )
        )}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const BottomNav = () => {
    return (
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        sx={{
          display: { sm: "none" },
          bottom: "0",
          position: "fixed",
          width: "100%",
        }}
      >
        <BottomNavigationAction
          label="Dashboard"
          icon={<DashboardIcon />}
          onClick={() => setToggle("Dashboard")}
        />
        <BottomNavigationAction
          label="Profile"
          icon={<AccountCircleOutlinedIcon />}
          onClick={() => setToggle("Profile")}
        />
        {/* <BottomNavigationAction
          label="Account"
          icon={<AccountBalanceWalletOutlinedIcon />}
          onClick={() => setToggle("Account")}
        />  */}
        {/* <BottomNavigationAction
          label="Payin"
          icon={<EventNoteOutlinedIcon />}
          onClick={() => setToggle("Payin")}
        />
        <BottomNavigationAction
          label="Payout"
          icon={<GradingRoundedIcon />}
          onClick={() => setToggle("Payout")}
        /> */}
        <BottomNavigationAction
          label="Commission"
          icon={<PercentIcon />}
          onClick={() => setToggle("Commission")}
        />
        <BottomNavigationAction
          label="Instruction"
          icon={<BookmarkAddIcon />}
          onClick={() => setToggle("Instructions")}
        />
        <BottomNavigationAction
          label="Reseller"
          icon={<GroupIcon />}
          onClick={() => setToggle("Resellers")}
        />
      </BottomNavigation>
    );
  };

  // dialogue
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  // dialogue end

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = () => {
    dispatch(clear());
    navigate("/");
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar variant="dense" style={{ backgroundColor: "#ffffff" }}>
          <IconButton
            size="large"
            edge="start"
            color="white"
            aria-label="menu"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} />

          <NotificationsIcon style={{ color: "black" }} />
          <LogoutIcon
            style={{ color: "black", marginLeft: "1rem", cursor: "pointer" }}
            onClick={handleClickOpen}
          />
          <ConformDialogue
            open={open}
            logout={logout}
            handleClose={handleClose}
          />
        </Toolbar>
      </AppBar>

      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}

        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>

      {toggle === "Dashboard" ? <DashboardContent /> : null}
      {toggle === "Profile" ? <Profile /> : null}
      {/* {toggle === "Account" ? <Account /> : null} */}
      {/* {toggle === "Payin" ? <Payin /> : null}
      {toggle === "Payout" ? <Payout /> : null} */}
      {toggle === "Resellers" ? <Resellers /> : null}
      {toggle === "Instructions" ? <Instruction/> : null}
      {toggle === "Commission" ? <Commission/> : null}

      <BottomNav />
    </Box>
  );
}

Dashboard.propTypes = {
  window: PropTypes.func,
};

export default Dashboard;
