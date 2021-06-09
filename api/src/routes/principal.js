require("dotenv").config();
const axios = require("axios").default;
const { Router } = require("express");
const router = Router();
const { KEY } = process.env;
const { Recipe } = require("../db.js");


router.get("/", function (req, res) {
    let recipesDb = [];
    Recipe.findAll()
    .then(response  => console.log(response[0],"respuestaaaaaaaaaaaaaaaaaaaaaaaaaaa"))
    .then(response => response.map((recipe) => recipesDb.push(
        {
            img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/960/261/products/img_20771-28bc83694oZm7wXGxW1GPwAgprMBjCDDTCztHN1-1024-1024.jpg",
            title: recipe.dataValues.name,
            diet: recipe.dataValues.diet
        }
        )))
        .then(()=> console.log(recipesDb))



    axios.get(`https://api.spoonacular.com/recipes/complexSearch/?apiKey=${KEY}&number=100&addRecipeInformation=true`)
        .then((response) => {
        res.send(response.data)
        })
        .catch((err) => console.log("Error getting data from API", err));
});

module.exports = router;
