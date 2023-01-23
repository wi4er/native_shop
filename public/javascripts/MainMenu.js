class MainMenu extends HTMLElement {

    constructor(props) {
        super();

        this.tabs = Array.from(this.querySelectorAll('.tab-item'));
        this.popupHandler = document.querySelector('popup-handler');

        this.querySelector('#cart').addEventListener('click', this.openCart);
        this.querySelector('#personal').addEventListener('click', this.openPersonal);
    }

    openCart = () => {
        this.popupHandler.openPopup('cart');
    }

    openPersonal = () => {
        this.popupHandler.openPopup('authorization');
    }

}


globalThis.customElements.define('main-menu', MainMenu);