const Atelier = require('../../models/atelierModel');
const Cuisinier = require('../../models/cuisinierModel')
const fs = require('fs')

//Create new Article
exports.postAtelier = (req, res) => {
    Cuisinier.findById(req.params.id).then(use =>{
        Atelier.find()
        .then(user => {
            var id;
            if (user.length == 0) {
                id = 0
            } else {
                id = parseInt(user[user.length - 1]._id) + 1
            }
            let imageFile = req.files.image;
            let nomImage = id
            res.setHeader('Content-Type', 'text/plain');
        
            imageFile.mv(`${__dirname}/public/${nomImage}.jpg`, function (err) {
                if (err) {
                    return res.status(500).send(err);
                }
            });
            const atelier = new Atelier({
                _id: id,
                // id2:use.id,
                titre: req.body.titre,
                prix: req.body.prix,
                description: req.body.description,
                image:nomImage + '.jpg',
                duree: req.body.duree,
                heure: req.body.heure,
                place: req.body.place
            });
            atelier.save()
                .then(() => {
                    Atelier.find()
                        .then(data => {
                            res.send(data);
                        })
                }).catch(err => {
                    res.status(500).send({
                        message: err.message || "Something wrong while creating the profil."
                    });
                });
        })
    })
    
};

//Get un par un image
exports.findImageAtelier =(req, res) =>{ 
    try { 
        let picture = fs.readFileSync('./controllers/atelier/public/'+req.params.image)
        console.log('params: ',req.params.image);
        res.write(picture) 
        res.end() 
    } 
    catch (e) { console.log("envoie erroné: ", e); } }


    
exports.findAllAtelier = (req, res) => {
    Atelier.find()
        .then(atel => {
            res.send(atel);
        }).catch(err => {
            res.status(500).send(atel => {
                message: err.message || "Something wrong while retrieving profils."
            });
        });
};

// Find a single article with a articleID
exports.findOneAtelier = (req, res) => {
    Atelier.findById(req.params.atelierId)
        .then(profilchoix => {
            //console.log(unprofil)
            if (!profilchoix) {
                return res.status(404).send({
                    message: "profil not found with id" + req.params.atelierId
                });
            }
            else {
                res.send(profilchoix);
            }


        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "profil not found with id " + req.params.atelierId
                });
            }
            return res.status(500).send({
                message: "Something wrong retrieving profil with id " + req.params.atelierId
            });
        });
};

//update
exports.putAtelier =  (req, res) => {
    let imageFile = req.files.image;
      console.log('image', req.files.image);
        let nomImage = req.params.atelierId
        res.setHeader('Content-Type', 'text/plain');

        imageFile.mv(`${__dirname}/public/${nomImage }.jpg`, function(err) {
          if (err) {
            return res.status(500).send(err);
          }
        });

    Atelier.findById(req.params.atelierId, function (err, atelier) {
        if (err)
            res.send(err);atelier.titre = req.body.titre ? req.body.titre : atelier.titre;
        atelier.description = req.body.description;
        atelier.date = req.body.date;
        atelier.heure = req.body.heure;// save the contact and check for errors
        atelier.duree = req.body.duree;
        atelier.place = req.body.place;
        atelier.prix = req.body.prix;
        image:'' + nomImage +'.jpg'
        atelier.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'Contact Info updated',
                data: contact
            });
        });
    });
};