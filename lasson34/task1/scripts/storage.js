import { renderListItems } from './render.js';
import { getTasksLIst } from './tasksGateway.js';

export const setItem = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
}

export const getItem = key => JSON.parse(localStorage.getItem(key));



document.addEventListener('DOMContentLOader', () => {
    getTasksLIst()
        .then(tasks => {
            setItem('tasks', tasks);
            renderListItems();
        });
    renderListItems();
});

const onStorageChange = e => {
    if (e.key === 'tasks') renderListItems();
};
window.addEventListener('storage', onStorageChange);