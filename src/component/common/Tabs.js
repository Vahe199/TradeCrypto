import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import {makeStyles} from '@mui/styles';
import Typography from "@mui/material/Typography";
import ListElement from "./List";
import {banksUrl} from "../../utils/banks";
import ButtonsGroup from "../Elements/ButtonGroup";


export default function TabsElement({data, btn=false}) {
    const classes = useStyles()
    const [value, setValue] = React.useState("0");
    const [bnkLinks, setBnkLinks] = React.useState(banksUrl);
    const [variant, setVariant] = React.useState('reserve')
    const handleChange = (event, newValue) => {
        setValue(newValue);
        if(newValue === "0"){
            setBnkLinks(banksUrl)
        }else if (newValue === "1"){
            const newUrl = banksUrl.filter((el)=>el.position === "crypto")
            setBnkLinks(newUrl)
        }else if (newValue === "2"){
            const newUrl = banksUrl.filter((el)=>el.position === "bank")
            setBnkLinks(newUrl)
        }else if (newValue === "3"){
            const newUrl = banksUrl.filter((el)=>el.position === "ps")
            setBnkLinks(newUrl)
        }
    };

    return (
        <Box sx={{ width: '100%', typography: 'body1' }} className={classes.root}>
            <Typography  variant={'h6'} style={{fontWeight:'bold'}}>{data?.title}</Typography>
            <TabContext value={value}>
                <Box sx={{ display:"flex", justifyContent:"space-between" }}>
                    <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
                    <TabList onChange={handleChange} aria-label="lab API tabs example" style={{justifyContent:'space-between'}}>
                        {data?.tab?.map((el,i)=>(<Tab label={el.label} value={`${i}`} key={i}/>))}
                    </TabList>
                    </Box>
                    {btn && <Box style={{paddingTop:10}}><ButtonsGroup variant={variant} setVariant={setVariant}/></Box>}
                </Box>
                {data?.tab?.map((el,i)=>(<TabPanel style={{padding:"5px 0 0 0"}} value={`${i}`} key={i}>
                    <ListElement variant={variant} banksUrl={bnkLinks} btn={btn}/>
                </TabPanel>))}

            </TabContext>
        </Box>
    );
}

const useStyles = makeStyles({
    root: {
        "& .MuiTabs-indicator": {
            backgroundColor: "#00ADB5",
            height: 2,
            fontSize:10
        },
        "& .MuiTab-root.Mui-selected": {
            color: '#00ADB5',
            fontWeight: 'bold',
            minWidth:30,
            padding:0,
        },
        "& .css-1h9z7r5-MuiButtonBase-root-MuiTab-root":{
            minWidth:70,
        }

}
})
