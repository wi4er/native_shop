class PopupHandler extends HTMLElement {

    popups = new Map();

    constructor() {
        super();

        for (const item of Array.from(this.querySelectorAll('[data-popup]'))) {
            this.popups.set(item.dataset['popup'], item);
        }
    }

    openPopup(name) {
        for (const [key, popup] of this.popups) {
            if (key === name) {
                popup.classList.toggle('active');
            } else {
                popup.classList.remove('active');
            }
        }
    }

    closePopup() {
        for (const [key, popup] of this.popups) {
            popup.classList.remove('active');
        }
    }

}

globalThis.customElements.define('popup-handler', PopupHandler);