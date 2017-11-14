<<<<<<< HEAD
const db = require('../../db-config');

// Requête pour récupérer les profiles du secteur Banque
db.query('SELECT * from profile where sector="Banque"', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results);
});

// Requête pour récupérer les profiles du secteur Assurance
db.query('SELECT * from profile where sector="Assurance"', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results);
});
=======
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
>>>>>>> cfee58c48b5ffc1e902016b86fdca71ed85869dd
