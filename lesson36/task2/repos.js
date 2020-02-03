export { renderRepos, cleanReposList };

const cleanReposList = () => {
    listElem.innerHTML = '';
}

const listElem = document.querySelector('.repo-list');
const renderRepos = list => {
    const reposListElem = list
        .map(({ name }) => {
            const listElem = document.createElement('li');
            listElem.classList.add('repo-list__item');
            listElem.textContent = name;

            return listElem;
        });
    cleanReposList();
    listElem.append(...reposListElem);
}