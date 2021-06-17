require("dotenv").config();
const axios = require("axios").default;
const { Router } = require("express");
const router = Router();
const { Recipe } = require("../db.js");
const { Diet_type } = require("../db.js");
const { KEY } = process.env;

let letras="abcdefghyjklmnñopqrstuvwxyz";

function tiene_letras(texto){
   texto = texto.toLowerCase();
   for(i=0; i<texto.length; i++){
      if (letras.indexOf(texto.charAt(i),0)!=-1){
         return true;
      }
   }
   return false;
}

router.get("/:id", function (req, res) {
  const { id } = req.params;
  let DataArray = [];
    if(!tiene_letras(id)){
        axios.get(`https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&apiKey=${KEY}`)
        .then((response) => {
          DataArray.push({
            img: response.data.image,
            title: response.data.title,
            type: response.data.dishTypes,
            diets: response.data.diets,
            resume: response.data.summary,
            puntuation: response.data.spoonacularScore,
            healthScore: response.data.healthScore,
            stepbystep: response.data.instructions,
          });
        })
        .then(() => {return res.send(DataArray)})
        .catch((err) => {return res.sendStatus(404)});
    }
  else{
    Recipe.findOne({ where: { id: id },include:[Diet_type] })
    .then(response =>{
        let respuesta = response;
      if(!respuesta){
           return res.sendStatus(404);
      }
      else{
          let resp = {
            img : "https://image.freepik.com/vector-gratis/dibujos-animados-kid-cook_10308-227.jpg",
            title : respuesta.dataValues.name,
            resume: respuesta.dataValues.resume,
            puntuation: respuesta.dataValues.puntuation,
            healthScore: respuesta.dataValues.healthyLevel,
            stepbystep: respuesta.dataValues.stepbystep,
            diets: respuesta.dataValues.diet_types.map(d => d.dataValues.name),
          }
          return res.send([resp])
      }
    })}
});

module.exports = router;

