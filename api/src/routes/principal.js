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
    .then(response => console.log(response[0][0].dataValues))
    // .then(response => response.map((recipe) => recipesDb.push(
    //     {
    //         img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/960/261/products/img_20771-28bc83694oZm7wXGxW1GPwAgprMBjCDDTCztHN1-1024-1024.jpg",
    //         title: recipe.dataValues.name,
    //         //MOSTRAR DIETA QUE LE CORRESPONDE
    //     }
    //     )))

        axios.get(`https://api.spoonacular.com/recipes/complexSearch/?apiKey=${KEY}&number=100&addRecipeInformation=true`)
        .then((response) => {
         res.json([response.data, ...recipesDb])
        })
        .catch((err) => console.log("Error getting data from API", err))
});

module.exports = router;
