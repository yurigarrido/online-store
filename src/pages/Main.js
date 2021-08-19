import React, { Component } from 'react';
import ProductListing from '../components/ProductListing';
import ShoppingCartLink from '../components/ShoppingCartLink';
import InputAndButton from '../components/InputAndButton';
import * as api from '../services/api';
import Categories from '../components/Categories';
import Details from '../components/Details';
import HomeButton from '../components/HomeButton';

class Main extends Component {
  constructor() {
    super();

    this.state = {
      categories: [],
      searchTerm: '',
      items: [],
      cartItems: [],
      showFailSearch: false,
      showDetails: false,
      selectedProduct: {},
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

  handleOnClick = async (event) => {
    const { searchTerm } = this.state;
    event.preventDefault();
    await api.getProductsFromCategoryAndQuery('', searchTerm).then((objOfItems) => (
      this.setState({
        items: objOfItems.results,
        showFailSearch: true,
      })
    ));
    this.setState({
      showDetails: false,
    });
  }

  addToCart = async (newItemAdded) => {
    const { cartItems } = this.state;
    const alreadyIn = cartItems
      .some((item) => item.title === newItemAdded.title);
    if (!alreadyIn) {
      newItemAdded.quantity = 1;
      await this
        .setState((prvStt) => ({ cartItems: [...prvStt.cartItems, newItemAdded] }));
    } else {
      const { available_quantity: max } = newItemAdded;
      const newCart = cartItems
        .map((item) => {
          if (item.title === newItemAdded.title && max > item.quantity) {
            item.quantity += 1;
          }
          return item;
        });
      await this.setState({ cartItems: newCart });
    }
    this.saveLocalStorage('cartItems');
  }

  saveLocalStorage = (place = 'uniqueItems') => {
    const { cartItems } = this.state;
    localStorage.setItem(place, JSON.stringify(cartItems));
  }

  loadLocalStorage = () => {
    const { cartItems } = this.state;
    const recupered = JSON.parse(localStorage.getItem('cartItems'));
    if (recupered && recupered.length > 0) {
      recupered.forEach((item) => {
        if (!item.quantity) item.quantity = 1;
        cartItems.push(item);
      });
    }
  }

  searchCategory = async (id) => {
    await api.getProductsFromCategoryAndQuery(id, '').then((itemsCategory) => (
      this.setState({
        items: itemsCategory.results,
      })
    ));
  }

  selectProduct = (product) => {
    this.setState({
      showDetails: true,
      selectedProduct: product,
    });
  }

  onClickHomeButton = () => {
    this.setState({ showDetails: false });
  }

  render() {
    const {
      categories,
      items,
      showFailSearch,
      cartItems,
      showDetails,
      selectedProduct,
    } = this.state;
    const message = showFailSearch ? <p>Nenhum produto foi encontrado</p> : <> </>;
    const homeMessage = (
      <p data-testid="home-initial-message">
        Digite algum termo de pesquisa ou escolha uma categoria.
      </p>
    );
    if (!showDetails) {
      return (
        <div>
          <header className="header-container">
            <h1>Front-End Online Store</h1>
            <div className="header-content">
              <HomeButton onClickHomeButton={ this.onClickHomeButton } />
              <InputAndButton
                handleOnClick={ this.handleOnClick }
                onChange={ this.handleOnChange }
              />
              <ShoppingCartLink
                items={ cartItems }
              />
            </div>
          </header>
          <div className="main-content">
            <nav className="categories-container">
              {categories
                .map((category) => (<Categories
                  key={ category.id }
                  category={ category }
                  searchCategory={ () => this.searchCategory(category.id) }
                />))}
            </nav>
            <div className="products-container">
              {items.length <= 0 && homeMessage}
            </div>
            {items.length > 0 ? <ProductListing
              selectProduct={ this.selectProduct }
              items={ items }
              handleOnClick={ this.handleOnClick }
              handleOnChange={ this.handleOnChange }
              addToCart={ this.addToCart }
              saveLocalStorage={ this.saveLocalStorage }
            /> : message}
          </div>
        </div>
      );
    }
    return (
      <div>
        <header className="header-container">
          <h1>Nome do Site</h1>
          <div className="header-content">
            <HomeButton onClickHomeButton={ this.onClickHomeButton } />
            <InputAndButton
              handleOnClick={ this.handleOnClick }
              onChange={ this.handleOnChange }
            />
            <ShoppingCartLink
              items={ cartItems }
            />
          </div>
        </header>
        <Details selectedProduct={ selectedProduct } addToCart={ this.addToCart } />
      </div>
    );
  }
}

export default Main;
