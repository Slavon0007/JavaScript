const listElem = document.querySelector('.repo-list');

export const cleanRepoList = () => {
    listElem.innerHTML = '';
};

export const renderRepos = repoLIst => {
    const repoLIstElems = repoLIst
        .map(({ name }) => {
            const listElem = document.createElement('li');
            listElem.classList.add('repo-list__item');
            listElem.textContent = name;
        });
    cleanRepoList();
    listElem.append(...repoLIstElems);
};