
/* Load Profile entity */
const Profile = require('../entity/profile.js');
const db = require('../../db-config');

class ProfileRepository {

    getProfilesList() {
        let sqlRequest = 'SELECT * from profile"';
        db.getConnection(function(err, connection) {
            // Use the connection
            connection.query(sqlRequest, function (error, results, fields) {
                // And done with the connection.
                connection.release();

                // Handle error after the release.
                if (error) throw error;

                // Don't use the connection here, it has been returned to the pool.
            });
        });
    };

    getProfilesByActivity(activity) {
        let sqlRequest = 'SELECT * from profile where sector='+db.escape(activity);
        db.getConnection(function(err, connection) {
            // Use the connection
            connection.query(sqlRequest, function (error, results, fields) {
                // And done with the connection.
                connection.release();

                // Handle error after the release.
                if (error) throw error;

                // Don't use the connection here, it has been returned to the pool.
            });
        });
    };

}

module.exports = ProfileRepository;

