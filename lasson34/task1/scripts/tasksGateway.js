const baseUrl = 'https://crudcrud.com/api/9783b9f997264543a65260f32d64a4c7/task';


export const getTasksLIst = () => {
    return fetch(baseUrl)
        .then(response => response.json());
};

export const createTask = taskData =>
    fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(taskData)
    });;
export const updateTask = (taskId, updateTaskData) => {
    return fetch(`${baseUrl}/${taskId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(updateTaskData)
    });
};