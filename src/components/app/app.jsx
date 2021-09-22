import React from 'react';
import {MainPage, CartPage, NotFound} from '../pages';
import AppHeader from '../app-header';
import {Route, Switch} from "react-router-dom";

import WithRestoService from "../hoc";

import Background from './food-bg.jpg';

const App = ({RestoService}) => {
    console.log(RestoService.getMenuItems())
    return (
        <div style={{background: `url(${Background}) center center/cover no-repeat`}} className="app">
            <AppHeader total={50}/>
            <Switch>
                <Route path='/' exact component={MainPage}/>
                <Route path='/card' component={CartPage}/>
                <Route  exact component={NotFound}/>
            </Switch>
        </div>
    )
}

export default WithRestoService()(App);