import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Link } from 'react-router-dom';
import { ListItemText } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Grid } from "@mui/material";

function Footer() {
    return (
        <Grid container
            alignItems="flex-end"
            justifyContent="center">
            <AppBar position="static" style={{ flex: 1 }} textTransform="uppercase">
                <Toolbar sx={{ justifyContent: "space-around" }}>
                    <Link to="/about" style={{ textDecoration: "none",display: "flex", flex: 1, justifyContent: "center"}}>
                        <Button color="inherit">
                            ABOUT
                        </Button>
                    </Link>
                    <Link to="/contact" style={{ textDecoration: "none", display: "flex", flex: 1, justifyContent: "center" }}>
                        <Button color="inherit" className="desktop-only">
                            CONTACT US
                        </Button>
                    </Link>
                    <Link to="/" style={{ textDecoration: "none", display: "flex", flex: 1, justifyContent: "center" }}>
                        <Button color="inherit">
                            HOME
                        </Button>
                    </Link>
                    <Link to="/portfolio" style={{ textDecoration: "none", display: "flex", flex: 1, justifyContent: "center" }}>
                        <Button color="inherit" className="desktop-only">
                            PORTFOLIO
                        </Button>
                    </Link>
                    <Link to="/services" style={{ textDecoration: "none", display: "flex", flex: 1, justifyContent: "center" }}>
                        <Button color="inherit">
                            SERVICES
                        </Button>
                    </Link>
                </Toolbar>
                <Toolbar sx={{ justifyContent: "center" }}>
                    <Button color="inherit">
                        <a href="https://www.instagram.com/petalseventanddecorllc/" target="_blank">
                            <InstagramIcon fontSize="large" />
                        </a>
                    </Button>
                    <Button color="inherit">
                        <a href="https://www.facebook.com/petalseventsanddecor/" target="_blank">
                            <FacebookIcon fontSize="large" />
                        </a>
                    </Button>
                </Toolbar>
                <Toolbar sx={{ justifyContent: "center", flexDirection: "column" }}>
                    <Typography variant='button'>PHONE: (408) 431 - 2560 </Typography>
                    <Typography variant='button'>EMAIL: <a style={{fontFamily: "Roboto Condensed"}} href="mailto:petalseventsanddecor@gmail.com" target="_blank" rel="noopener noreferrer">petalseventsanddecor@gmail.com</a></Typography>
                </Toolbar>
            </AppBar>
        </Grid>
    );
}

export default Footer;
