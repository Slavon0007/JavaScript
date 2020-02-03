const getUserBlog = userId => fetch(`https://api.github.com/users/${userId}`)
    .then(response => response.json());


export const getUsersBlogs = async arrOfUsersId => {
    const q = arrOfUsersId.reduce((acc, user) => {
        return [
            ...acc,
            getUserBlog(user),
        ]
    }, []);

    const allUsers = await Promise.all(q);
    const arrOfLinks = allUsers.map(({ blog }) => blog);
    return arrOfLinks;
}

getUsersBlogs(['google', 'facebook', 'gaearon'])
    .then(linksList => console.log(linksList));