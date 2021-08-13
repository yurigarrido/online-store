import React, { Component } from 'react';

class PaymentForm extends Component {
  render() {
    return (
      <div>
        <form>
          <label htmlFor="full-name">
            <input
              type="text"
              name="full-name"
              placeholder="Nome completo"
              data-testid="checkout-fullname"
              required
            />
          </label>
          <label htmlFor="email">
            <input
              type="email"
              name="email"
              placeholder="Email"
              data-testid="checkout-email"
              required
            />
          </label>
          <label htmlFor="cpf">
            <input
              type="text"
              name="cpf"
              placeholder="CPF"
              data-testid="checkout-cpf"
            />
          </label>
          <label htmlFor="telephone">
            <input
              type="text"
              name="telephone"
              placeholder="Telefone"
              data-testid="checkout-phone"
            />
          </label>
          <label htmlFor="cep">
            <input
              type="text"
              name="cep"
              placeholder="CEP"
              data-testid="checkout-cep"
            />
          </label>
          <label htmlFor="address">
            <input
              type="text"
              name="address"
              placeholder="Endereço"
              data-testid="checkout-address"
            />
          </label>
        </form>
      </div>
    );
  }
}

export default PaymentForm;
