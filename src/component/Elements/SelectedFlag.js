import * as React from 'react';
import CardMedia from '@mui/material/CardMedia';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ru from "../../IMG/russ.png";
import en from "../../IMG/eng.png";
import Box from "@mui/material/Box";
import {ExpandMore} from "./ExpandMore";
import {useDispatch} from "react-redux";
import {changeLanguage} from "../../store/reducers/LanguageReducer";


const icon = (flag,changeFlag) => (
    <IconButton aria-label="add to favorites" onClick={()=>changeFlag(flag)} sx={{borderRadius: 1}}>
        <CardMedia
            component="img"
            height="20"
            width="30"
            image={flag}
            alt="flag"
        />
    </IconButton>
);
export const SelectedFlag = () => {
    const [expanded, setExpanded] = React.useState(false);
    const [flag, setFlag] = React.useState(ru);
const dispatch = useDispatch()
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
const changeFlag = (flg) => {
    dispatch(changeLanguage(flg === ru ? "ru" : "en"))
    setExpanded(false)
    setFlag(flg)

}
    return (
        <Box sx={{height: 39, width: 86, background: "#F7F7F7", borderRadius: "5px"}}>
            {icon(flag )}
            <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
            >
                <ExpandMoreIcon/>
            </ExpandMore>
            <Box
                sx={{
                    '& > :not(style)': {
                        display: 'flex',
                        justifyContent: 'flex-start',
                        background: "#F7F7F7",
                        width: 86,
                        paddingLeft: "2px",
                        borderBottomRadius: "5px",
                        borderBottomRightRadius: "5px",
                        marginTop: "-2px"
                    },
                }}
            >

                <Box sx={{width: "100%"}}>
                    <Collapse in={expanded}>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: "column",
                        }}>
                            {icon(flag === en ? ru : en, changeFlag)}
                        </Box>
                    </Collapse>
                </Box>
            </Box>
        </Box>
    );
}
