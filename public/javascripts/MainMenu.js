class MainMenu extends HTMLElement {

    constructor(props) {
        super();


        this.tabs = Array.from(this.querySelectorAll('.tab-item'));
    }

}


globalThis.customElements.define('main-menu', MainMenu);