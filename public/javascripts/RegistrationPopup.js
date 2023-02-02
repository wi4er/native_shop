class RegistrationPopup extends HTMLElement {

    constructor() {
        super();

        this.form = this.querySelector('form');
        this.form.onsubmit = this.handleSubmit;
        this.querySelector('[data-next]').onclick = this.handleNext;
        this.poputHandler = document.querySelector('popup-handler');
    }

    toValues() {
        const values = {};

        for (const input of this.form) {
            values[input.name] = input.value;
        }

        return values;
    }

    setError(field, error) {
        const inputLabel = this.querySelector(`[for=${field}]`);
        const errorDiv = this.querySelector(`[for=${field}] + [data-error]`);

        errorDiv.innerHTML = error;
        inputLabel.classList.add('error');
    }

    handleNext = () => this.poputHandler.openPopup('authorization');

    handleSubmit = (event) => {
        const values = this.toValues();
        event.preventDefault();

        fetch('http://localhost/api/myself', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                login: values.email,
                password: values.password,
            },
        })
            .then(res => res.json().then(data => {
                if (res.status !== 201) {
                    this.setError(data.field, data.message)
                } else {
                    location.reload();
                }
            }));
    }

}

globalThis.customElements.define('registration-form', RegistrationPopup);