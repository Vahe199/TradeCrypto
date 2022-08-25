import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Box from "@mui/material/Box";
import ListElement from "./List";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";

export default function CollapseElements({variant, bnkLinks, title=''}) {
    const [open, setOpen] = React.useState(true);
    const [val, setVal] = React.useState(bnkLinks[0]);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <List
            sx={{
                width: '100%', minWidth: 280,
                bgcolor: '#FFFFFF'
            }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
                <ListSubheader component="div" id="nested-list-subheader" style={{fontSize:24,fontWeight:'bold'}}>
                    {title}
                </ListSubheader>
            }
        >
            <Box sx={{
                bgcolor: '#FFFFFF',
                overflow: "scroll",
                height: open ? '300px' : '52px',
                boxShadow: '2px 2px 12px rgb(4 44 46 / 6%), 0px 3px 4px rgb(4 44 46 / 10%)',
                transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                borderRadius: '10px',
                marginBottom: '15px'
            }}>
                <ListItemButton onClick={handleClick}>
                    <ListItemAvatar>
                        <Avatar sx={{width: 35, height: 35}}
                                alt={`Avatar n°${val.title}`}
                                src={val.url}
                        />
                    </ListItemAvatar>
                    <ListItemText id={val.id} sx={{textAlign: "start"}} primary={val?.title?.toUpperCase()}/>
                    {open ? <ExpandLess style={{color: '#00ADB5'}}/> : <ExpandMore style={{color: '#00ADB5'}}/>}
                </ListItemButton>

                <Collapse in={open} timeout="auto" unmountOnExit>
                    <ListElement variant={variant} setVal={(val) => setVal(val)} banksUrl={bnkLinks} collapse={true} />
                </Collapse>
            </Box>

        </List>
    );
}
