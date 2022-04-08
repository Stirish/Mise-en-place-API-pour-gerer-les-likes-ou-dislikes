const express = require('express'); //On importe express
const app = express(); //On met express dans une constante
const bodyParser = require('body-parser'); //On importe bodyParser
const saucesRoutes = require('./routes/sauces'); //On importe les routes
const userRoutes = require('./routes/user');
const likeRoute = require('./routes/like');
const mongoose = require('mongoose'); //On importe mongoose
const path = require('path');

//On lie la base de données avec le serveur
mongoose.connect('mongodb+srv://Stirish:Swartzy-62@cluster0.dlcdu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));



//CORS (système de sécurité qui bloque les requêtes malveillantes)
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use(bodyParser.json());

//On enregistre les routes
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/api/sauces', saucesRoutes);
app.use('/api/auth', userRoutes);
app.use('/api/sauces', likeRoute);

  
module.exports = app;