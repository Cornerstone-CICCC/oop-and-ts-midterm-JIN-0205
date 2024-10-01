import { Component } from "../common/Component.js";

export class Header extends Component {
  render() {
    const header = document.createElement('header')
    header.innerHTML = `
      <div class='logo-wrapper'>
        <a href="#"><img class='logo-image' src="./images/GoodMart-_1__transparent.svg" alt="main logo"></a>
      </div>
      <a href="#cart"><div class='go-to-cart'>
        <img class='go-to-cart-image' src="./images/shopping-cart_transparent.svg" alt="go to cart">
      </div></a>
      <div class='page-top'><a href="#">TOP</a></div>
    `

    return header
  }
}