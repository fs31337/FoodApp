require("dotenv").config();
const axios = require("axios").default;
const { Router } = require("express");
const router = Router();
const { KEY } = process.env;
const { Recipe } = require("../db.js");
const { Diet_type } = require("../db.js");


router.get("/", function (req, res) {
    let recipesDb = [];
    Recipe.findAll({include:[Diet_type]})
    .then(response => response.map((recipe) => recipesDb.push(
        {
            img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/960/261/products/img_20771-28bc83694oZm7wXGxW1GPwAgprMBjCDDTCztHN1-1024-1024.jpg",
            title: recipe.dataValues.name,
            diet: recipe.dataValues.diet_types,
            id: recipe.dataValues.id
        }
        )))
        // recipesDb.diet = recipesDb.diet.map(tipo => tipo.name)
        axios.get(`https://api.spoonacular.com/recipes/complexSearch/?apiKey=${KEY}&number=5&addRecipeInformation=true`) //ORIGINAL NUMBER=100
        .then((response) => {
            let nuevaResponse=[];
            let nuevoArreglo =[];
            recipesDb.map(recipe => {recipe.diet.map(tipo =>{
                nuevoArreglo.push(tipo.dataValues.name)
                recipe.diet = nuevoArreglo;
            })
            nuevoArreglo = []

            response.data.results.map(data => nuevaResponse.push(
                {
                    img: data.image,
                    title: data.title,
                    diet:data.diets,
                    id:data.id,
                    puntuation: data.spoonacularScore, //esto no lo muestro pero lo uso para filtar
                }
                ))
        })
            res.json([...nuevaResponse, ...recipesDb]) //retornaba vacio cuando no tenia recipes, cree una por defecto inicial.
        })
        .catch((err) => console.log("Error getting data from API", err))
});
module.exports = router;
