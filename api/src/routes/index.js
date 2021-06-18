const { Router } = require('express');

const types = require('./types.js');
const recipe = require('./recipe.js');
const principal = require('./principal.js');

const router = Router();

router.use('/types',types);
router.use('/recipe',recipe);
router.use('/recipes',principal);
module.exports = router;
