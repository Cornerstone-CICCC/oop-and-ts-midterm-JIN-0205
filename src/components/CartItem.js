
import { Component } from "../common/Component.js";
import { CartContext } from "../contexts/CartContext.js";

export class CartItem extends Component {
  constructor(props) {
    super(props);
    this.state = { count: this.props.item.quantity };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.itemNumberElement = null;
  }

  increment() {
    this.props.cartContext.addItem(this.props.item)
    this.updateItemNumber();
  }

  decrement() {
    this.props.cartContext.minusItem(this.props.item)
    this.updateItemNumber();
  }

  deleteItem() {
    this.props.cartContext.deleteItem(this.props.item.id);
  }

  updateItemNumber() {
    this.itemNumberElement.textContent = this.state.count;
  }

  render() {
    const { item } = this.props;
    const listItem = document.createElement('li');
    listItem.className = 'cart-item'
    listItem.id = item.id;
    listItem.innerHTML = `
      <div class="cart-image-wrapper">
        <img class='cart-image' src="${item.image}" alt="product image">
      </div>
      <div class="texts">
        <h3 class="product-title">${item.title}</h3>
        <p class="product-description">${item.description}</p>
        <p class="product-price">$${item.price}</p>
        <div class="cart-buttons">
          <div class="counter-buttons">
            <button class="decrement-btn">-</button>
            <p class="item-number">${this.state.count}</p>
            <button class="increment-btn">+</button>
          </div>
          <button class="delete-btn">Delete</button>
        </div>
      </div>
    `;

    this.itemNumberElement = listItem.querySelector('.item-number');
    const decrementBtn = listItem.querySelector('.decrement-btn');
    const incrementBtn = listItem.querySelector('.increment-btn');
    const deleteBtn = listItem.querySelector('.delete-btn');

    decrementBtn.addEventListener('click', this.decrement);
    incrementBtn.addEventListener('click', this.increment);
    deleteBtn.addEventListener('click', this.deleteItem);

    return listItem;
  }
}
