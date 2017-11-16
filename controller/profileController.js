/* Load Profile Repository */
const ProfileRepository = require('../repository/profileRepository');

/* Load Controller Common */
const CommonController = require('./commonController');
const fs = require('fs');
const json2csv = require('json2csv');

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

        let activity = req.params.activity;

        this.profileRepository.getProfilesByActivity(activity)
            .then(this.createDownloadFile(res, activity))
            .catch(this.common.findError(res));
    }

    createDownloadFile(res, activity) {

        return (result) => {
            let fields = ['firstname', 'lastname', 'sector', 'email', 'phone', 'createdAt'];
            let fileName = activity + '_profiles_' + Math.floor((Math.random() * 10000) + 1) + '.csv';
            let filePath = __dirname + '/../view/public/download/' + fileName;
            let csv = json2csv({data: result, fields: fields});
            console.log(result);
            fs.writeFile('view/public/download/' + fileName, csv, function (err) {
                if (err) {
                    console.log(err);
                }
                res.status(200);
                res.download(filePath, fileName, function(err){
                    fs.unlink('view/public/download/' + fileName, function (err) {
                        if (err) {
                            console.log(err);
                        }
                    });
                }); // Set disposition and send it.
            });

        };
    }
}

module.exports = ProfileController;