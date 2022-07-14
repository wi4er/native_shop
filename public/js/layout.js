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
    // console.log(this.search);

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
    // this.button.onclick = this.handleBuy;
  }
}

window.customElements.define("product-price", ProductPrice);

class PageNotFound extends HTMLElement {

}

window.customElements.define("page-notfound", PageNotFound);


class LayoutSearch extends HTMLElement {
  constructor() {
    super();

    this.input = this.querySelector("input");
  }

  fetchData(needle) {
    fetch(`http://localhost:8085/search/?q=${needle}`)
      .then(res => res.json())
      .then(res => {
        console.log(res);


      })
  }


  handleEdit = event => {
    if (this.input.value.length > 3) {
      this.fetchData(this.input.value);
    }
  }

  connectedCallback() {
    this.input.oninput = this.handleEdit;
  }
}

window.customElements.define("layout-search", LayoutSearch);
