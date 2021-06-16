// [ ] POST /recipe:
// Recibe los datos recolectados desde el formulario controlado de la ruta de creación de recetas por body
// Crea una receta en la base de datos

const { Router } = require('express');
const router = Router();
const {Recipe} = require('../db.js');
const { conn } = require('../db.js');
const {Diet_type} = require('../db.js');


function generateUUID() {
    var d = new Date().getTime();
    var uuid = 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return uuid;
}

router.post('/', function(req, res){
    const {name,resume,diet,healthyLevel,stepbystep,puntuation} = req.body;
        conn.sync({alter:true}).then(async () => {
            const recipe = await Recipe.create({
                name:`${name}`,
                id: generateUUID(`${name}`),
                resume:`${resume}`,
                healthyLevel:`${healthyLevel}`,
                stepbystep:`${stepbystep}`,
                puntuation:`${puntuation}`,
            })
            for (let i=0; i < diet.length;i++){
                const dietdb = await Diet_type.findOne({ where: { name: diet[i]} }); //cambio findOne
                await dietdb.addRecipe(recipe);
            }
        })
        res.send("Receta creada correctamente")
    }
)



module.exports = router;