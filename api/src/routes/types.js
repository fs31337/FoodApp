const { Router } = require("express");
const router = Router();
const { Diet_type } = require("../db.js");

router.get("/", function (req, res) {
  let typesArray = [];
  Diet_type.findAll({ attributes: ["name"] })
  .then(response => response.map((type) => typesArray.push(type.dataValues.name)))
  .then(() => res.send(typesArray))
});

module.exports = router;
