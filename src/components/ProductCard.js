import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ButtonAddToCard from './ButtonAddToCard';

class ProductCard extends React.Component {
  render() {
    const
      {
        item,
        addToCart,
        available,
        selectProduct,
      } = this.props;
    const { thumbnail, title, price, shipping } = item;
    const priceRound = (Math.round((price + Number.EPSILON) * 100) / 100).toFixed(2);
    return (
      <section className="product-card-container" data-testid="product">
        <div className="card-header">
          <h3 className="card-title">
            { title }
          </h3>
          {shipping.free_shipping
          && <h5 className="card-shipping" data-testid="free-shipping">FRETE GRÁTIS</h5>}
        </div>
        <Link
          to="/"
          data-testid="product-detail-link"
          onClick={ () => selectProduct(item) }
        >
          <img className="card-thumbnail" src={ thumbnail } alt={ title } />
        </Link>
        <hr />
        <p className="card-price">
          {`R$ ${priceRound}`}
        </p>
        <ButtonAddToCard
          addToCart={ addToCart }
          item={ item }
          available={ available }
        />
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
    shipping: PropTypes.shape({
      free_shipping: PropTypes.bool,
    }).isRequired,
  }).isRequired,
  addToCart: PropTypes.func.isRequired,
  selectProduct: PropTypes.func.isRequired,
  available: PropTypes.number.isRequired,
};
