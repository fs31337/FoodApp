const { Router } = require('express');
const router = Router();
const {Diet_type} = require('../db.js');





router.get('/', async function(req, res){
    let typesArray = [];
     await Diet_type.findAll({attributes:['name']}).then(types =>
         types.map(type => typesArray.push(type.dataValues.name)))
    //  res.send("Types",{types}))
     res.send(typesArray);
});

module.exports = router;