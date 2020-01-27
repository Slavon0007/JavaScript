import { renderListItems } from './render.js';
import { getItem, setItem } from './storage.js';
import { createTask, getTasksLIst } from './tasksGateway.js';

export const onAddClick = function() {
    const taskName = document.getElementById('task-name');

    // let tasks = getItem('tasks') || [];

    if (taskName.value == null || taskName.value.trim() == '') {
        return;
    }

    const task = {

        text: taskName.value,
        done: false,
        createDate: Date.now()

    };
    //tasks.push(task);

    createTask(task)
        .then(() => getTasksLIst())
        .then(tasks => {
            setItem('tasks', tasks);
            renderListItems();
        });


    taskName.value = '';

};


export function onDoneClick() {
    const id = this.id;
    let tasks = getItem('tasks') || [];
    const task = tasks.find(t => t.createDate == id);
    task.done = this.checked;
    task.createDate = Date.now();
    setItem('tasks', tasks);
    renderListItems();

}
const button = document.getElementById('add-btn');
button.onclick = onAddClick;

const done = e.target.checked;
const taskId = e.taget.dataset.id;
const tasksList = getItem('tasks');
const { text, createDate } = tasksList
    .find(task => task.id === taskId);
const updatedTask = {
    text,
    createDate,
    done,
    finishDate: done ?
        new Date().toISOString() : null
};
updatedTask(taskId, updatedTask)
    .then(() => getTasksLIst())
    .then(tasks => {
        setItem('tasks', tasks);
        renderListItems();
    });


// подгатовили данные
//записать данные в БД
//считать новые данные 
//сохраняем локально
//приминить данные