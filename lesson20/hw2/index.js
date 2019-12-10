export class User {

    constructor(id, name, sessionId) {
        this._id = id;
        this._name = name;
        this._sessionId = sessionId;
    }
    get id() {
        return this._id;
    }
    get name() {
        return this._name;
    }
    get sessionId() {
        return this._sessionId;
    }
}

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

    getUserNameById(id) {
        const user = this._users.filter(i => i.id === id)
            .map(i => i.name)[0];
        return user;
    }
}