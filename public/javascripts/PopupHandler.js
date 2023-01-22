class PopupHandler extends HTMLElement {

    constructor(props) {
        super();

        console.log(this)
    }

}

globalThis.customElements.define('popup-handler', PopupHandler);