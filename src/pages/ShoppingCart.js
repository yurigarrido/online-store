import React from 'react';
import { Link } from 'react-router-dom';
import HomeButton from '../components/HomeButton';
import CartItem from '../components/CartItem';

class ShoppingCart extends React.Component {
  constructor() {
    super();
    this.state = {
      cartItems: [],
      showCart: false,
    };
  }

  componentDidMount() {
    this.loadLocalStorage();
  }

  componentDidUpdate() {
    this.saveLocalStorage();
    this.checkCartSize();
  }

  checkCartSize = () => {
    const { cartItems } = this.state;
    if (cartItems.length === 0 || !cartItems) {
      this.setState({ showCart: true });
    }
  }

  loadLocalStorage = () => {
    const { cartItems } = this.state;
    const recupered = JSON.parse(localStorage.getItem('uniqueItems'));
    if (recupered && recupered.length > 0) {
      recupered.forEach((item) => {
        if (!item.quantity) item.quantity = 1;
        cartItems.push(item);
      });
    }
    if (recupered) this.setState({ showCart: true });
  }

  saveLocalStorage = () => {
    const { cartItems } = this.state;
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }

  addOne = (newItem) => {
    const { cartItems } = this.state;
    const { available_quantity: max } = newItem;
    const newCart = [];
    cartItems.forEach((item) => {
      if (item.title === newItem.title && max > item.quantity) {
        item.quantity += 1;
      }
      newCart.push(item);
    });
    this.setState({ cartItems: newCart });
  }

  removeOne = (itemToRemove) => {
    const { cartItems } = this.state;
    const newCart = [];
    cartItems.forEach((item) => {
      if (item.title === itemToRemove.title && item.quantity > 1) {
        item.quantity -= 1;
      }
      newCart.push(item);
    });
    this.setState({ cartItems: newCart });
  }

  removeItem = (itemToRemove) => {
    const { cartItems } = this.state;
    const newCart = cartItems.filter((item) => item.title !== itemToRemove.title);
    this.setState({ cartItems: newCart });
  }

  render() {
    const { cartItems, showCart } = this.state;
    if (!showCart) {
      return (
        <div>
          <HomeButton />
          <p data-testid="shopping-cart-empty-message">
            Seu carrinho está vazio
          </p>

        </div>
      );
    }
    return (
      <div>
        <HomeButton />
        { cartItems.map((anAddedItem) => (
          <CartItem
            addOne={ this.addOne }
            removeOne={ this.removeOne }
            key={ anAddedItem.id }
            item={ anAddedItem }
            removeItem={ this.removeItem }
          />))}
        <Link to="/checkout">
          <button type="button" data-testid="checkout-products">
            Comprar
          </button>
        </Link>
      </div>
    );
  }
}

export default ShoppingCart;
