import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ButtonAddToCard from './ButtonAddToCard';

class ProductCard extends React.Component {
  render() {
    const
      {
        item,
        atualizaEstadoPai,
        saveLocalStorage,
      } = this.props;
    const { thumbnail, title, price, id } = item;
    return (
      <section data-testid="product">
        <h3>
          { title }
        </h3>
        <Link data-testid="product-detail-link" to={ `/product-details/${id}` }>
          <img src={ thumbnail } alt={ title } />
        </Link>
        <p>
          { price }
        </p>
        <div>
          <ButtonAddToCard
            atualizaEstadoPai={ atualizaEstadoPai }
            item={ item }
            saveLocalStorage={ saveLocalStorage }
          />
        </div>
      </section>
    );
  }
}

export default ProductCard;

ProductCard.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
    id: PropTypes.string,
  }).isRequired,
  atualizaEstadoPai: PropTypes.func.isRequired,
  saveLocalStorage: PropTypes.func.isRequired,
};
