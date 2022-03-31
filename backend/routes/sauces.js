const express = require('express'); //On importe express
const router = express.Router(); //Création de router avec express
const saucesCtrl = require('../controllers/sauces'); //On importe le fichier 'sauces.js' du dossier 'controllers'

//Route disponible dans l'application, on voit par le nom des fonctions leurs utilités
router.post('/', saucesCtrl.createSauce);
router.put('/:id', saucesCtrl.modifySauce);
router.delete('/:id', saucesCtrl.deleteSauce);
router.get('/:id', saucesCtrl.getOneSauce);
router.get('/', saucesCtrl.getAllSauces);

module.exports = router;