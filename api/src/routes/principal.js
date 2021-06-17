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
            img: "https://image.freepik.com/vector-gratis/dibujos-animados-kid-cook_10308-227.jpg",
            title: recipe.dataValues.name,
            diet: recipe.dataValues.diet_types,
            id: recipe.dataValues.id,
            puntuation:recipe.dataValues.puntuation
        }
        )))
        axios.get(`https://api.spoonacular.com/recipes/complexSearch/?apiKey=${KEY}&number=19&addRecipeInformation=true`) //ORIGINAL NUMBER=100
        .then((response) => {
            let nuevaResponse=[];
            response.data.results.map(data => nuevaResponse.push(
                {
                    img: data.image,
                    title: data.title,
                    diet:data.diets,
                    id:data.id,
                    puntuation: data.weightWatcherSmartPoints, //esto no lo muestro pero lo uso para filtar // "spoonacular score" eran todos 99 por eso uso este otro puntaje.
                }
                ))
            let nuevoArreglo =[];
            recipesDb.map(recipe => {recipe.diet.map(tipo =>{
                nuevoArreglo.push(tipo.dataValues.name)
                recipe.diet = nuevoArreglo;
            })
            nuevoArreglo = []

        })
            res.json([...nuevaResponse, ...recipesDb]) //retornaba vacio cuando no tenia recipes, cree una por defecto inicial.
            nuevaResponse=[]
        })
        .catch((err) => console.log("Error getting data from API", err))
});
module.exports = router;
