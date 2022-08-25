import * as React from 'react';
import Box from "@mui/material/Box";
import {InputElement} from "./InputElement";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {makeStyles} from "@mui/styles";

export const SelectedInputElement = ({select=true, ...props}) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [el, setEl] = React.useState("BTC");
    const open = Boolean(anchorEl);
    const classes = useStyles()
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleSelect = (e, val) => {
        console.log(val)
        if(val !== "backdropClick"){
            e.preventDefault()
            setEl(val)
        }
        setAnchorEl(null);
    };

    return (
        <Box
            sx={{maxWidth: 345, display: "flex", alignItems: "center", justifyContent: "center", position: "relative"}}>
            <InputElement {...props}/>
            {select ? <Box style={{position: "absolute", right: 5, bottom: 23}}>
                <Box style={{
                    color: "#00ADB5",
                    fontSize: 14,
                    fontWeight: 600,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                }}
                     onClick={handleClick}
                >
                    {el}
                    <ExpandMoreIcon className={anchorEl ? classes.icon : classes.tr_icon}/>
                </Box>
                <Menu
                    id="fade-menu"
                    MenuListProps={{
                        'aria-labelledby': 'fade-button',
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    TransitionComponent={Fade}
                    onClose={handleSelect}
                >
                    {["BTC", "BER20"].map((el, i) => (
                        <MenuItem onClick={(e) => handleSelect(e, el)} key={i}>{el}</MenuItem>))}
                </Menu>
            </Box>
                :<Box style={{position: "absolute", right: 25,
                    bottom: 23,
                    color: "#00ADB5",
                    fontSize: 14,
                    fontWeight: 600,}}>
                    RUB
                </Box>}
        </Box>
    )

}
const useStyles = makeStyles({
    root: {

    },
    icon:{
        transform: 'rotate(-180deg)',
        transition: 'transform 600ms ease !important'
    },
    tr_icon:{
        transform: 'rotate(0deg)',
        transition: 'transform 600ms ease !important'
    }
})
