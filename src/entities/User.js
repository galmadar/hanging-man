class User {

    name;

    constructor() {
    }

}

const USERS_TABLE_NAME = 'users';
let USER_NAME_KEY = 'name';

module.exports = {
    User,
    USERS_TABLE_NAME,
    USER_NAME_KEY: USER_NAME_KEY
};