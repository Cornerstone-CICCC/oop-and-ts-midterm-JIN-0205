import { App } from "./components/App.js";
import { CartContext } from "./contexts/CartContext.js";

const root = document.querySelector('#app')

const cartContext = new CartContext()
const app = new App({ cartContext })

app.mount(root)

function toTopBtn() {
  return ( window.scrollY !== undefined ) ? window.scrollY: document.documentElement.scrollTop;
}

const pageTopBtn = document.querySelector('.page-top')


window.onscroll = function() {
  ( toTopBtn() > 200 ) ? pageTopBtn.classList.add( 'is-show' ): pageTopBtn.classList.remove( 'is-show' );
};
