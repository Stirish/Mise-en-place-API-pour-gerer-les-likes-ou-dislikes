const Sauce = require('../models/sauce'); //On Importer le fichier 'sauce' du dossier 'models'

//--------------------------------------------------------------Like ou Dislike une sauce---------------------------------------------------------------

exports.handleLikeOption = (req, res, next) => {
    const like = req.body.like;
    const userId = req.body.userId;
    Sauce.findOne({ _id: req.params.id }) // On va chercher le produit par son id
        .then (sauce => {  
            if(like === 1) { //Si like est egal à 1, l'utilisateur aime
                let likeUser = checkUser(sauce.usersLiked, userId);
                let dislikeUser = checkUser(sauce.usersDisliked, userId);
                if(!likeUser && !dislikeUser) {
                    sauce.likes += 1;
                    sauce.usersLiked.push(userId); 
                } 
                else {
                    throw new Error("On ne peut liker une sauce qu'une seule fois");
                }
            }
            else if (like === -1) {
                let dislikeUser = checkUser(sauce.usersDisliked, userId);
                let likeUser = checkUser(sauce.usersLiked, userId);
                if(!dislikeUser && !likeUser) {
                    sauce.dislikes += 1;
                    sauce.usersDisliked.push(userId); 
                } 
                else {
                    throw new Error("On ne peut disliker une sauce qu'une seule fois");
                }
            }
            else if (like === 0) {    
                let userLiked = checkUser(sauce.usersLiked, userId);
                if(userLiked){
                    sauce.likes -= 1;
                    sauce.usersLiked = createNewUserIdArray(sauce.usersLiked, userId);
                }
                else {
                let userDisliked = checkUser(sauce.usersDisliked, userId);
                    if(userDisliked){
                        sauce.dislikes -= 1;
                        sauce.usersDisliked = createNewUserIdArray(sauce.usersDisliked, userId);
                    }     
                }     
        }
        
        sauce.save() //Sauvegarde la sauce modifié dans la base de données mongoDB
            .then(() => res.status(201).json({ message: "choix appliqué" }))
            .catch(error => res.status(400).json({ error }));
        })
        .catch(error => res.status(403).json({ error: error.message}));
};  

function createNewUserIdArray (userIdArray, userId) {
    return userIdArray.filter(id => id !== userId);
}
// ON vérifie si l'utilisateur a déjà liké ou disliké une sauce
function checkUser(userIdArray, userId) {
    return userIdArray.find(id => id === userId);

} 