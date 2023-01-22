class MainMenu extends HTMLElement {

    constructor(props) {
        super();

        this.tabs = Array.from(this.querySelectorAll('.tab-item'));
        this.popupHandler = document.querySelector('popup-handler');

        this.cart = this.querySelector('#cart');
        this.cart.addEventListener('click', this.openCart);
    }

    openCart = () => {
        this.popupHandler.openPopup('cart');
    }

}


globalThis.customElements.define('main-menu', MainMenu);