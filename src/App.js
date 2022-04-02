import React from 'react';
import Header from './components/header/header'
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Login from 
function App(){
    return(
        <div className="app">
            <BrowserRouter>
            <Header/>
            <Switch>
                <Route path="/home" exact component={}/>
                <Route path='/login' component={}/>
                <Route path='/save-prayer' component={}/>
            </Switch>
            </BrowserRouter>
        </div>
    )
}

export default App;