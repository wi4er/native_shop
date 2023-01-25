class PopupHandler extends HTMLElement {

    popups = new Map();

    constructor() {
        super();

        for (const item of Array.from(this.querySelectorAll('[data-popup]'))) {
            this.popups.set(item.dataset['popup'], item);
        }
    }

    openPopup(name) {
        const popup = this.popups.get(name);

        if (!popup) {
            throw new Error('Popup not found!');
        }

        popup.classList.toggle('active');
    }

}

globalThis.customElements.define('popup-handler', PopupHandler);