import React, { Component } from 'react';
import Nav from './Components/Nav';
import Home from './Components/Home';
import About from './Components/About';
import Basket from './Components/Basket'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import { log } from 'util';
import { buildMatchMemberExpression } from '@babel/types';
import { SSL_OP_LEGACY_SERVER_CONNECT } from 'constants';



export default class App extends Component {
  state = {
    basket: 0,
  }

  addToBasket = () => {
    console.log("add to basket clicked!!");
    this.setState({
      basket: this.state.basket + 1,
      
    })
  
  }

  render() {
    console.log(this.state.basketItems + " and " + this.state.basket);
    return (
      <BrowserRouter>
        <div className = "container">
          <Nav basket = {this.state.basket}/>
            <Switch>
              <Route exact path="/" render={() => <Home saleItem ={"PS4"} sale={150} toBasket={this.addToBasket}/>}/>
              <Route path="/about" component={About} />
              <Route path="/basket" render={() => <Basket inBasket={this.basketItems} total={this.state.basket}/>} />
            </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

//component={Home} 