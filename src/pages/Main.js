import React, { Component } from 'react';
import ProductListing from '../components/ProductListing';
import ShoppingCartLink from '../ShoppingCartLink';
// import PropTypes from 'prop-types';
import * as api from '../services/api';
import Categories from './Categories';

class Main extends Component {
  constructor() {
    super();
    this.handleOnClick = this.handleOnClick.bind(this);
    this.state = {
      categories: [],
      searchTerm: '',
      items: [],
    };
  }

  componentDidMount() {
    api.getCategories()
      .then((resolve) => this.setState({ categories: resolve }));
  }

  handleOnChange = (e) => {
    this.setState({
      searchTerm: e.target.value,
    });
  }

  async handleOnClick(event) {
    const { searchTerm } = this.state;
    event.preventDefault();
    await api.getProductsFromCategoryAndQuery('', searchTerm).then((objOfItems) => (
      this.setState({
        items: objOfItems.results,
      })
    ));
  }

  render() {
    const { categories, items } = this.state;
    return (
      <div>
        <ShoppingCartLink />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <ProductListing
          items={ items }
          handleOnClick={ this.handleOnClick }
          handleOnChange={ this.handleOnChange }
        />
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
