const db = require('./db-config');

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
