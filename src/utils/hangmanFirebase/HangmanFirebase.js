const firebase = require('firebase');
const config = require('./firebaseConfig.json');
const {User, USER_TABLE_NAME, USER_NAME_KEY} = require('../../entities/User');

class HangmanFirebase {

    constructor() {
        this.firebase = firebase;
        this.firebase.initializeApp(config);
    }

    // User

    login(userName) {
        const user = new User();
        user.name = userName;

        return this.findUserByName(userName)
            .then(user => {
                if (user) {
                    return user;
                } else {
                    return this.push(USER_TABLE_NAME, user);
                }
            });
    }

    findUserByName(name) {
        return this.findByKey(USER_NAME_KEY, name);
    }

    // Firebase general

    private push(tableName, obj) {
        const pushRef = this.firebase.database().ref(tableName).push();
        return pushRef.set(obj)
            .then(err => {
                if (err) {
                    throw new Error('cannot push to tableName:', tableName);
                } else {
                    return {
                        _id: pushRef.key,
                        ...obj
                    };
                }
            });
    }

    private setToRef(tableName, obj) {
        return Promise.reject(new Error(`error in set to ${tableName}`, obj));
    }

    private findByKey(key, value) {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
}

module.exports = new HangmanFirebase();