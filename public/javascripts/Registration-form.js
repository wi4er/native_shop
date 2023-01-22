class RegistrationForm extends HTMLElement {

    constructor(props) {
        super();

        this.form = this.querySelector('form');
        this.form.onsubmit = this.handleSubmit
    }

    toValues() {
        const values = {};

        for (const input of this.form) {
            values[input.name] = input.value;
        }

        return values;
    }

    handleSubmit = (event) => {
        const values = this.toValues();

        fetch('http://localhost:3000/auth', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                login: values.email,
                password: values.password,
            },
        })
            .then(res => res.json())
            .then(res => {
                console.log(res)
            })

        event.preventDefault();
    }

    connectedCallback() {

    }

}


globalThis.customElements.define('registration-form', RegistrationForm);