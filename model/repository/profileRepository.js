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

>>>>>>> e37c1eb371c79ff36017577e7097d352c5646d16
