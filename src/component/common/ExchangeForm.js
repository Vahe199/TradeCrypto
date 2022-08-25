import * as React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {InputElement} from "../Elements/InputElement";
import Button from "@mui/material/Button";
import {SelectedInputElement} from "../Elements/SelectedInputElement";

export const ExchangeForm = ({exchange}) => {
    const sxTypography = {
        color: "#3E4046",
        fontSize: 12,
        opacity: 0.65
    }
    const {tab=[],title="",exRate={}} = exchange;

    return (
        <Container component="main" maxWidth="xs">
            <Box
                sx={{
                    marginBottom:8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    width:'100%'
                }}
            >
                <Typography  variant={'h6'} style={{fontWeight:'bold',width:'100%'}}>
                    {title}
                </Typography>
                <Box sx={{mt: 1,width:"100%"}}>
                     <SelectedInputElement label={tab[0]?.input_label} placeholder={tab[0]?.input_label}/>
                    {/*<InputElement label={tab[0]?.input_label} placeholder={tab[0]?.input_label}/>*/}
                    <SelectedInputElement label={tab[1]?.input_label} placeholder={tab[1]?.input_label} select={false}/>
                    {/*<InputElement label={tab[1]?.input_label} placeholder={tab[1]?.input_label}/>*/}
                </Box>
                <Box sx={{mt:1,width:"100%"}}>
                    <Typography component={'div'} sx={{justifyContent:"space-between",display:"flex"}}>
                        <Typography component={'span'} style={sxTypography}>{exRate?.rate}</Typography>
                        <Typography component={'span'} style={sxTypography}> 1 USD = 58.13 RUB</Typography>
                    </Typography>
                    <Typography component={'div'} sx={{justifyContent:"space-between",display:"flex", mt:1,mb:1}}>
                        <Typography component={'span'} style={sxTypography}>{exRate?.maxExchange}</Typography>
                        <Typography component={'span'} style={sxTypography}>1361 USD</Typography>
                    </Typography>
                    <Typography component={'div'}sx={{justifyContent:"space-between",display:"flex"}}>
                        <Typography component={'span'} style={sxTypography}>{exRate?.minExchange}</Typography>
                        <Typography component={'span'} style={sxTypography}>20 USD</Typography>
                    </Typography>
                </Box>
            </Box>
        </Container>
    );
}
