import React, { Component } from 'react';
import ShoppingCartLink from '../ShoppingCartLink';
// import PropTypes from 'prop-types';
import * as api from '../services/api';
import Categories from './Categories';

class Main extends Component {
  constructor() {
    super();

    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    api.getCategories()
      .then((resolve) => this.setState({ categories: resolve }));
  }

  render() {
    const { categories } = this.state;
    return (
      <div>
        <ShoppingCartLink />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <nav>
          <h5>Categorias:</h5>
          {categories
            .map((category) => <Categories key={ category.id } category={ category } />)}
        </nav>
      </div>
    );
  }
}

// Main.propTypes = {

// };

export default Main;
