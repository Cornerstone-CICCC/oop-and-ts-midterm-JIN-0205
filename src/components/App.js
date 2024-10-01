import { Component } from "../common/Component.js";
import { Header } from "./Header.js";
import { Footer } from "./Footer.js";
import { ProductList } from "./ProductList.js";
import { CartList } from "./CartList.js";               

export class App extends Component {
  render() {
    const appContainer = document.createElement('div')
    appContainer.className = 'container'
    appContainer.innerHTML = `
    <div class="header_wrapper"></div>
    <div class='space-holder'></div>
    <main>
      <h2>Products</h2>
    </main>
    <aside></aside>
    
    <div class="footer_wrapper"></div>
    `

    const header = new Header().render()
    const footer = new Footer().render()
    const cartList = new CartList({ cartContext: this.props.cartContext }).render()
    const productList = new ProductList({ cartContext: this.props.cartContext })


    appContainer.querySelector('.header_wrapper').appendChild(header)
    appContainer.querySelector('.footer_wrapper').appendChild(footer)
    appContainer.querySelector('aside').appendChild(cartList)


    productList.mount(appContainer.querySelector('main'))


    return appContainer
  }
}