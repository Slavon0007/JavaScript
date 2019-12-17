var index = 0;

const tasks = [

    { text: 'Buy milk', done: false, createDate: Date.now() + index++ },

    { text: 'Pick up Tom from airport', done: false, createDate: Date.now() + index++ },

    { text: 'Visit party', done: false, createDate: Date.now() + index++ },

    { text: 'Visit doctor', done: true, createDate: Date.now() + index++ },

    { text: 'Buy meat', done: true, createDate: Date.now() + index++ },

];
const onAddClick = function() {
    const taskName = document.getElementById('task-name');

    if (taskName.value == null || taskName.value.trim() == '') {
        return;
    }

    const task = {

        text: taskName.value,
        done: false,
        createDate: Date.now()

    };
    tasks.push(task);

    renderListItems(tasks);

    taskName.value = '';

}


const renderListItems = listItems => {

    const listElem = document.querySelector('.list');

    listElem.innerHTML = '';



    const undoneItemsElems = listItems.filter(x => x.done == false)
        .sort((a, b) => b.createDate - a.createDate);

    const doneItemsElems = listItems.filter(x => x.done == true)
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
    const task = tasks.find(t => t.createDate == id);
    task.done = this.checked;
    task.createDate = Date.now();
    renderListItems(tasks);
    return true;
}

renderListItems(tasks);

const button = document.getElementById('add-btn');
button.onclick = onAddClick;