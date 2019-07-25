
const Visiteur = require('../../models/particulierModel');
const Atelier = require('../../models/atelierModel')

exports.postParti = (req, res) => {
    Visiteur.find()
    .then(user => {
        var id;
        if (user.length == 0) {
            id = 0
        } else {
            id = parseInt(user[user.length - 1]._id) + 1
        }  
        const particulier = new Particulier({
            _id: id,
            nom: req.body.nom,
            prenom: req.body.prenom,
            email: req.body.email,
            telephone: req.body.telephone
        });
        visiteur.save()
            .then(() => {
                Visiteur.find()
                    .then(data => {
                        res.send(data);
                    })
            }).catch(err => {
                res.status(500).send({
                    message: err.message || "Something wrong while creating the profil."
                });
            });
        
    })

};

//Get un par un image
exports.findOneArticle =(req, res) =>{ 
try { 
    let picture = fs.readFileSync('./controllers/atelier/public/'+req.params.image)
    console.log('params: ',req.params.image);
    res.write(picture) 
    res.end() 
} 
catch (e) { console.log("envoie erroné: ", e); } }



exports.findAllArticle = (req, res) => {
Atelier.find()
    .then(atel => {
        res.send(atel);
    }).catch(err => {
        res.status(500).send(atel => {
            message: err.message || "Something wrong while retrieving profils."
        });
    });
};