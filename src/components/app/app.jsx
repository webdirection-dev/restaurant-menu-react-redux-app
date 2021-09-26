import React from 'react';
import {Route, Switch} from "react-router-dom";

import {MainPage, CartPage, NotFound} from '../pages';
import AppHeader from '../app-header';
import {CesarSalad, CowboySteak, GreeceSalad, PizzaMargherita, PizzaNapoletana} from "../products";
import ViewProductsCard from "../technical/viewProductCard";

import Background from './food-bg.jpg';

const App = () => {
    return (
        <div style={{background: `url(${Background}) center center/cover no-repeat`}} className="app">
            <AppHeader total={50}/>
            <Switch>
                <Route path='/' exact component={MainPage}/>
                <Route path='/restaurant-menu-react-redux-app' exact component={MainPage}/>
                <Route path='/card' component={CartPage}/>

                <ViewProductsCard arr={[
                    CesarSalad,
                    PizzaMargherita,
                    PizzaNapoletana,
                    GreeceSalad,
                    CowboySteak
                ]}/>

                <Route exact component={NotFound}/>
            </Switch>
        </div>
    )
}

export default App;