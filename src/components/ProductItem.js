import { Component } from "../common/Component.js";

export class ProductItem extends Component {
  constructor(props) {
    super(props)
    this.handleAddToCart = this.handleAddToCart.bind(this)
  }
  handleAddToCart() {
    this.props.cartContext.addItem(this.props.product)
  }

  render() {
    const product = document.createElement('div')
    product.className = 'card'
    product.innerHTML = `

        <img class='product-image' src=${this.props.product.image} alt="${this.props.product.title}'s image">
        <div class="sentence">
          <h3 class='product-heading'>${this.props.product.title}</h3>
          <p>${this.props.product.description}</p>
          <p class='product-price'>$${this.props.product.price}</p>
          <a href="#cart"><button class="add-to-cart-btn">Add to Cart</button></a>
        </div>

    `

    product.querySelector('.add-to-cart-btn').addEventListener('click', this.handleAddToCart)

    return product;
  }
}