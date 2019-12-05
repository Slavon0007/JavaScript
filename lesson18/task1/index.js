const event = {
    guests: [{
        name: 'John',
        age: 18,
        email: 'example1@server.com'
    }, ],
    message: 'Welcome to the party!',
    getInvitations() {
        return this.guests
            .filter(el => el.age >= 18)
            .map(el => {
                return {
                    email: el.email,
                    message: `Dear ${el.name}! ${this.message}`,
                };
            });
    },
};

console.log(event.getInvitations());


export {
    event
};