const { Router } = require('express');
const router = Router();
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const pokemonsRoute = require ('./pokemons')
const typesRoute = require ('./types')

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/pokemon', pokemonsRoute); // /api/characters/*
router.use('/types', typesRoute);


module.exports = router;
