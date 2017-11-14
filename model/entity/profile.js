/**
 * Profile class (ES6)
 */

class Profile{
	constructor (id, firstname, lastname, email, sector, phone, createdAt) {
		this.id = id;
		this.firstname = firstname;
		this.lastname = lastname;
		this.email = email;
		this.sector = sector;
		this.phone = phone;
		this.createdAt = createdAt;
	}
}

module.exports = Profile;