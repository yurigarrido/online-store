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
    // const { thumbnail, title, price, id, shipping } = item;
    const { thumbnail, title, price, shipping } = item;
    return (
      <section data-testid="product">
        <h3>
          { title }
        </h3>
        {shipping.free_shipping && <h5 data-testid="free-shipping">FRETE GRÁTIS</h5>}
        {/* <Link data-testid="product-detail-link" to={ `/product-details/${id}` }>
          <img src={ thumbnail } alt={ title } />
        </Link> */}
        <Link
          to="/"
          data-testid="product-detail-link"
          onClick={ () => selectProduct(item) }
        >
          <img src={ thumbnail } alt={ title } />
        </Link>
        <p>
          { price }
        </p>
        <div>
          <ButtonAddToCard
            addToCart={ addToCart }
            item={ item }
            available={ available }
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
    shipping: PropTypes.shape({
      free_shipping: PropTypes.bool,
    }).isRequired,
  }).isRequired,
  addToCart: PropTypes.func.isRequired,
  available: PropTypes.number.isRequired,
};
