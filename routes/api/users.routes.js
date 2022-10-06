const router = require('express').Router();
const { check } = require('express-validator');
const {
    getUsers,
    postUsers,
    putUsers,
    deleteUsers,
    login
} = require('../../controllers/users_controllers');

const validarCampos = require('../../helpers/validarCampos');

const mensajeValidacion = 'Todos los campos son obligatorios';
const mensajeVal = 'Revise los campos y vuelva a intentarlo';

router.post('/login', login)

router.get('/obtener', getUsers);

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

router.put('/add', putUsers);

router.delete('/delete', deleteUsers);

module.exports = router;