import React, { Component } from 'react';
import ProductListing from '../components/ProductListing';
import ShoppingCartLink from '../components/ShoppingCartLink';
import InputAndButton from '../components/InputAndButton';
import * as api from '../services/api';
import Categories from './Categories';

class Main extends Component {
  constructor() {
    super();
    this.handleOnClick = this.handleOnClick.bind(this);
    this.searchCategory = this.searchCategory.bind(this);

    this.state = {
      categories: [],
      searchTerm: '',
      items: [],
      addedToCar: [],
      showFailSearch: false,
    };
  }

  componentDidMount() {
    api.getCategories()
      .then((resolve) => this.setState({ categories: resolve }));
    this.loadLocalStorage();
  }

  componentDidUpdate() {
    this.saveLocalStorage();
  }

  componentWillUnmount() {
    this.saveLocalStorage('Products');
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
        showFailSearch: true,
      })
    ));
  }

  atualizaEstadoPai = (newItemAdded) => {
    const { addedToCar } = this.state;
    const alreadyIn = addedToCar
      .some((item) => item.title === newItemAdded.title);
    if (!alreadyIn) {
      if (newItemAdded.un) newItemAdded.un += 1;
      else newItemAdded.un = 1;
      this.setState((prvStt) => ({ addedToCar: [...prvStt.addedToCar, newItemAdded] }));
    }
  }

  saveLocalStorage = (place = 'mainItems') => {
    const { addedToCar } = this.state;
    localStorage.setItem(place, JSON.stringify(addedToCar));
  }

  loadLocalStorage = () => {
    const { addedToCar } = this.state;
    const recupered = JSON.parse(localStorage.getItem('cartItems'));
    if (recupered && recupered.length > 0) {
      recupered.forEach((item) => {
        addedToCar.push(item);
      });
    }
  }

  async searchCategory(id) {
    await api.getProductsFromCategoryAndQuery(id, '').then((itemsCategory) => (
      this.setState({
        items: itemsCategory.results,
      })
    ));
  }

  render() {
    const { categories, items, showFailSearch, addedToCar } = this.state;
    const message = showFailSearch ? <p>Nenhum produto foi encontrado</p> : <> </>;
    return (
      <div>
        <ShoppingCartLink
          items={ addedToCar }
        />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <InputAndButton
          handleOnClick={ this.handleOnClick }
          onChange={ this.handleOnChange }
        />
        <nav>
          <h5>Categorias:</h5>
          {categories
            .map((category) => (<Categories
              key={ category.id }
              category={ category }
              searchCategory={ () => this.searchCategory(category.id) }
            />))}
        </nav>
        {items.length > 0 ? <ProductListing
          items={ items }
          handleOnClick={ this.handleOnClick }
          handleOnChange={ this.handleOnChange }
          atualizaEstadoPai={ this.atualizaEstadoPai }
          saveLocalStorage={ this.saveLocalStorage }
        /> : message}
      </div>
    );
  }
}

export default Main;
