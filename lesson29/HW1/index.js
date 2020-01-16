function requestUserData(userId, callbak) {
    setTimeout(() => {
        if (userId === 'broken') {
            callbak(null, 'Failed to load user data');

            return;
        }
        callbak({
            name: 'John',
            age: 17,
            userId,
            email: `${userId}@example.com`,
        });
    }, Math.floor(Math.random() * 3 + 1) * 1000);

};

export { requestUserData };