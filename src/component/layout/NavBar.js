import * as React from 'react';
import Box from "@mui/material/Box";
import {AppBar} from "../Elements/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import LoginIcon from '@mui/icons-material/Login';
import {SelectedFlag} from "../Elements/SelectedFlag";
import { useNavigate } from "react-router-dom";

export const NavBar = () => {
    const navigate = useNavigate();
    const [open, setOpen] = React.useState(false);
    const toggleDrawer = () => {
        setOpen(!open);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar position="static" open={open} elevation={0}>
                <Toolbar
                    sx={{
                        pr: '24px', // keep right padding when drawer closed
                    }}
                >
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={toggleDrawer}
                        sx={{
                            marginRight: '36px',
                            // ...(open && { display: 'none' }),
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        component="h1"
                        variant="h5"
                        color="inherit"
                        noWrap
                        sx={{ flexGrow: 1 ,color:"#f08000", fontWeight:"bold"}}
                    >
                       TradeCrypto
                    </Typography>
                    <IconButton color="inherit" onClick={()=>navigate("login")}>
                            <LoginIcon />
                    </IconButton>
                    <SelectedFlag/>
                </Toolbar>
            </AppBar>
        </Box>
    )
}
