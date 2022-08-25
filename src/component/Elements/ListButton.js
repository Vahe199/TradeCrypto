import {styled} from "@mui/material/styles";
import ListItemButton from '@mui/material/ListItemButton';

const drawerWidth = 240;

export const ListButton = styled(ListItemButton, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({theme,active, i}) => ({
    background:active === i ? "#E5F7F8" : "#fff",
    boxShadow:active === i ? "2px 3px 12px rgb(2 23 24 / 6%), 0px 3px 4px rgb(0 0 0 / 10%)" :"",
    textAlign: "center",
    color: "#3e4046",
    borderRadius:8,
    margin:"5px 2px",
    "&:hover": {
        boxShadow: "2px 3px 12px rgb(2 23 24 / 6%), 0px 3px 4px rgb(0 0 0 / 10%)",
        background:active === i ? "#E5F7F8" : "#fff",
        "& .MuiListItemIcon-root": {
            color: "white"
        }
    },

}));
