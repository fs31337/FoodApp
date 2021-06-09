const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const recipesname = require('./recipesname.js');
const recipeId = require('./recipeId.js');
const types = require('./types.js');
const recipe = require('./recipe.js');
const principal = require('./principal.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/recipesname',recipesname);
router.use('/recipeId',recipeId);
router.use('/types',types);
router.use('/recipe',recipe);
router.use('/principal',principal);
module.exports = router;
