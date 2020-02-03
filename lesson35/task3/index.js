import { renderUserData, fetchRepositories } from "./user";
import { fetchUserData } from "./geteways";
import { renderRepos, cleanRepoList } from "./repos.js";
import { showSpinner, hideSpinner } from "./spiner.js";





const defultUsr = {
    avatar_url: 'https://avatar3.githubusercontent.com/u10001',
    name: '',
    location: '',
};

renderUserData(defultUsr);

const showUserBtnElem = document.querySelector('.name-form__btn');
const userNameInputElem = document.querySelector('.name-form__input');


const onSerchUser = () => {
    showSpinner();
    cleanRepoList();
    const userName = userNameInputElem.value;
    fetchUserData(userName)
        .then(uerData => {
            renderUserData(userData);
            return userData.repos_url;
        })
        .then(url => fetchRepositories(url))
        .then(reposList => {
            renderRepos(reposList);
            hideSpinner();
        })
        .catch(err => {
            hideSpinner();
            alert(err.massage);
        });
};

showUserBtnElem.addEventListener('click', onSerchUser);