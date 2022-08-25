import * as React from 'react';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import {makeStyles} from "@mui/styles";
import {ListButton} from "../Elements/ListButton";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Box from "@mui/material/Box";
import {ChangeInfo} from "./ChangeInfo";


export default function ListElement({collapse=false,banksUrl,btn=false,variant, setVal=()=>{}}) {
    const classes = useStyles()
    const [active, setActive] = React.useState(collapse ? -1 : 1);
    const [scrIndex, setScrIndex] = React.useState(3);
    const refs = banksUrl.reduce((acc, id) => {
        acc[id.id] = React.createRef();
        return acc;
    }, {});
    const handleClick = id =>
        refs[id]?.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    const handleSetValue = (i , val) => {
        if(collapse){
            setVal(val)

        }else {
            setActive(i)
        }
    }
    return (<Box sx={{display:"flex",alignItems:"center", flexDirection:"column"}}>
        <List dense className={classes.root} >
            {banksUrl.map((val,i) => {
                const labelId = `checkbox-list-secondary-label-${val.title}`;
                return (<Box key={i}  ref={refs[i]} style={{display:"flex",justifyContent:"space-between"}}>
                        <ListButton i={i} onClick={()=> handleSetValue(i,val)} active={active}>
                            <ListItemAvatar>
                                <Avatar sx={{width:35, height:35}}
                                    alt={`Avatar n°${val.title}`}
                                    src={val.url}
                                />
                            </ListItemAvatar>
                            <ListItemText id={labelId} sx={{textAlign:"start"}} primary={val.title.toUpperCase()} />
                        </ListButton>
                        {btn && <ChangeInfo position={val.position} variant={variant}/>}
                    </Box>
                );
            })}

        </List>
            {!collapse && <KeyboardArrowDownIcon color='info' onClick={() => {
                handleClick(scrIndex)
                setScrIndex(scrIndex + 3)
            }}/>}
        </Box>
    );
}

const useStyles = makeStyles({
    root: {
        width: '100%',
        // backgroundColor: 'red',
        height:380,
        overflow:"scroll",
        '&::-webkit-scrollbar': {
            width:0
        },
        '&::-webkit-scrollbar-track': {
            '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
        },
        '&::-webkit-scrollbar-thumb': {
            backgroundColor: 'rgba(0,0,0,.1)',
            outline: '1px solid slategrey'
        }
    }
})
