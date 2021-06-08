require('dotenv').config();
const axios = require("axios").default;
const { Router } = require('express');
const router = Router();
const {KEY} = process.env;

//Esta ruta debe mostrar
// (imagen, nombre, tipo de plato y tipo de dieta)
// Resumen del plato
// Puntuación
// Nivel de "comida saludable"
// Paso a paso


router.get('/:id', function(req, res){
    const {id} = req.params;
    let DataArray = [];
    axios.get(`https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&apiKey=${KEY}`)
    .then(response =>{
       DataArray.push(
           {
                image: response.data.image,
                name: response.data.title,
                type: response.data.dishTypes,
                diets: response.data.diets,
                resume: response.data.summary,
                puntuation: response.data.spoonacularScore,
                healthScore : response.data.healthScore,
                stepbystep: response.data.instructions
           })
    })
    .then(() => res.send(DataArray))
    .catch(err => console.log('ID no encontrado en API', err))
});

module.exports = router;