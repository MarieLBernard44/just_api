/* Load Controller Common */
const CommonController = require('./commonController');
const jwt = require('jsonwebtoken');

/**
 * Profile Controller
 */

class SecurityController {

    constructor() {
        this.common = new CommonController();
    }

    authenticateApi(req, res) {
        let login = req.body.login;
        let password = req.body.password;

        // check if login matches
        if (login !== 'test') {
            res.status(403);
            return res.json('Authentication failed');
        } else {

            // check if password matches
            if (password !== 'password') {
                res.status(403);
                return res.json('Authentication failed');
            } else {

                // if user is found and password is right
                // create a token with only our given payload
                // we don't want to pass in the entire user since that has the password
                const payload = {
                    login: login
                };
                let token = jwt.sign(payload, 'superPrivateKey', {
                    expiresIn: '24 hour'
                });

                // return the information including token as JSON
                //return this.common.securityError(token);
                res.status(200);
                res.json({
                    token: token
                });
            }
        }
    }

    authenticateView(req, res) {
        let login = req.body.login;
        let password = req.body.password;

        if (req.cookies['A3Token']) {
            res.clearCookie('A3Token');
            res.render('login', {
                title: 'A3dev',
                message: 'Authentification requise',
                info: 'Entrez vos identifiants :'
            });
        } else {
            // check if login matches
            if (login !== 'test') {
                res.status(403);
                res.render('login', {
                    title: 'A3dev',
                    message: 'Authentification requise',
                    info: 'Erreur ! Mauvais identifiants!'
                });
            } else {

                // check if password matches
                if (password !== 'password') {
                    res.status(403);
                    res.render('login', {
                        title: 'A3dev',
                        message: 'Authentification requise',
                        info: 'Erreur ! Mauvais identifiants!'
                    });
                } else {

                    // if user is found and password is right
                    // create a token with only our given payload
                    // we don't want to pass in the entire user since that has the password
                    const payload = {
                        login: login
                    };
                    let token = jwt.sign(payload, 'superPrivateKey', {
                        expiresIn: '24 hour'
                    });

                    // return the information including token as JSON
                    //return this.common.securityError(token);
                    res.cookie('A3Token', token, {
                        maxAge: 86400 * 1000, // 24 hours
                        httpOnly: false, // http only, prevents JavaScript cookie access
                    });
                    res.render('index', {title: 'A3dev', message: 'Liste des profils'});
                }
            }
        }
    }

    validate(req, res, next) {

        // check header or url parameters or post parameters for token
        let token = req.body.token || req.query.token || req.headers['x-access-token'] || req.cookies['A3Token'];

        // decode token
        if (token) {

            // verifies secret and checks exp
            jwt.verify(token, 'superPrivateKey', function (err, decoded) {
                if (err) {
                    res.status(403);
                    return res.json('Access denied');
                } else {
                    // if everything is good, save to request for use in other routes
                    req.decoded = decoded;
                    next();
                }
            });

        } else {
            // if there is no token
            // return an error
            res.status(403);
            return res.json('Access denied');
        }
    }
}

module.exports = SecurityController;