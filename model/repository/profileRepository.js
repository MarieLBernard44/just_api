/* Load Profile entity */
const Profile = require('../entity/profile.js');

/* Load Database */
const db = require('../../db-config');

/* Load bluebird Promise */
const Promise = require('bluebird');

class ProfileRepository {

    getProfilesList() {
        let sqlRequest = 'SELECT * from profile';
        return new Promise(function (resolve, reject) {
            db.getConnection(function (err, connection) {
                connection.query(sqlRequest, function (error, results, fields) {
                    // And done with the connection.
                    resolve(results, fields);
                    connection.release();

                    // Handle error after the release.
                    if (error) {
                        reject()
                    }
                });
            });
        });
    };

    getProfilesByActivity(activity) {
        let sqlRequest = 'SELECT * from profile where sector=' + db.escape(activity);
        return new Promise(function (resolve, reject) {
            db.getConnection(function (err, connection) {
                connection.query(sqlRequest, function (error, results, fields) {
                    // And done with the connection.
                    resolve(results, fields);
                    connection.release();

                    // Handle error after the release.
                    if (error) {
                        reject()
                    }
                });
            });
        });
    };

}

module.exports = ProfileRepository;
