import { Component } from "../common/Component.js";
import { CartContext } from "../contexts/CartContext.js";
import { CartItem } from "./CartItem.js";

export class CartList extends Component {
  constructor(props) {
    super(props);
    this.state = { cart: [] };
    this.updateCart = this.updateCart.bind(this);
    this.props.cartContext.subscribe(this.updateCart);
    this.productsListElement = null;
  }

  updateCart(cart) {
    this.state.cart = cart;


    this.productsListElement.innerHTML = '';

    this.state.cart.forEach(item => {
      const cartItemComponent = new CartItem({ item, cartContext: this.props.cartContext });
      const cartItemElement = cartItemComponent.render();
      this.productsListElement.appendChild(cartItemElement);
    });

    const totalPrice = this.state.cart.reduce((total, item) => total + item.price * item.quantity, 0);
    const totalElement = document.createElement('p');
    totalElement.className = 'total-price'
    totalElement.textContent = `Total: $${totalPrice.toFixed(2)}`;
    this.productsListElement.appendChild(totalElement);
  }

  render() {
    const cartElement = document.createElement('div');
    cartElement.id = 'cart'
    cartElement.innerHTML = `
      <h3>Cart</h3>
      <ul class='cart-list'></ul>
    `;
    this.productsListElement = cartElement.querySelector('ul');
    return cartElement;
  }
}
