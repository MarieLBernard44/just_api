/* Load Database */
const db = require('../db-config');

/* Load bluebird Promise */
const Promise = require('bluebird');

class ProfileRepository {

    getProfilesList() {
        let sqlRequest = 'SELECT `firstname`,`lastname`,`sector`,`email`, `phone`, `createdAt` from profile';
        return new Promise(function (resolve, reject) {
            db.getConnection(function (err, connection) {
                if (err) {
                    reject({status: '500', message: 'Internal server error'});
                } else {
                    connection.query(sqlRequest, function (error, results) {
                        // And done with the connection.
                        if (results[0]) {
                            resolve(results);
                            connection.release();
                        } else {
                            reject({status: '404', message: 'Not found'});
                        }
                        // Handle error after the release.
                        if (error) {
                            reject({status: '404', message: 'Not found'});
                        }
                    });
                }
            });
        });
    };

    getProfilesByActivity(activity) {
        let sqlRequest = 'SELECT `firstname`,`lastname`,`sector`,`email`, `phone`, `createdAt` from profile ' +
            'where sector=' + db.escape(activity);
        return new Promise(function (resolve, reject) {
            db.getConnection(function (err, connection) {
                if (err) {
                    reject({status: '500', message: 'Internal server error'});
                } else {
                    connection.query(sqlRequest, function (error, results) {
                        // And done with the connection.
                        if (results[0]) {
                            resolve(results);
                            connection.release();
                        } else {
                            reject({status: '404', message: 'Not found'});
                        }
                        // Handle error after the release.
                        if (error) {
                            reject({status: '404', message: 'Not found'});
                        }
                    });
                }
            });
        });
    };
}

module.exports = ProfileRepository;