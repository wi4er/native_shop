
class CommonLayout extends HTMLElement {
  constructor() {
    super();
    console.log("CREATE");
    console.log(arguments);

  }
  connectedCallback() {
    console.log("CONNECT");
    console.log(this);




  }
}

window.customElements.define('common-layout', CommonLayout);


