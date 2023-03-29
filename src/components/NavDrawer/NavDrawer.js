import React from 'react'
import "./NavDrawer.css"
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PersonIcon from '@mui/icons-material/Person';
import List from '@mui/material/List';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { Drawer } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
const useStyles = makeStyles({
drawer :{
  width: "190px"
  
}
})
function NavDrawer() {
  const classes = useStyles();
  const itemList= [ {
    text : 'Dashboard',
    icon : <DashboardIcon/>
    
  },
  {
    text : 'Userbase',
    icon : <PersonIcon/>
  },

  {
    text : 'Dashboard'
  },

  {
    text : 'Dashboard'
  },



];
  return (
    <>
    <Drawer variant='permanent' className={classes.drawer}>
    <List>
          {itemList.map((item, index) => {
            const {text, icon}= item;
           return ( 
           <ListItem key={text} disablePadding>
            {icon && <ListItemIcon>{icon}</ListItemIcon>}
              <ListItemButton>
              
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem> );
          })}
        </List>
        </Drawer>
    </>
  )
}

export default NavDrawer