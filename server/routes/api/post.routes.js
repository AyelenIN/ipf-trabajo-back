const router = require('express').Router();
const { check } = require('express-validator');
const {
    getPost,
    getAllPost,
    postPost,
    putPost,
    deletePost,
    
 
} = require('../../controllers/post_controllers');

const validarCampos = require('../../helpers/validarCampos');

const mensajeValidacion = 'Todos los campos son obligatorios';
const mensajeVal = 'Revise los campos y vuelva a intentarlo';


router.get('/obtener', getPost);

router.post('/create', 
     [
     check('user')
        .not().isEmpty().withMessage(mensajeValidacion)
        .isString().withMessage(mensajeVal),
     check('type')
        .not().isEmpty().withMessage(mensajeValidacion)
        .isString().withMessage(mensajeVal),
     check('titulo')
        .not().isEmpty().withMessage(mensajeValidacion)
        .isString().withMessage(mensajeVal),
        check('contenido')
       .not().isEmpty().withMessage(mensajeValidacion)
       .isString().withMessage(mensajeVal),
        validarCampos
    ], 
    postPost);

router.put('/add/:id', putPost);

router.delete('/delete/:id', deletePost);

router.get('/obten/:id', getAllPost);

module.exports = router;