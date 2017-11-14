var ctrl = require('../controller/profileController.js');
/**
	get profiles list 
*/
app.get(`${versionApi}`, (request) => {
	// TODO controller getProfiles
	ctrl.getProfilesList();
})

/**
	get profiles by activity sector
*/
app.get(`${versionApi}/${activity}`, (request) => {
	ctrl.getProfilesByActivity();
})
