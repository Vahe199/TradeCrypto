import * as React from 'react';
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import {Copyright} from "../Utils/Copyright";
import TabsElement from "../common/Tabs";
import {useSelector} from "react-redux";
import {DetailsAndExchange} from "../common/DetailsAndExchange";
import axios from "axios";
import useMediaQuery from '@mui/material/useMediaQuery';
import CollapseElements from "../common/Collapse";
import {banksUrl} from "../../utils/banks";


export const Home = () => {
    const matches = useMediaQuery('(min-width:900px)');
    console.log(matches,"matches")
    const {arr} = useSelector(state => state.language)
    const {details={},exchange={},receive={},send={}} = arr
    React.useEffect(()=>{
      axios.get("https://bixter.org/api/en/exchange/from-payment-systems?noInputs=1",{withCredentials:true}).then(res =>{
           console.log(res,"respons")

       }).catch((e)=>{
          console.log(e.response,666)

      })
    },[])
    return(
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
                {/* Chart */}
                <Grid item xs={12} md={6} lg={3}>
                    <Paper elevation={0} >
                        {matches ? <TabsElement data={send}/> :
                            <CollapseElements bnkLinks={banksUrl} title={send?.title}/>}
                    </Paper>
                </Grid>
                {/* Recent Deposits */}
                <Grid item xs={12} md={6} lg={5}>
                    <Paper elevation={0} sx={{ margin:matches ? "0 40px" : "0",
                    display:"flex",flexDirection:"row"}}>
                        {matches ?<TabsElement data={receive} btn={true}/>
                        :<CollapseElements bnkLinks={banksUrl} title={receive?.title}/>}
                    </Paper>
                </Grid>
                {/* Recent Orders */}
                <Grid item xs={12} md={12} lg={4}>
                    <Paper elevation={0}>
                       <DetailsAndExchange details={details} exchange={exchange}/>
                    </Paper>
                </Grid>
            </Grid>
            <Copyright sx={{ pt: 4 }} />
        </Container>
    )
}
