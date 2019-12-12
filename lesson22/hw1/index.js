var index = 0;

const tasks = [

    { text: 'Buy milk', done: false, date: Date.now() + index++ },

    { text: 'Pick up Tom from airport', done: false, date: Date.now() + index++ },

    { text: 'Visit party', done: false, date: Date.now() + index++ },

    { text: 'Visit doctor', done: true, date: Date.now() + index++ },

    { text: 'Buy meat', done: true, date: Date.now() + index++ },

];
const onAddClick = function() {
    const taskName = document.getElementById('task-name');

    if (taskName.value == null || taskName.value.trim() == '') {
        return;
    }

    const task = {

        text: taskName.value,
        done: false,
        date: Date.now()

    };
    tasks.push(task);

    renderListItems(tasks);

    taskName.value = '';

}


const renderListItems = listItems => {

    const listElem = document.querySelector('.list');

    listElem.innerHTML = '';

    const undoneItemsElems = listItems.filter(x => x.done == false)
        .sort((a, b) => b.date - a.date);
    const doneItemsElems = listItems.filter(x => x.done == true)
        .sort((a, b) => b.date - a.date);

    const result = undoneItemsElems.concat(doneItemsElems);
    const listItemsElems = result
        .map(({ text, done, date }) => {
            const listItemElem = document.createElement('li');
            listItemElem.classList.add('list__item');
            if (done) {
                listItemElem.classList.add('list__item_done');
            }
            const checkboxElem = document.createElement('input');
            checkboxElem.setAttribute('type', 'checkbox');
            checkboxElem.setAttribute('id', date);
            checkboxElem.checked = done;
            checkboxElem.classList.add('list__item-checkbox');
            listItemElem.append(checkboxElem, text);
            checkboxElem.onclick = function() {
                const id = this.id;
                const task = tasks.find(t => t.date == id);
                task.done = this.checked;
                renderListItems(tasks);
                return true;
            };

            return listItemElem;

        });
    listElem.append(...listItemsElems);

};
renderListItems(tasks);

const button = document.getElementById('add-btn');
button.onclick = onAddClick;