/* Load Profile Repository */
const ProfileRepository = require('../repository/profileRepository');

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
}

module.exports = ProfileController;