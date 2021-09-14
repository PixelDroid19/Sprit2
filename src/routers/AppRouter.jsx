import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";

    import ListContainer from '../Content/ListContainer';
    import Detalle from '../Components/Detalle';
    import {NavBar} from '../Components/NavBar';
    import Register from '../Hooks/Register';

export default class AppRouter extends Component {
    render(){
        return(
                <Router>
                    <NavBar/>
                    <Switch>
                        <Route exact path="/detalle" component={Detalle}/>
                        <Route exact path="/" component={ListContainer}/>
                    </Switch>
                </Router>
        )
    }
}