const express = require('express'); //On importe express
const router = express.Router(); //Lier la fonction router à express dans une constante
const likeCtrl = require('../controllers/like')//On importe /controllers/like dans une constante
const auth = require('../middleware/auth'); //On importe /middleware/auth.j dans une constante

//Route pour l'option like dislike
router.post('/:id/like', auth, likeCtrl.handleLikeOption);

//Exporter les routes
module.exports = router;