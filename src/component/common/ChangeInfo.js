import * as React from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export const ChangeInfo = ({position, variant}) => {
    return (
        <Box style={{paddingRight: "7px"}}>
            {variant === "exchange" ?
                <Box style={{
                    minWidth: "160px",
                    alignItems: "center",
                    justifyContent: "end",
                    display: "flex"
                }}>
                    {position !== "bank" ?
                        <Typography style={{fontSize: 10, fontWeight: "bold", color: "#3e4046"}}> 12894484.56
                            RUB</Typography>
                        : <Typography style={{
                            fontSize: 10,
                            fontWeight: "bold",
                            color: "#3e4046",
                            borderRadius: "5px",
                            padding: "8px 10px",
                            boxShadow: "rgb(2 23 24 / 6%) 2px 3px 12px, rgb(0 0 0 / 10%) 0px 3px 4px",
                            backgroundColor: "rgb(255, 255, 255)",
                            width: "fit-content"
                        }}>
                            <div>2234053.24 RUB</div>
                            <div>80179.38 USD</div>
                            {/*<div>26662.49 EUR</div>*/}
                        </Typography>}
                </Box>
                :   <Box style={{
                    minWidth: "160px",
                    alignItems: "center",
                    justifyContent: "end",
                    display: "flex"
                }}>
                    {position !== "bank" ?
                        <Typography style={{fontSize: 10, fontWeight: "bold", color: "#3e4046"}}> 1 BTC : 1258204.83 RUB</Typography>
                        : <Typography style={{
                            fontSize: 10,
                            fontWeight: "bold",
                            color: "#3e4046",
                            borderRadius: "5px",
                            padding: "8px 10px",
                            boxShadow: "rgb(2 23 24 / 6%) 2px 3px 12px, rgb(0 0 0 / 10%) 0px 3px 4px",
                            backgroundColor: "rgb(255, 255, 255)",
                            width: "fit-content"
                        }}>
                            <div>1 BTC : 1258204.83 RUB</div>
                            <div>1 BTC : 20649.06 USD</div>
                            {/*<div>1 BTC : 20733.45 EUR</div>*/}
                        </Typography>}
                </Box>}
        </Box>
    )
}
