require('dotenv').config();
const axios = require("axios").default;
const { Router } = require('express');
const router = Router();
const {KEY} = process.env;

//Esta ruta debe mostrar
// Los campos mostrados en la ruta principal para cada receta (imagen, nombre, tipo de plato y tipo de dieta)
// Resumen del plato
// Puntuación
// Nivel de "comida saludable"
// Paso a paso


router.get('/:id', function(req, res){
    const {id} = req.params;
    axios.get(`https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&apiKey=${KEY}`)
    .then(response => {
        res.send(response.data)
    }).catch(err => console.log('ID no encontrado en API', err))
});

module.exports = router;