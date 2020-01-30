const baseUrl = 'https://crudcrud.com/api/cfdbd8cb8ba84fa98d2f16f6cdd5b7ab/users';



const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const nameInput = document.querySelector('#name');
const btn = document.querySelector('.submit-button');
const errorElem = document.querySelector('.error-text');

const email = document.createElement('p');
const password = document.createElement('p');
const name = document.createElement('p');
const errText = document.createElement('p');
errorElem.append(email, name, password, errText);


// const form = document.forms[0];
// const inputs = [...document.querySelectorAll('input')];
// form.addEventListener('input', validateFields);
// form.addEventListener('submit', submitData);


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
    const em = email.textContent;
    const nam = name.textContent;
    const pass = password.textContent;
    if (em || nam || pass) {
        btn.setAttribute('disabled', 'disabled');
    }
    if (!em && !nam && !pass) {
        btn.removeAttribute('disabled');
    }
    if (emailInput.value === '' || nameInput.value === '' || passwordInput.value === '') {
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
    const working = validatorsByFields[fieldName];
    return working
        .map(valid => valid(value))
        .filter(errorText => errorText)
        .join('');
};

const editing = event => {
    errText.textContent = '';
    const typeOfInput = event.target.name;
    const errorText = validate(typeOfInput, event.target.value);
    password.textContent = errorText;
    reportValidity();
};
nameInput.addEventListener('input', editing);
emailInput.addEventListener('input', editing);
passwordInput.addEventListener('input', editing);





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
const formElem = document.querySelector('.login-form');
const onFormSubmit = event => {
    event.preventDefault();
    const formData = [...new FormData(formElem)]
        .reduce((acc, [field, value]) => ({...acc, [field]: value }), {});
    return fetch(baseUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(formData),
        }).then(() => {
            emailInput.value = '';
            nameInput.value = '';
            passwordInput.value = '';
            return fetch(baseUrl)
                .then(response => response.json())
                .then(array => {
                    alert(JSON.stringify(array));
                });
        })
        .catch(error => {
            errText.textContent = 'Failed to create user';
            return new Error(console.log(`${error}`));
        });
};
formElem.addEventListener('submit', onFormSubmit);