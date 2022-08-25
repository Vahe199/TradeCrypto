import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import {useSelector} from "react-redux";

export default function ButtonsGroup({variant,setVariant}) {
    const {receive={}} = useSelector(state => state.language.arr)
    const {button={}} =receive

    // reserve,exchange
    return (
        <Stack spacing={2} direction="row" style={{
            border:"1px solid #0e7873",
            width:"min-content",
            borderRadius:"4px",
            height:"30px",
        }}>
            <Button variant={'contained'}
                    onClick={()=>setVariant("exchange")}
                    color='inherit'
                    style={{marginRight:-20,
                        textTransform: "none",
                        backgroundColor:variant === 'reserve' ? "transparent" :"#21b6ae",
                        color:variant === "exchange" ? "#fff" : "#000",
                          // border:variant === "exchange" ?'none' :"1px solid #0e7873"
                    }}
            >{button?.title1}</Button>
            <Button variant={'contained'}
                    color='inherit'
                    onClick={()=>setVariant('reserve')}
                    style={{
                        maxWidth:"124px",
                        whiteSpace:"nowrap",
                        textTransform: "none",
                        backgroundColor:variant === "exchange" ? "#fff" :"#21b6ae",
                        color:variant === "exchange" ? "#000" :"#fff",
                         // border:variant === "exchange" ?"1px solid #0e7873" :'none'
                    }}>{button?.title2}</Button>
        </Stack>
    );
}





