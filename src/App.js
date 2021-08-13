import React from 'react';
import './App.css';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Main from './pages/Main';
import ShoppingCart from './pages/ShoppingCart';
import ProductDetails from './pages/ProductDetails';
import Checkout from './pages/Checkout';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Link to="/">Home</Link>
        <Switch>
          <Route path="/product-details/:id" component={ ProductDetails } />
          <Route path="/shopping-cart" component={ ShoppingCart } />
          <Route path="/checkout" component={ Checkout } />
          <Route exact path="/" component={ Main } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
