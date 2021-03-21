import {Container, Grid} from '@material-ui/core';
import React from 'react';
import './App.css';

const App = () => {
    return (
        <Container>
            <Grid container>
                <Grid item xs={12} sm={12} md={4} lg={3}>123</Grid>
                <Grid item xs style={{ backgroundColor: 'blue' }}> </Grid>
            </Grid>
        </Container>
    );
}

export default App
