import React from 'react';
import Header from './components/header'
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './pages/home.js';
import Prayer from './pages/savePrayer';
import Profile from './pages/profile';
import Search from './pages/Search.js'
import Session from './pages/session'
import useStyles from './styles/styles'
import {Typography, CssBaseline,} from "@material-ui/core";
import './styles/styles.scss'

function App(){
    const classes = useStyles();
    return(
        <div className={classes.root}>
            <CssBaseline />
            <BrowserRouter>
            <Header/>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/home"  component={Home}/>        
                <Route path='/save-prayer' component={Prayer}/>
                <Route path='/profile' component={Profile}/>
                <Route path='/Search' component={Search}/>
                <Route path="/login" component={Session} />
            </Switch>
            </BrowserRouter>
            <footer className={classes.footer}>
                <Typography variant="h6" align='center' gutterBottom>
                <small>&copy; Copyright 2022, Prayer Armory. Strength and Valor</small>
                </Typography>
            </footer>
        </div>
    )
}

export default App;