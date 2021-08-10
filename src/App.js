import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from './pages/Main';
import ShoppingCart from './pages/ShoppingCart';
import ProductDetails from './pages/ProductDetails';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/product-details/:id" component={ ProductDetails } />
          <Route path="/shopping-cart" component={ ShoppingCart } />
          <Route exact path="/" component={ Main } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
