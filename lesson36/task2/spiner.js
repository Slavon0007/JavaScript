export { showSpinner, hideSpinner };

const spinnerElem = document.querySelector('.spinner');

const showSpinner = () => {
    spinnerElem.classList.remove('spinner_hidden');
}

const hideSpinner = () => {
    spinnerElem.classList.add('spinner_hidden');
}