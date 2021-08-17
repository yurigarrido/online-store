import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';
//
class ProductListing extends React.Component {
  render() {
    const
      {
        items,
        saveLocalStorage,
        addToCart,
        selectProduct,
      } = this.props;
    return (
      <div>
        {
          items
            .map((item) => (<ProductCard
              key={ item.id }
              addToCart={ addToCart }
              item={ item }
              available={ item.available_quantity }
              saveLocalStorage={ saveLocalStorage }
              selectProduct={ selectProduct }
            />))
        }
      </div>
    );
  }
}

ProductListing.propTypes = {
  items: PropTypes.arrayOf({}).isRequired,
  saveLocalStorage: PropTypes.func.isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default ProductListing;
