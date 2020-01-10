const setItem = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
}

const getItem = key => JSON.parse(localStorage.getItem(key));



const onAddClick = function() {
    const taskName = document.getElementById('task-name');

    let tasks = getItem('tasks') || [];

    if (taskName.value == null || taskName.value.trim() == '') {
        return;
    }

    const task = {

        text: taskName.value,
        done: false,
        createDate: Date.now()

    };

    tasks.push(task);
    setItem('tasks', tasks);

    renderListItems();

    taskName.value = '';

}


const renderListItems = () => {

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

function onDoneClick() {
    const id = this.id;
    let tasks = getItem('tasks') || [];
    const task = tasks.find(t => t.createDate == id);
    task.done = this.checked;
    task.createDate = Date.now();
    setItem('tasks', tasks);
    renderListItems();

}

//renderListItems(tasks);

const button = document.getElementById('add-btn');
button.onclick = onAddClick;


const onStorageChange = e => {
    if (e.key === 'tasks') renderListItems();
};
window.addEventListener('storage', onStorageChange);

document.addEventListener('DOMContentLOader', () => {
    renderListItems();
})