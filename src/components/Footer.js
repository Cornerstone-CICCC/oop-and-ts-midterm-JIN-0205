import { Component } from "../common/Component.js";

export class Footer extends Component {
  render() {
    const footer = document.createElement('footer')
    footer.innerHTML = `
      <div class="footer-logo-wrapper">
        <img class='footer-logo' src="./images/GoodMart-_1__transparent.svg" alt="main logo">
      </div>
      <p>Copyright 2024. All rights served</p>
    `
    return footer
  }
}