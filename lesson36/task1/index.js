const fetchUser = async userId => {
    try {
        const response = await fetch(`https://api.github.com/users/${userId}`);
        if (!response.ok) {
            return null;
        }
        return userData = await response.json();
    } catch (err) {
        throw new Error('Faild to fetch user');
    }
};