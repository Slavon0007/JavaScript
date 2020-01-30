const Url = 'https://crudcrud.com/api/cfdbd8cb8ba84fa98d2f16f6cdd5b7ab/users';

const emailInput = document.querySelector('#email');
const passdInput = document.querySelector('#password');
const nameInput = document.querySelector('#name');
const btn = document.querySelector('.submit-button');
// const form = document.forms[0];
// const inputs = [...document.querySelectorAll('input')];
const errorTextElem = document.querySelector('.error-text');

form.addEventListener('input', validateFields);
form.addEventListener('submit', submitData);


const email = document.createElement('p');
const pass = document.createElement('p');
const name = document.createElement('p');
const error = document.createElement('p');
errorTextElem.append(email, name, pass, error);


// function validateFields() {
//     if (form.reportValidity()) {
//         btnElem.disabled = false;
//     } else {
//         btnElem.disabled = true;
//     }
// errorTextElem.append.textContent = 'isRequiredEmail';
// errorTextElem.append.textContent = 'isRequiredName';
// errorTextElem.append.textContent = 'isRequiredPassword';
// };

const reportValidity = () => {
    const emailInput = email.textContent;
    const nameP = name.textContent;
    const passwordP = pass.textContent;
    if (emailInput || nameP || passwordP) {
        btn.setAttribute('disabled', 'disabled');
    }
    if (!emailInput && !nameP && !passwordP) {
        btn.removeAttribute('disabled');
    }
    if (emailInput.value === '' || nameInput.value === '' || passdInput.value === '') {
        btn.setAttribute('disabled', 'disabled');
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
    error.textContent = '';
    const typeOfInput = event.target.name;
    const errorText = validate(typeOfInput, event.target.value);
    pass.textContent = errorText;
    reportValidity();
};
nameInput.addEventListener('input', onInputChange);
emailInput.addEventListener('input', onInputChange);
passdInput.addEventListener('input', onInputChange);



// function submitData(event) {
//     event.preventDefault();
//     const newUser = [...new FormData(form)]
//         .reduce((acc, [field, value]) => ({...acc, [field]: value }), {});

//     fetch(Url, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json;charset=utf-8',
//             },
//             body: JSON.stringify(newUser),
//         })
//         .then(response => response.json())
//         .then(data => {
//             inputs.map(elem => elem.value = '');
//             btnElem.disabled = true;
//             alert(JSON.stringify(data));
//         })
//         .catch(error => {
//             errorText.textContent = 'Failed to create user';
//             return new Error(console.log(`${error}`));
//         });

};