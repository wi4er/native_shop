
class CommonLayout extends HTMLElement {
  constructor() {
    super();

    this.onScroll = this.onScroll.bind(this);

    this.search = this.querySelector("[data-search]");
  }

  onScroll() {
    console.log("SCROLL");

  }

  connectedCallback() {
    console.log(this.search);

    window.onscroll = this.onScroll;
  }

  disconnectedCallback() {

  }
}

window.customElements.define("common-layout", CommonLayout);


class ProductPrice extends HTMLElement {
  constructor() {
    super();

    this.button = this.querySelector("[data-buy]")
    this.id = this.dataset.id;
  }

  handleBuy = () => {
    console.log(this.id);


  }

  connectedCallback() {
    this.button.onclick = this.handleBuy;
  }
}

window.customElements.define("product-price", ProductPrice);
