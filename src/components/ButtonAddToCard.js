import React from 'react';
import PropTypes from 'prop-types';
import { string } from 'yargs';

class ButtonAddToCard extends React.Component {
  render() {
    const { atualizaEstadoPai, item } = this.props;
    return (
      <button
        data-testid="product-add-to-cart"
        onClick={ () => {
          atualizaEstadoPai(item);
        } }
        type="submit"
      >
        Adicionar ao carrinho
      </button>
    );
  }
}

export default ButtonAddToCard;

ButtonAddToCard.propTypes = {
  atualizaEstadoPai: PropTypes.func.isRequired,
  item: PropTypes.arrayOf(string).isRequired,
};
