// [ ] POST /recipe:
// Recibe los datos recolectados desde el formulario controlado de la ruta de creación de recetas por body
// Crea una receta en la base de datos

const { Router } = require('express');
const router = Router();
const {Recipe} = require('../db.js');

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
    const {name,resume,puntuation} = req.body;
    if (name !== undefined && resume !== undefined && puntuation !== undefined){
        Recipe.create({
            name:`${name}`,
            id: generateUUID(`${name}`),
            resume:`${resume}`,
            puntuation:`${puntuation}`,
        })
        res.send("Receta Creada correctamente")
    }
    else{
        res.send("Los datos ingresados son incorrectos o falta algun dato")
    }
    }
)



module.exports = router;