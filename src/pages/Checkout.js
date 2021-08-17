import React, { Component } from 'react';
import HomeButton from '../components/HomeButton';
import PaymentForm from '../components/PaymentForm';
import ResumedItem from '../components/ResumedItem';

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
    const recupered = JSON.parse(localStorage.getItem('mainItems'));
    if (recupered && recupered.length > 0) {
      recupered.forEach((item, index) => {
        cartItems.push(item);
        if (!cartItems[index].un) {
          cartItems[index].un = 1;
        }
      });
    }
    this.setState({ showPayment: true });
  }

  render() {
    const { showPayment, cartItems } = this.state;
    let totalPrice = 0;
    cartItems.forEach((item) => {
      const { price, un } = item;
      totalPrice += (price * un);
    });
    if (showPayment) {
      return (
        <div>
          <HomeButton onClickHomeButton={ () => {} } />
          {cartItems.map((item) => <ResumedItem key={ item.id } item={ item } />)}
          <p>{`Total da Compra: ${totalPrice}`}</p>
          <PaymentForm />
        </div>
      );
    }
    return <p>Carregando</p>;
  }
}

export default Checkout;
