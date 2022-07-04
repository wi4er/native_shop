
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

window.customElements.define('common-layout', CommonLayout);


