import React from 'react';
import { Link } from 'react-router-dom';
// import AddedItem from '../components/AddedItem';
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
        {/* { cartItems.map((anAddedItem) => (
          <AddedItem
            key={ anAddedItem.id }
            item={ anAddedItem }
          />))} */}
        { cartItems.map((anAddedItem) => (
          <CartItem
            addOne={ this.addOne }
            removeOne={ this.removeOne }
            key={ anAddedItem.id }
            item={ anAddedItem }
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
