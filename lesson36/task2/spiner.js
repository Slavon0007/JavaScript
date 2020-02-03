const spinerElem = document.querySelector('.spinner');

export const hideSpinner = () => {
    spinerElem.classList.remove('spinner_hiden');
};

export const showSpinner = () => {
    spinerElem.classList.add('spinner_hiden');
};