import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ResumedItem extends Component {
  render() {
    const { item } = this.props;
    const round = (num) => (Math
      .round((num + Number.EPSILON) * 100) / 100).toFixed(2);
    return (
      <div className="resumed-item">
        <img src={ item.thumbnail } alt={ item.title } />
        <div className="resumed-item-content">
          <p>{item.title}</p>
          <p>{`Preço R$ ${round(item.price)}`}</p>
          <p>{`unidades - ${item.quantity}`}</p>
          <p>
            {`Total - R$ ${round(item.quantity * item.price)}`}
          </p>
        </div>
      </div>
    );
  }
}

ResumedItem.propTypes = {
  item: PropTypes.shape({
    thumbnail: PropTypes.string,
    title: PropTypes.string,
    quantity: PropTypes.number,
    price: PropTypes.number,
  }).isRequired,
};

export default ResumedItem;
