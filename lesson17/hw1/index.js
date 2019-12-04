const user = {
    firstName: 'John',
    lastName: 'Doe',
    getFullName() {

        return this.firstName + ' ' + this.lastName;
    },

    setFullName(fullName) {
        let [a, b] = fullName.split(' ');
        this.firstName = a;
        this.lastName = b;
    },
}

export { user };