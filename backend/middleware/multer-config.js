const multer = require('multer'); //On importe multer

//Dictionnaire pour extension des fichiers
const MIME_TYPES = {
    'image/jpg': 'jpg',
    'image/jpeg': 'jpg',
    'image/png': 'png'
};

//----------------------------------------------------Création d'objet de configuration--------------------------------------------------------

//Fonction 'diskStorage' pour dire qu'on enregistre sur le disque
const storage = multer.diskStorage({ 
    
    destination : (req, file, callback) => {
        callback(null, 'images') //'null'= dire qu'il n'y a pas d'erreur et 'images' = le nom du dossier 
    },

    //Nom de fichier a utiliser
    filename: (req, file, callback) => {
        const name = file.originalname.split(' ').join('_'); // On prend le nom original et evite les problème côté serv en enlevant certains espace et en les remplacant par des underscore
        const extension = MIME_TYPES[file.mimetype]; //extension généré par le mimetype du fichier envoyer par le frontend
        callback(null, name + Date.now() + '.' + extension);// 'null' = pas d'erreur, 'Date.now' = horodatage pour rendre le plus unique possible le fichier
    }
});

//On exporte multer
module.exports = multer({ storage }).single('image'); //'single pour dire que c'est un fichier unique et non un groupe et on lui indique que c'est une image