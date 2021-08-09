import React from 'react';
import PropTypes from 'prop-types';

class Categories extends React.Component {
  render() {
    const { category: { name } } = this.props;
    return (
      <li data-testid="category">{name}</li>
    );
  }
}

Categories.propTypes = {
  category: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default Categories;
