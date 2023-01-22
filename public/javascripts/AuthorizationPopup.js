class AuthorizationPopup extends HTMLElement {

    constructor() {
        super();

        this.form = this.querySelector('form');
        this.form.onsubmit = this.handleSubmit;
    }

    toValues() {
        const values = {};

        for (const input of this.form) {
            values[input.name] = input.value;
        }

        return values;
    }

    handleSubmit = event => {
        event.preventDefault();
        const values = this.toValues();

        fetch('http://localhost:3000/auth', {
            headers: {
                'content-type': 'application/json',
                password: values.password,
                login: values.email,
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
            .catch(reason => {
                console.log(reason)
            });
    }

}


globalThis.customElements.define('authorization-form', AuthorizationPopup);


