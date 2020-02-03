export const fethcUserData = user => {
    return fetch(`https://api.github.com/users/${user}`)
        .then(response => {
            if (response.ok) {
                response.json();
            }
            throw new Error('Failed to load data');


        });
};

export const fetchRepositories = url =>
    fetch(url)
    .then(response => {
        if (response.ok) {
            response.json();
        }
        throw new Error('Failed to load data');


    });