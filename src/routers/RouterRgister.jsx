import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";

    import Home from '../Components/MovieMain';
    import CRUD from '../Components/CrudBeta'
    import Valoradas from '../Components/CustomMovie/MovieMain.js';
    import Register from '../Hooks/Register';
    import Login from '../Hooks/Login';

export default class AppRouter extends Component {
    render(){
        return(
                <Router>
                    <Switch>
                        <Route exact path="/CRUD" component={CRUD}/>
                        <Route exact path="/Valoradas" component={Valoradas}/>
                        <Route exact path="/Home" component={Home}/>
                        <Route exact path="/Register" component={Register}/>
                        <Route exact path="/" component={Login}/>
                    </Switch>
                </Router>
        )
    }
}