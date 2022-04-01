const express = require('express'); //On importe express
const router = express.Router(); //Création de router avec express
const saucesCtrl = require('../controllers/sauces'); //On importe le fichier 'sauces.js' du dossier 'controllers'
const auth = require('../middleware/auth'); //On importe le fichier 'auth' du dossier 'middleware'
const multer = require('../middleware/multer-config');//On importe 'multer-config' du dossier 'middleware'

//Route disponible dans l'application, on voit par le nom des fonctions leurs utilités
//On passe 'auth' aux routes a protéger
router.post('/', auth, multer, saucesCtrl.createSauce);
router.put('/:id', auth, multer, saucesCtrl.modifySauce);
router.delete('/:id',auth, saucesCtrl.deleteSauce);
router.get('/:id', auth, saucesCtrl.getOneSauce);
router.get('/', auth, saucesCtrl.getAllSauces);

module.exports = router;