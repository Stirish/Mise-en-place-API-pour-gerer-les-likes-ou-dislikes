const express = require('express'); //On importe express
const mongoose = require('mongoose'); //On importe mongoose
const bodyParser = require('body-parser'); //On importe bodyParser
const app = express(); //On met express dans une constante

//On importe les routes
const saucesRoutes = require('./routes/sauces'); 
const userRoutes = require('./routes/user')


//On lie la base de données avec le serveur
mongoose.connect('mongodb+srv://Stirish:Swartzy-62@cluster0.dlcdu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

//CORS (système de sécurité qui boque les requêtes malveillantes)
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); //accès a l'api depuis n'importe quelle origine
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'); //Ajouter les headers mentionnés aux requêtes envoyées vers notre API
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS'); // Envoyer des requêtes avec les méthodes mentionnées
    next();
  });

app.use(bodyParser.json());

//On enregistre les routes
app.use('./api/sauces', saucesRoutes);
app.use('./api.auth', userRoutes);
  
module.exports = app;