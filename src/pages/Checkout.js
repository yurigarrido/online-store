import React, { Component } from 'react';
import HomeButton from '../components/HomeButton';
import InputAndButton from '../components/InputAndButton';
import PaymentForm from '../components/PaymentForm';
import ResumedItem from '../components/ResumedItem';
import Title from '../components/Title';
import '../components/style/Checkout.css';

class Checkout extends Component {
  constructor() {
    super();

    this.state = {
      cartItems: [],
      showPayment: false,
    };
  }

  componentDidMount() {
    this.loadLocalStorage();
  }

  loadLocalStorage = () => {
    const { cartItems } = this.state;
    const recupered = JSON.parse(localStorage.getItem('cartItems'));
    if (recupered && recupered.length > 0) {
      recupered.forEach((item, index) => {
        cartItems.push(item);
        if (!cartItems[index].quantity) {
          cartItems[index].quantity = 1;
        }
      });
    }
    this.setState({ showPayment: true });
  }

  render() {
    const { showPayment, cartItems } = this.state;
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
    let totalPrice = 0;
    cartItems.forEach((item) => {
      const { price } = item;
      let { quantity } = item;
      if (!quantity) quantity = 1;
      totalPrice += (price * quantity);
    });
    totalPrice = (Math
      .round((totalPrice + Number.EPSILON) * 100) / 100).toFixed(2);
    if (showPayment) {
      return (
        <div>
          { header }
          {cartItems.map((item) => <ResumedItem key={ item.id } item={ item } />)}
          <p className="total-price">{`Total da Compra: ${totalPrice}`}</p>
          <PaymentForm />
        </div>
      );
    }
    return <p>Carregando</p>;
  }
}

export default Checkout;
