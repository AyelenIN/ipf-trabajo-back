const router = require('express').Router();
const { check } = require('express-validator');
const {
    getAllUsers,
    postUsers,
    putUsers,
    deleteUsers,
    getUsers,
    login
} = require('../../controllers/users_controllers');

const validarCampos = require('../../helpers/validarCampos');

const mensajeValidacion = 'Todos los campos son obligatorios';
const mensajeVal = 'Revise los campos y vuelva a intentarlo';

router.post('/login', login)

router.get('/obtener', getAllUsers);

router.post('/create', 
     [
     check('username')
        .not().isEmpty().withMessage(mensajeValidacion)
        .isString().withMessage(mensajeVal),
     check('password')
        .not().isEmpty().withMessage(mensajeValidacion)
         .isString().withMessage(mensajeVal),
     check('email')
        .not().isEmpty().withMessage(mensajeValidacion)
        .isString().withMessage(mensajeVal),
        check('confirmPassword')
       .not().isEmpty().withMessage(mensajeValidacion)
       .isString().withMessage(mensajeVal),
        validarCampos
    ], 
    postUsers);

router.put('/add/:id', putUsers);

router.delete('/delete/:id', deleteUsers);

router.get('/obten/:id', getUsers);

module.exports = router;