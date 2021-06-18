require("dotenv").config();
const axios = require("axios").default;
const { Router } = require("express");
const router = Router();
const { KEY } = process.env;
const { Recipe } = require("../db.js");
const { Diet_type } = require("../db.js");

let letras = "abcdefghyjklmnñopqrstuvwxyz";

function tiene_letras(texto) {
  texto = texto.toLowerCase();
  for (i = 0; i < texto.length; i++) {
    if (letras.indexOf(texto.charAt(i), 0) != -1) {
      return true;
    }
  }
  return false;
}

router.get("/", function (req, res) {
  //si se usa el buscador
  console.log(req.query,"queryy")
if(req.query.length>0){
  const { name } = req.query;
  const nameok = name.charAt(0).toUpperCase() + name.toLowerCase().slice(1);

  axios.get(`https://api.spoonacular.com/recipes/complexSearch/?apiKey=${KEY}&number=20`) //&addRecipeInformation=true number=100
    .then((response) => {
      let arreglo = response.data.results.filter((recipe) => recipe.title.includes(nameok));
      arreglo.splice(9, arreglo.length);
      if (arreglo.length > 0) {
        res.send(arreglo);
      } else {
        res.send("No se encontró ninguna receta con el nombre buscado");
      }
    })
    .catch((err) => console.log("Error getting data from API", err));
} else{

  let recipesDb = [];
  Recipe.findAll({ include: [Diet_type] }).then((response) =>
    response.map((recipe) =>
      recipesDb.push({
        img: "https://image.freepik.com/vector-gratis/dibujos-animados-kid-cook_10308-227.jpg",
        title: recipe.dataValues.name,
        diet: recipe.dataValues.diet_types,
        id: recipe.dataValues.id,
        puntuation: recipe.dataValues.puntuation,
      })
    )
  );
  axios
    .get(
      `https://api.spoonacular.com/recipes/complexSearch/?apiKey=${KEY}&number=19&addRecipeInformation=true`
    ) //ORIGINAL NUMBER=100
    .then((response) => {
      let nuevaResponse = [];
      response.data.results.map((data) =>
        nuevaResponse.push({
          img: data.image,
          title: data.title,
          diet: data.diets,
          id: data.id,
          puntuation: data.weightWatcherSmartPoints, //esto no lo muestro pero lo uso para filtar // "spoonacular score" eran todos 99 por eso uso este otro puntaje.
        })
      );
      let nuevoArreglo = [];
      recipesDb.map((recipe) => {
        recipe.diet.map((tipo) => {
          nuevoArreglo.push(tipo.dataValues.name);
          recipe.diet = nuevoArreglo;
        });
        nuevoArreglo = [];
      });
      res.json([...nuevaResponse, ...recipesDb]); //retornaba vacio cuando no tenia recipes, cree una por defecto inicial.
      nuevaResponse = [];
    })
    .catch((err) => console.log("Error getting data from API", err));
  }
  });
  //Busca por id

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
