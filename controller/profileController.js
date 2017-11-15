/* Load Profile entity */
const Profile = require('../model/entity/profile.js');

/* Load Profile Repository */
const ProfileRepository = require('../model/repository/profileRepository');

/* Load Controller Common */
const CommonController = require('./commonController');

/**
 * Profile Controller
 */

class ProfileController {

    constructor() {
        this.profileRepository = new ProfileRepository();
        this.common = new CommonController();
    }

    /**
     * Finds all entities.
     * @return all entities
     */
    getProfilesList(res) {
        this.profileRepository.getProfilesList()
            .then(this.common.findSuccess(res))
            .catch(this.common.findError(res));
    };

    getProfilesByActivity(req, res) {
        let activity = req.params.activity;

        this.profileRepository.getProfilesByActivity(activity)
            .then(this.common.findSuccess(res))
            .catch(this.common.findError(res));
    };

    downloadProfilesByActivity(req, res) {
        var json2csv = require('json2csv');
        const fs = require('fs');

        let activity = req.params.activity;

        var fields = ['ID', 'firstname', 'lastname', 'sector', 'email', 'phone', 'createdAt'];
        var myData = [{"ID":1,"firstname":"Marie","lastname":"Bernard","sector":"Banque","email":"marie@gmail.com","phone":"06.19.75.57.98","createdAt":"2017-07-17T22:00:00.000Z"}];

        var fileName = activity+'_profiles.csv';
        var filePath = __dirname + '/../'+fileName;

        try {
            var result = json2csv({ data: myData, fields: fields });
            fs.writeFile(fileName, result, function(err) {
                if (err) throw err;
                console.log('file saved');
            });
            res.download(filePath); // Set disposition and send it.
          console.log(result);
        } catch (err) {
          // Errors are thrown for bad options, or if the data is empty and no fields are provided.
          // Be sure to provide fields if it is possible that your data array will be empty.
          console.error(err);
        }
        console.log(fields);
    }
}

module.exports = ProfileController;