import { renderUserData } from './user.js';
import { fetchUserData, fetchRepositories } from './geteways.js';
import { renderRepos, cleanReposList } from './repos.js';
import { showSpinner, hideSpinner } from './spinner.js';



const defaultUser = {
    avatar_url: 'https://avatars3.githubusercontent.com/u10001',
    name: '',
    location: '',
}
renderUserData(defaultUser);

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
    } catch (e) {
        alert(e.message);
    } finally {
        hideSpinner();
    }
};

showUserBtnElem.addEventListener('click', onSearchUser);