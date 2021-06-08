require('dotenv').config();
const axios = require("axios").default;
const { Router } = require('express');
const router = Router();
const {KEY} = process.env;



router.get('/', function(req, res){
    const {name} = req.query;
    const nameok = name.charAt(0).toUpperCase() + name.toLowerCase().slice(1)

    axios.get(`https://api.spoonacular.com/recipes/complexSearch/?apiKey=${KEY}&number=100`) //&addRecipeInformation=true
    .then(response => {
        let arreglo = response.data.results.filter(recipe => recipe.title.includes(nameok));
        arreglo.splice(9,arreglo.length)

         if(arreglo.length >0){
              res.send(arreglo)
         }
         else{
             res.send("No se encontró ninguna receta con el nombre buscado")
         }
    }).catch(err => console.log('Error getting data from API', err))
});

module.exports = router;