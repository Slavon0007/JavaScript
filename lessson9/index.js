const getAdults = userObj => {
    const usersArray = Object.enries(userObj);
    const filterUserArray = usersArray
        .filter(user => user[1] >= 18);

    const usersNames = filterUserArray
        .map(user => user[0]);

    return usersNames;
}