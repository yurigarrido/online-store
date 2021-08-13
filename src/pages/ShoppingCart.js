import React from 'react';
import { Link } from 'react-router-dom';
import AddedItem from '../components/AddedItem';
import ShoppingCartLink from '../components/ShoppingCartLink';

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
    const recupered = JSON.parse(localStorage.getItem('mainItems'));
    if (recupered && recupered.length > 0) {
      recupered.forEach((item) => {
        cartItems.push(item);
      });
    }
    if (recupered) this.setState({ showCart: true });
  }

  saveLocalStorage = () => {
    const { cartItems } = this.state;
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }

  render() {
    const { cartItems, showCart } = this.state;
    if (!showCart) {
      return (
        <div>
          <p data-testid="shopping-cart-empty-message">
            Seu carrinho está vazio
          </p>

        </div>
      );
    }
    return (
      <div>
        <ShoppingCartLink />
        { cartItems.map((anAddedItem) => (
          <AddedItem
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
