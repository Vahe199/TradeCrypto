import * as React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {InputElement} from "../Elements/InputElement";
import {Checkbox, FormControlLabel} from "@mui/material";
import Button from "@mui/material/Button";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

export const Forgot = () => {
    const navigate = useNavigate();
    const {personal} = useSelector(state => state.language.arr)
    const [email, setEmail] = React.useState('')
    const [pass, setPass] = React.useState('')
    const {button = {}, tab = [], title = "", description = "",register="", forget="",attention={}} = personal

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        // eslint-disable-next-line no-console
        console.log({
            email: data.get('email'),
        })
    };

    return (
        <Container component="main" maxWidth="xs">
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: '100%'
                }}
            >
                <Typography variant={'body1'} style={{fontSize: 50, margin: "0 0 20px  0",textAlign:"center"}}>
                    {title}
                </Typography>
                <Typography variant={'h6'} style={{fontSize: 13, margin: "0 0 20px  0"}}>
                    {description}
                </Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate
                     sx={{mt: 1, width: "100%", display: "flex", flexDirection: 'column', alignItems: 'center',}}>
                    <InputElement label={tab[0]?.input_label} placeholder={tab[0]?.input_label} name="email"/>

                    <Button variant={'contained'}
                            color='inherit'
                            style={{
                                margin: '20px 0',
                                backgroundColor: "#00ADB5",
                                color: "#fff",
                                width: "50%",
                                borderRadius: "8px",
                                height: "48px"
                            }}>{button?.title}</Button>
                </Box>
                <Box sx={{display:"flex", justifyContent:"space-around", width:"100%"}}>
                    <Typography variant={'h6'} onClick={()=>navigate('/login')} style={{fontSize:13,color:"#00adb5",cursor:"pointer"}} >
                        {register}
                    </Typography>
                </Box>
                <Box sx={{textAlign:"center",margin:"40px 0"}}>
                <Typography component={"span"} style={{fontSize:12,fontWeight:"bold"}}>
                    {attention.title}
                    <Typography  component={"span"} style={{fontSize:12,color:"#3e4046"}}>
                        {attention.desc}
                    </Typography>
                </Typography>
                </Box>
            </Box>
        </Container>
    );
}
