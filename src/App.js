import React from 'react';
import Header from './components/header/header'
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './pages/home.js';
import Prayer from './pages/savePrayer';
import Profile from './pages/profile'
import './styles/styles.scss'
import Session from './pages/session'
import useStyles from './styles/styles'


function App(){
    const classes = useStyles();
    return(
        <div className={classes.root}>
            <BrowserRouter>
            <Header/>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/home"  component={Home}/>        
                <Route path='/save-prayer' component={Prayer}/>
                <Route path='/profile' component={Profile}/>
                <Route path="/login" component={Session} />
            </Switch>
            </BrowserRouter>
        </div>
    )
}

export default App;