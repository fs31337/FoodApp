const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const types = require('./types.js');
const recipe = require('./recipe.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/types',types);
router.use('/recipe',recipe);
module.exports = router;
