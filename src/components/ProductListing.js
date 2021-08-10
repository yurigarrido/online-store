import React from 'react';
import * as api from '../services/api';
import InputAndButton from './InputAndButton';
import ProductCard from './ProductCard';

class ProductListing extends React.Component {
  constructor() {
    super();
    this.state = {
      searchTerm: '',
      itens: [],
    };
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnChange = (e) => {
    this.setState({
      searchTerm: e.target.value,
    });
  }

  async handleOnClick(event) {
    const { searchTerm } = this.state;
    event.preventDefault();
    await api.getProductsFromCategoryAndQuery('', searchTerm).then((objOfItens) => (
      this.setState({
        itens: objOfItens.results,
      })
    ));
  }

  render() {
    const { itens } = this.state;
    if (itens.length === 0) {
      return (
        <div>
          <InputAndButton
            handleOnClick={ this.handleOnClick }
            onChange={ this.handleOnChange }
          />
          <p> Nenhum produto foi encontrado </p>
        </div>
      );
    }

    return (
      <div>
        <InputAndButton
          handleOnClick={ this.handleOnClick }
          onChange={ this.handleOnChange }
        />
        {
          itens
            .map((iten) => (<ProductCard key={ iten.id } iten={ iten } />))
        }
      </div>
    );
  }
}

export default ProductListing;
