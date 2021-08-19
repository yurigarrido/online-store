import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from './pages/Main';
import ShoppingCart from './pages/ShoppingCart';
import Checkout from './pages/Checkout';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/shopping-cart" component={ ShoppingCart } />
          <Route path="/checkout" component={ Checkout } />
          <Route exact path="/" component={ Main } />
        </Switch>
      </BrowserRouter>
      <footer>
        <h4>Desenvolvido por</h4>
        <a href="https://github.com/vdionysio">Vinícius Dionysio,</a>
        <a href="https://github.com/matheushtc">Matheus Henrique,</a>
        <a href="https://github.com/emidioreb">Emídio Rebouças,</a>
        <a href="https://github.com/andregraczyk">André Graczyk e</a>
        <a href="https://github.com/yurigarrido">Yuri Garrido</a>
      </footer>
    </div>
  );
}

export default App;
