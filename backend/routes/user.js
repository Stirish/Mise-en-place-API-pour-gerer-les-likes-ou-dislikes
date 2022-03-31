const express = require('express'); //On importe express
const router = express.Router(); //Création de router avec express
const userCtrl = require('../controllers/user'); //On importe le fichier 'user' du dossier 'controllers'

//Route disponible dans l'application, on voit par le nom des fonctions leurs utilités
router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);

module.exports = router;