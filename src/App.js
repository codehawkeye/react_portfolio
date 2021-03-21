import React from 'react';
import { Container, Grid } from '@material-ui/core';

import Profile from './components/Profile/Profile'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Portfolio from './components/pages/Portfolio/Portfolio'
import Resume from './components/pages/Resume/Resume'

import './App.css';


const App = () => {
    return (
        <Container>
            <Grid container>
                <Grid item xs={12} sm={12} md={4} lg={3} style={{backgroundColor: 'red'}}>
                 <Profile />
                  </Grid>
                 <Grid item xs style={{ backgroundColor: 'blue' }}>
                   <Header />
                <Portfolio />
                <Resume />
                <Footer/>
                </Grid>               
            </Grid>        
        </Container>
    );
}

export default App
