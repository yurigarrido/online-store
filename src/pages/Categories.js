import React from 'react';
import PropTypes from 'prop-types';

class Categories extends React.Component {
  render() {
    const { searchCategory, category: { name } } = this.props;
    return (
      <button onClick={ searchCategory } type="button">
        <li data-testid="category">{name}</li>
      </button>
    );
  }
}

Categories.propTypes = {
  category: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  searchCategory: PropTypes.func.isRequired,
};

export default Categories;
