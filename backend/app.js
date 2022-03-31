const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb+srv://Stirish:Swartzy-62@cluster0.dlcdu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));



app.use(express.json());

//CORS (système de sécurité qui boque les requêtes malveillantes)
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); //accès a l'api depuis n'importe quelle origine
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'); //Ajouter les headers mentionnés aux requêtes envoyées vers notre API
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS'); // Envoyer des requêtes avec les méthodes mentionnées
    next();
  });

app.post('/api/sauces', (req, res, next) => {
    console.log(req.body);
    app.status(201).json({
        message: 'Objet Créé !'
    });
});
app.get('/api/sauces', (req, res, next) => {
    const sauces = [
        {
            _id: 'azerty',
            title: 'sauce',
            descripton: 'piquante',
            imageURL: '',
            price: '2000',
            userID: 'azer',
        },
        {
            _id: 'uiop',
            title: 'saue',
            descripton: 'cremeuse',
            imageURL: '',
            price: '3000',
            userID: 'aer',
        },
    ];
    res.status(200).json(sauces);
});

module.exports = app;