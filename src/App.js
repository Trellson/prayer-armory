import React from 'react';
import Header from './components/header/header'
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './pages/home.js';
import Prayer from './pages/savePrayer';
import Profile from './pages/profile'
import './styles/styles.scss'
import Session from './pages/session'

function App(){
    return(
        <div className="app">
            <BrowserRouter>
            <Header/>
            <Switch>
                <Route path="/home" exact component={Home}/>        
                <Route path='/save-prayer' component={Prayer}/>
                <Route path='/profile' component={Profile}/>
                <Route path="/login" component={Session} />
            </Switch>
            </BrowserRouter>
        </div>
    )
}

export default App;