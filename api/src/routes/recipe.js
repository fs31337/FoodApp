// [ ] POST /recipe:
// Recibe los datos recolectados desde el formulario controlado de la ruta de creación de recetas por body
// Crea una receta en la base de datos

const { Router } = require('express');
const router = Router();
const {Recipe} = require('../db.js');


router.post('/', function(req, res){
    if (req.body.name !== undefined && req.body.resume !== undefined && req.body.puntuation !== undefined){
        Recipe.create({
            name:`${req.body.name}`,
            resume:`${req.body.resume}`,
            puntuation:`${req.body.puntuation}`,
        })
        res.send("Nunca taxi")
    }
    else{
        res.send("Falta un dato pa")
    }
    }
)



module.exports = router;