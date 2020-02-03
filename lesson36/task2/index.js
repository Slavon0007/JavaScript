import { renderUserData, fetchRepositories } from "./user";
import { fetchUserData } from "./geteways";
import { renderRepos, cleanRepoList } from "./repos.js";
import { showSpinner, hideSpinner } from "./spiner.js";





const defultUsr = {
    avatar_url: 'https://avatars3.githubusercontent.com/u10001',
    name: '',
    location: '',
};

renderUserData(defultUsr);

const showUserBtnElem = document.querySelector('.name-form__btn');
const userNameInputElem = document.querySelector('.name-form__input');


const onSearchUser = async() => {
    cleanReposList();
    showSpinner();
    const userName = userNameInputElem.value;
    try {
        const userData = await fetchUserData(userName);
        renderUserData(userData);
        const reposList = await fetchRepositories(userData.repos_url);
        renderRepos(reposList);
    } catch (err) {
        alert(err.message);
    } finally {
        hideSpinner();
    }
};

showUserBtnElem.addEventListener('click', onSerchUser);