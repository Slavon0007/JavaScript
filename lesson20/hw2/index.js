export class User {

    constructor(id, name, sessionId) {
        this.id = `${id}`;
        this.name = `${name}`;
        this.sessionId = `${sessionId}`;
    }
    get id() {
        return this.id;
    }
    get name() {
        return this.name;
    }
    get sessionId() {
        return this.sessionId;
    }
};

export class UserRepository {

    constructor(array) {
        this._users = Object.freeze(array);
    }

    getUserNames() {
        return this._users.map(i => i.name);
    }

    getUserIds() {
        return this._users.map(i => i.id);
    }

    getUserNameById(userId) {
        const user = this._users.find(i => i.id === userId)
            .map(i => i.name)[0];
        return user;
    }
}