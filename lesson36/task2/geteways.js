export { fetchUserData, fetchRepositories };


const fetchUserData = async(userName) => {
    const response = await fetch(`https://api.github.com/users/${userName}`);
    if (response.ok) {
        return await response.json();
    }
    throw new Error('Failed to load data');
};

const fetchRepositories = async url => {
    const response = await fetch(url);
    if (response.ok) {
        return await response.json();
    }
    throw new Error('Failed to load data');
};