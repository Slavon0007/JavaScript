import { onDoneClick } from './eventOnClick.js';
import { onAddClick } from './eventOnClick.js';
import { getItem } from './storage.js';



export const renderListItems = () => {

    let tasks = getItem('tasks') || [];
    const listElem = document.querySelector('.list');

    listElem.innerHTML = '';



    const undoneItemsElems = tasks.filter(x => x.done == false)
        .sort((a, b) => b.createDate - a.createDate);

    const doneItemsElems = tasks.filter(x => x.done == true)
        .sort((a, b) => b.createDate - a.createDate);

    const result = undoneItemsElems.concat(doneItemsElems);
    const listItemsElems = result

        .map(({ text, done, createDate }) => {

        const listItemElem = document.createElement('li');
        listItemElem.classList.add('list__item');
        if (done) {

            listItemElem.classList.add('list__item_done');

        }
        const checkboxElem = document.createElement('input');
        checkboxElem.setAttribute('type', 'checkbox');
        checkboxElem.setAttribute('id', createDate);
        checkboxElem.checked = done;
        checkboxElem.classList.add('list__item-checkbox');
        listItemElem.append(checkboxElem, text);
        checkboxElem.onclick = onDoneClick;
        return listItemElem;

    });
    listElem.append(...listItemsElems);

};