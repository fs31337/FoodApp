const { Router } = require("express");
const router = Router();
const { Diet_type } = require("../db.js");

router.get("/", async function (req, res) {
  let typesArray = [];
  const typesRaw = await Diet_type.findAll({ attributes: ["name"] })
  typesRaw.map((type) => typesArray.push(type.dataValues.name))
  res.send(typesArray);
});

module.exports = router;
