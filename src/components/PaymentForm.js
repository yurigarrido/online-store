import React, { Component } from 'react';
import PaymentInfo from './PaymentInfo';
import PersonalInfo from './PersonalInfo';
import './style/Payment.css';

class PaymentForm extends Component {
  render() {
    return (
      <div className="payment-form">
        <form autoComplete="off">
          <div>
            <PersonalInfo />
          </div>
          <div>
            <PaymentInfo />
          </div>
          <button type="submit" className="btn-comprar">
            Comprar
          </button>
        </form>
      </div>
    );
  }
}

export default PaymentForm;
