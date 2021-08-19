import React, { Component } from 'react';

export default class PaymentInfo extends Component {
  render() {
    return (
      <div className="payment-info">
        <h3>Método de Pagamento</h3>
        <label className="pay-label" htmlFor="pay">
          <label className="pay-label-group" htmlFor="pay">
            Boleto
            <div>
              <i className="fas fa-barcode" />
              <input
                type="radio"
                name="pay"
                placeholder="Email"
                value="bill"
                required
              />
            </div>
          </label>

          <label className="pay-label-group" htmlFor="pay">
            Cartão de Crédito
            <label htmlFor="pay">
              <i className="fab fa-cc-visa" />
              <input
                type="radio"
                name="pay"
                placeholder="Email"
                value="bill"
                required
              />
            </label>
            <label htmlFor="pay">
              <i className="fab fa-cc-mastercard" />
              <input
                type="radio"
                name="pay"
                placeholder="Email"
                value="bill"
                required
              />
            </label>
            <label htmlFor="pay">
              <i className="fab fa-cc-amex" />
              <input
                type="radio"
                name="pay"
                placeholder="Email"
                value="bill"
                required
              />
            </label>
          </label>
        </label>
      </div>
    );
  }
}
