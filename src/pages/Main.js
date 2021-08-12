import React, { Component } from 'react';
import ProductListing from '../components/ProductListing';
import ShoppingCartLink from '../components/ShoppingCartLink';
// import PropTypes from 'prop-types';
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
    };
  }

  componentDidMount() {
    api.getCategories()
      .then((resolve) => this.setState({ categories: resolve }));
  }

  componentDidUpdate() {
    this.saveLocalStorage();
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

  atualizaEstadoPai = (newItemAdded) => {
    this.setState((prvStt) => ({ addedToCar: [...prvStt.addedToCar, newItemAdded] }));
  }

   saveLocalStorage = () => {
     const { addedToCar } = this.state;
     localStorage.setItem('itemCarr', JSON.stringify(addedToCar));
   }

   async searchCategory(id) {
     await api.getProductsFromCategoryAndQuery(id, '').then((itemsCategory) => (
       this.setState({
         items: itemsCategory.results,
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
           atualizaEstadoPai={ this.atualizaEstadoPai }
           saveLocalStorage={ this.saveLocalStorage }
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
       </div>
     );
   }
}

// Main.propTypes = {

// };

export default Main;
