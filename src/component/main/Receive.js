import * as React from 'react';
import Box from '@mui/material/Box';
import TabContext from '@mui/lab/TabContext';
import {makeStyles} from '@mui/styles';
import ButtonsGroup from "../Elements/ButtonGroup";


export default function Receive({data}) {
    const classes = useStyles()
    const [value, setValue] = React.useState("0");

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%', typography: 'body1' }} className={classes.root}>
            <TabContext value={value}>
               <ButtonsGroup/>
            </TabContext>
        </Box>
    );
}

const useStyles = makeStyles({
    root: {
       paddingTop:45

    }
})
