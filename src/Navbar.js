import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Drawer from '@mui/material/Drawer';
import { List } from '@mui/material';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Logo from './photos/navbar/logo.jpeg'
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography"
import Grid from '@mui/material/Grid';


function Navbar() {

  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Grid container>
      <AppBar position="static" textTransform="uppercase">
        <Toolbar sx={{ justifyContent: "space-between" }} >
          <Link to="/contact">
            <Button color="inherit">
              CONTACT US
            </Button>
          </Link>

          <Link to="/">
            <Button color="inherit">
              <img src={Logo} style={{ width: "15vw" }} alt="logo" />
            </Button>
          </Link>
          <Button color="inherit" onClick={toggleDrawer}>
            <MenuIcon />
          </Button>
          <Drawer anchor="right" open={open} onClose={toggleDrawer} sx={{ '& .MuiDrawer-paper': { boxSizing: 'border-box', width: {"m": "40%", "lg": "20%"}} } }>
            <List>
              <Link to="/" style={{ textDecoration: "none" }}>
                <ListItem button key='HOME'>
                  <Typography variant="button">HOME</Typography>
                </ListItem>
              </Link>
              <Link to="/services" style={{ textDecoration: "none" }}>
                <ListItem button key='SERVICES'>
                  <Typography variant="button">SERVICES</Typography>
                </ListItem>
              </Link>
              <Link to="/portfolio" style={{ textDecoration: "none" }}>
                <ListItem button key='PORTFOLIO'>
                  <Typography variant="button">PORTFOLIO</Typography>
                </ListItem>
              </Link>
              <Link to="/contact" style={{ textDecoration: "none" }}>
                <ListItem button key='CONTACT US'>
                  <Typography variant="button">CONTACT US</Typography>
                </ListItem>
              </Link>
              <Link to="/about" style={{ textDecoration: "none" }}>
                <ListItem button key='ABOUT'>
                  <Typography variant="button">ABOUT</Typography>
                </ListItem>
              </Link>
              <Link to="/testimonials" style={{ textDecoration: "none" }}>
                <ListItem button key='TESTIMONIALS'>
                  <Typography variant="button">TESTIMONIALS</Typography>
                </ListItem>
              </Link>
            </List>
          </Drawer>
        </Toolbar>
      </AppBar>
    </Grid>
  );
}

export default Navbar;