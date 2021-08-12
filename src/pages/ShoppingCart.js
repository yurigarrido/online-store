import React from 'react';
import ListOfAddedItems from '../components/ListOfAddedItems';
import ShoppingCartImg from '../components/ShoppingCartImg';
import ShoppingCartLink from '../components/ShoppingCartLink';

class ShoppingCart extends React.Component {
  constructor() {
    super();
    this.state = {
      loadLocSto: [],
    };
  }

  loadLocalStorage = () => {
    const { loadLocSto } = this.state;
    const recupered = JSON.parse(localStorage.getItem('itemCarr'));
    if (recupered !== null && recupered.length > 0) {
      recupered.forEach((item) => {
        loadLocSto.push(item);
      });
    }
  }

  render() {
    this.loadLocalStorage();
    const { loadLocSto } = this.state;
    console.log(loadLocSto.length);
    if (loadLocSto.length === 0) {
      return (
        <div>
          <ShoppingCartLink />
          <p data-testid="shopping-cart-empty-message">
            Seu carrinho está vazio
          </p>

        </div>
      );
    }
    return (
      <div>
        <ShoppingCartImg />
        { loadLocSto.map((anAddedItem) => (
          <ListOfAddedItems
            anAddedItem={ anAddedItem }
            loadLocSto={ loadLocSto }
            key={ anAddedItem.title }
          />
        ))}
      </div>
    );
  }
}

export default ShoppingCart;
