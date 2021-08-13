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
        atualizaEstadoPai,
      } = this.props;
    return (
      <div>
        {
          items
            .map((item) => (<ProductCard
              key={ item.id }
              atualizaEstadoPai={ atualizaEstadoPai }
              item={ item }
              available={ item.available_quantity }
              saveLocalStorage={ saveLocalStorage }
            />))
        }
      </div>
    );
  }
}

ProductListing.propTypes = {
  items: PropTypes.arrayOf({}).isRequired,
  saveLocalStorage: PropTypes.func.isRequired,
  atualizaEstadoPai: PropTypes.func.isRequired,
};

export default ProductListing;
