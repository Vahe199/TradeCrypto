import * as React from 'react';
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import {ExchangeForm} from "./ExchangeForm";
import {DetailsForm} from "./DetailsForm";


export const DetailsAndExchange = ({details,exchange}) => {
    return(
        <Container maxWidth="lg" sx={{ mb: 4 }}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6} lg={12}>
                    <Paper elevation={0} >
                        <ExchangeForm exchange={exchange}/>
                    </Paper>
                </Grid>
                {/* Recent Orders */}
                <Grid item xs={12} md={6} lg={12}>
                    <Paper elevation={0}>
                            <DetailsForm details={details}/>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    )
}
