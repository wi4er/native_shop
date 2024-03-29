class MainMenu extends HTMLElement {

    constructor(props) {
        super();

        this.tabs = Array.from(this.querySelectorAll('.tab-item'));
        this.popupHandler = document.querySelector('popup-handler');

        this.querySelector('#cart').addEventListener('click', this.openCart);
        this.querySelector('#personal').addEventListener('click', this.openPersonal);

        fetch('/api/myself').then(res => res.json()).then(res => {
            console.log(res)
        });
    }

    openCart = () => {
        this.popupHandler.openPopup('cart');
    }

    openPersonal = () => {
        this.popupHandler.openPopup('registration');
    }

}


globalThis.customElements.define('main-menu', MainMenu);