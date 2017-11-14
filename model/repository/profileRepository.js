/* Load Profile entity */
const Profile = require('../entity/profile.js');
const db = require('../../db-config');

class ProfileRepository {

    getProfilesList() {
        let sqlRequest = 'SELECT * from profile"';
        db.query(sqlRequest, function (error, results, fields) {
            if (error) throw error;
            console.log(results);
        });
    };

    getProfilesByActivity(activity) {
        let sqlRequest = 'SELECT * from profile where sector='+db.escape(activity);
        db.query(sqlRequest, function (error, results, fields) {
            if (error) throw error;
            console.log(results);
        });
    };

}

module.exports = ProfileRepository;