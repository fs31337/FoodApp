require('dotenv').config();
const axios = require("axios").default;
const { Router } = require('express');
const router = Router();
const {KEY} = process.env;



router.get('/', function(req, res){
    const {name} = req.query;
    //controlar que name sea correcto
    axios.get(`https://api.spoonacular.com/recipes/complexSearch/?titleMatch=${name}&apiKey=${KEY}&number=9`) //consultar si es legal el number=9
    .then(response => {
        if(response.data.results.length>0){
            res.send(response.data)
        }
        else{
            res.send("No existe ninguna receta que contenga el nombre ingresado")
        }
    }).catch(err => console.log('Error getting data from API', err) )
});

module.exports = router;