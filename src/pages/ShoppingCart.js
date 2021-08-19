import React from 'react';
import { Link } from 'react-router-dom';
import HomeButton from '../components/HomeButton';
import CartItem from '../components/CartItem';
import Title from '../components/Title';
import InputAndButton from '../components/InputAndButton';
import Logo from '../components/Logo';
import '../components/style/ShoppingCart.css';

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

  checkCartSize = () => {
    const { cartItems } = this.state;
    if (cartItems.length === 0 || !cartItems) {
      this.setState({ showCart: false });
    } else {
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
    if (recupered && recupered.length > 0) this.setState({ showCart: true });
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

  removeItem = async (itemToRemove) => {
    const { cartItems } = this.state;
    const newCart = cartItems.filter((item) => item.title !== itemToRemove.title);
    await this.setState({ cartItems: newCart });
  }

  render() {
    const { cartItems, showCart } = this.state;
    // this.checkCartSize();
    const header = (
      <header>
        <div className="header-container">
          <div className="header-main-content">
            <Title />
            <InputAndButton
              handleOnClick={ this.handleOnClick }
              onChange={ this.handleOnChange }
            />
          </div>
          <div className="header-content">
            <HomeButton onClickHomeButton={ this.onClickHomeButton } />
          </div>
        </div>
      </header>
    );
    if (!showCart) {
      return (
        <div>
          { header }
          <div className="empty-cart">
            <Logo />
            <p
              className="empty-message"
              data-testid="shopping-cart-empty-message"
            >
              Seu carrinho está vazio
            </p>
          </div>
        </div>
      );
    }
    return (
      <div className="cart-items">
        {header}
        { cartItems.map((anAddedItem) => (
          <CartItem
            addOne={ this.addOne }
            removeOne={ this.removeOne }
            key={ anAddedItem.id }
            item={ anAddedItem }
            removeItem={ this.removeItem }
          />))}
        <Link to="/checkout">
          <button className="btn-comprar" type="button" data-testid="checkout-products">
            Comprar
          </button>
        </Link>
      </div>
    );
  }
}

export default ShoppingCart;
