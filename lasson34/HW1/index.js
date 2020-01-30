const Url = 'https://crudcrud.com/api/cfdbd8cb8ba84fa98d2f16f6cdd5b7ab/users';

const emailInputElem = document.querySelector('#email');
const passwordInputElem = document.querySelector('#password');
const nameInputElem = document.querySelector('#name');
const btnElem = document.querySelector('.submit-button');
const form = document.forms[0];
const inputs = [...document.querySelectorAll('input')];
const errorTextElem = document.querySelector('.error-text');

form.addEventListener('input', validateFields);
form.addEventListener('submit', submitData);


const pEmail = document.createElement('p');
const pPassword = document.createElement('p');
const pName = document.createElement('p');
const pErrorText = document.createElement('p');
errorTextElem.append(pEmail, pName, pPassword, pErrorText);

const reportValidity = () => {
    const emailP = pEmail.textContent;
    const nameP = pName.textContent;
    const passwordP = pPassword.textContent;
    if (emailP || nameP || passwordP) {
        btnElem.setAttribute('disabled', 'disabled');
    }
    if (!emailP && !nameP && !passwordP) {
        btnElem.removeAttribute('disabled');
    }
    if (emailInputElem.value === '' || nameInputElem.value === '' || passwordInputElem.value === '') {
        btnElem.setAttribute('disabled', 'disabled');
    }
};
reportValidity();

const isRequiredPassword = value => value ? undefined : 'Required password';

const isRequiredName = value => value ? undefined : 'Required name';

const isRequiredEmail = value => value ? undefined : 'Required email';
const isEmail = value => value.includes('@') ? undefined : 'Should be an email';

const validatorsByFields = {
    email: [isRequiredEmail, isEmail],
    password: [isRequiredPassword],
    name: [isRequiredName],
};
const validate = (fieldName, value) => {
    const validators = validatorsByFields[fieldName];
    return validators
        .map(validator => validator(value))
        .filter(errorText => errorText)
        .join('');
};
const onInputChange = event => {
    pErrorText.textContent = '';
    const typeOfInput = event.target.name;
    const errorText = validate(typeOfInput, event.target.value);
    pPassword.textContent = errorText;
    reportValidity();
};
nameInputElem.addEventListener('input', onInputChange);
emailInputElem.addEventListener('input', onInputChange);
passwordInputElem.addEventListener('input', onInputChange);

function validateFields() {
    if (form.reportValidity()) {
        btnElem.disabled = false;
    } else {
        btnElem.disabled = true;
    }
};

function submitData(event) {
    event.preventDefault();
    const newUser = [...new FormData(form)]
        .reduce((acc, [field, value]) => ({...acc, [field]: value }), {});

    fetch(Url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
            },
            body: JSON.stringify(newUser),
        })
        .then(response => response.json())
        .then(data => {
            inputs.map(elem => elem.value = '');
            btnElem.disabled = true;
            alert(JSON.stringify(data));
        })
        .catch(error => {
            errorText.textContent = 'Failed to create user';
            return new Error(console.log(`${error}`));
        });

};