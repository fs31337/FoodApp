// [ ] POST /recipe:
// Recibe los datos recolectados desde el formulario controlado de la ruta de creación de recetas por body
// Crea una receta en la base de datos

const { Router } = require('express');
const router = Router();
const {Recipe} = require('./src/db.js');


router.post('/', function(req, res){
    console.log(req.body,"POST BODYYYYYYYYYYYYYYYY")
    res.send("entro el get de types")
});

module.exports = router;