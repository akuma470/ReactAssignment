import React from 'react';
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../modules/components/Home'
import Logout from '../modules/components/Logout';
import LoginContainer from '../modules/container/LoginContainer';
import CheckInContainer from '../modules/container/CheckInContainer';

function Root(){
    return(
<BrowserRouter>
      <Switch>
        <Route exact path="/" component = { LoginContainer }></Route>
        <Route path="/Home" component = { Home }></Route>
        <Route path="/Logout" component={Logout}></Route>
        <Route path= "/CheckIn" component = {CheckInContainer}></Route>
        
      </Switch>
   </BrowserRouter>
    );
}

export default Root