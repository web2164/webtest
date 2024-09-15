"use strict";

class UserStorage {
    static #users = {
        id: ["aaa","bbb","ccc"],
        psword: ["111","222","333"],
        name: ["갑","을","병"],
    };

    static getUsers(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }
}

module.exports = UserStorage;