import * as React from 'react';
import {InputElement} from "../Elements/InputElement";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {Checkbox, FormControlLabel} from "@mui/material";

export const DetailsForm = ({details={}}) => {
    const [email, setEmail] = React.useState('')
    const [pass, setPass] = React.useState('')
    const {button={} ,tab=[],title=""} = details

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        // eslint-disable-next-line no-console
       console.log({
            email: data.get('email'),
            password: data.get('password'),
        })
    };

    return (
        <Container component="main" maxWidth="xs">
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    width:'100%'
                }}
            >
                <Typography  variant={'h6'} style={{fontWeight:'bold',width:'100%'}}>
                    {title}
            </Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{mt: 1,width:"100%"}}>
                       <InputElement label={tab[0]?.input_label} placeholder={tab[0]?.input_label} name="email"/>
                       <InputElement label={tab[1]?.input_label} placeholder={tab[1]?.input_label} name="FIO"/>
                       <InputElement label={tab[2]?.input_label} placeholder={tab[2]?.input_label} name="card"/>

                    <FormControlLabel sx={{margin:"10px 0"}}
                        value="end"
                        control={<Checkbox  sx={{
                            color: "#00adb5",
                            borderRadius:5,
                            '&.Mui-checked': {
                                color: "#00adb5",
                            },
                        }} />}
                        label={<Typography component={"span"} style={{fontSize:13}}>
                            {tab[3]?.lab_title}
                            <Typography  component={"span"} style={{fontSize:13,color:"#00adb5"}}>
                            {tab[3]?.checkbox_label}
                        </Typography></Typography>}
                        labelPlacement="end"
                    />

                    <Button variant={'contained'}
                            color='inherit'
                            style={{
                                backgroundColor: "#00ADB5",
                                color: "#fff",
                                width: "100%",
                                borderRadius:"8px",
                                height:"48px"
                            }}>{button?.title}</Button>
                </Box>
            </Box>
        </Container>
    );
}
