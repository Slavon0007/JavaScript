const baseUrl = 'https://crudcrud.com/api/cfdbd8cb8ba84fa98d2f16f6cdd5b7ab/users';

const submitBtnElem = document.querySelector('.submit-button');
const form = document.forms[0];
const inputs = [...document.querySelectorAll('input')];
const errorTextElem = document.querySelector('.error-text');

form.addEventListener('input', validateFields);
form.addEventListener('submit', submitData);

function validateFields() {
    if (form.reportValidity()) {
        submitBtnElem.disabled = false;
    } else {
        submitBtnElem.disabled = true;
    }
    errorTextElem.textContent = '';
};

function submitData(event) {
    event.preventDefault();
    const newUser = [...new FormData(form)]
        .reduce((acc, [field, value]) => ({...acc, [field]: value }), {});

    fetch(baseUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
            },
            body: JSON.stringify(newUser),
        })
        .then(response => response.json())
        .then(data => {
            inputs.map(elem => elem.value = '');
            submitBtnElem.disabled = true;
            alert(JSON.stringify(data));
        })
        .catch(error => {
            errorText.textContent = 'Failed to create user';
            return new Error(console.log(`${error}`));
        });
};