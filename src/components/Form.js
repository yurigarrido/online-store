import React, { Component } from 'react';
import Evaluation from './Evaluation';

class Form extends Component {
  render() {
    return (
      <form autoComplete="off" className="evaluation">
        <h3>Avaliações</h3>
        <input
          required
          autoComplete={ false }
          type="text"
          name="email"
          placeholder="Email"
        />
        <Evaluation />
        <textarea
          name="description"
          cols="50"
          rows="7"
          placeholder="Mensagem(opcional)"
          data-testid="product-detail-evaluation"
        />
        <button className="btn-check btn-eval" type="submit">Avaliar</button>
      </form>
    );
  }
}

export default Form;
