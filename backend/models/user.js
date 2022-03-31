const mongoose = require('mongoose'); //On importe mongoose
const uniqueValidator = require('mongoose-unique-validator'); //On importe mongoose-unique-validator pour ne pas avoir de problème de adresse mail identique

//Template de l'utilisateur à créé
const userSchema = mongoose.Schema({
    email: { type: String, require: true, unique: true },
    password: { type: String, require: true }
});

//On utilise la fonction 'plugin' sur le template avec comme argument la constante 'uniqueValidator'
userSchema.plugin(uniqueValidator);

//Exportation du template (Nom du modèle, nom de la constante)
module.exports = mongoose.model('User', userSchema);