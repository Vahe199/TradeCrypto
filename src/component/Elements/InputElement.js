import TextField from '@mui/material/TextField';
import {makeStyles} from "@mui/styles";
import styled from "@emotion/styled";


export const InputElement = ({...props}) => {
    const classes = useStyles()
    return (<div className={classes.root}>
            <TextField {...props} variant="standard" style={{width:"100%"}} InputProps={{
                disableUnderline: true,
            }}/>
        </div>
    )
}
const useStyles = makeStyles({
    root: {
        width:"100%",
        margin:"10px 0",
        "& .css-1aa5qj0-MuiInputBase-root-MuiInput-root": {
            height: "50px",
            boxShadow: "0px 4px 4px #eaebed",
            borderRadius: "8px",
            backgroundColor: "#F7F7F7",
            padding: "4px 8px",

        },
        "& label.Mui-focused": {
            color: '#CACACA',
        },
        "& .css-aqpgxn-MuiFormLabel-root-MuiInputLabel-root": {
            zIndex: 99,
            left: 10,
            top: 10,
            '& fieldset': {
                borderColor: '#CACACA',
            },
        },
    },
})
