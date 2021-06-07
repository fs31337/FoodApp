require('dotenv').config();
const axios = require("axios").default;
const { Router } = require('express');
const router = Router();
const {KEY} = process.env;



router.get('/:id', function(req, res){
    const {id} = req.params;
    axios.get(`https://api.spoonacular.com/recipes/${id}/information?includeNutrition=true&apiKey=${KEY}`)
    .then(response => {
        res.send(response.data)
    }).catch(err => console.log('ID no encontrado en API', err) )
});

module.exports = router;