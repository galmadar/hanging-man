const firebase = require('firebase');
const config = require('./firebaseConfig.json');
const USER = require('../../entities/User');
const User = USER.User;
const USERS_TABLE_NAME = USER.USERS_TABLE_NAME;
const USER_NAME_KEY = USER.USER_NAME_KEY;

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
            .then(foundUser => {
                if (foundUser) {
                    return foundUser;
                } else {
                    return this.push(USERS_TABLE_NAME, user);
                }
            });
    }

    // Find the first user by name
    findUserByName(name) {
        return this.findByKey(USERS_TABLE_NAME, USER_NAME_KEY, name)
            .then(users => {
                if (users.length > 0) {
                    return users[0];
                } else {
                    return null;
                }
            });
    }

    // Firebase general

    push(tableName, obj) {
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

    setToRef(tableName, obj) {
        return Promise.reject(new Error(`error in set to ${tableName}`, obj));
    }

    findByKey(tableName, key, value) {
        const readByRef = this.firebase.database().ref(tableName);
        return readByRef.orderByChild(key).equalTo(value).once('value')
            .then(snapshot => {
                if (snapshot.hasChildren()) {
                    const val = snapshot.val();
                    return Object.keys(val).map(key => {
                        return {
                            _id: key,
                            ...val[key],
                        }
                    });
                } else {
                    return [];
                }
            })
            .catch(err => {
                logger.error('error in readBy', err);
                throw err;
            });
    }
}

module.exports = new HangmanFirebase();