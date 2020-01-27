const baseUrl = 'https://crudcrud.com/api/150d8b1d323c4bacb81a46af6715298f/tasks';


export const getTasksLIst = () => {
    return fetch(baseUrl)
        .then(response => response.json());
};

export const createTask = taskData => {
    return fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(taskData)
    });
};
export const updateTask = (taskId, updateTaskData) => {
    return fetch(`${baseUrl}/${taskId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(updateTaskData)
    });
};