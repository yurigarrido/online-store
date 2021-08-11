import React, { Component } from 'react';
import Evaluation from './Evaluation';
// import PropTypes from 'prop-types';

class Form extends Component {
  render() {
    return (
      <form>
        <h3>Avaliações</h3>
        <input type="text" name="email" placeholder="Email" />
        <Evaluation />
        <textarea
          name="description"
          cols="50"
          rows="7"
          placeholder="Mensagem(opcional)"
          data-testid="product-detail-evaluation"
        />
        <button type="submit">Avaliar</button>
      </form>
    );
  }
}

// Form.propTypes = {
//
// };

export default Form;
