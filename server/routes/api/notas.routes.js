const router = require('express').Router();
const { check } = require('express-validator');
const {
    getNotas,
    getAllNotas,
    postNotas,
    putNotas,
    deleteNotas,
  
} = require('../../controllers/notas_controllers');

const validarCampos = require('../../helpers/validarCampos');

const mensajeValidacion = 'Todos los campos son obligatorios';
const mensajeVal = 'Revise los campos y vuelva a intentarlo';

//end point
router.get('/obtener', getNotas);

router.post('/create', 
     [
     check('materia')
      .not().isEmpty().withMessage(mensajeValidacion)
      .isString().withMessage(mensajeVal),
     check('notas.*.nombrealumno')
        .not().isEmpty().withMessage(mensajeValidacion)
        .isString().withMessage(mensajeVal),
     check('notas.*.parcial1')
        .not().isEmpty().withMessage(mensajeValidacion)
         .isString().withMessage(mensajeVal),
     check('notas.*.parcial2')
         .not().isEmpty().withMessage(mensajeValidacion)
          .isString().withMessage(mensajeVal),
     check('recuperatorio')
          .not().isEmpty().withMessage()
           .isString().withMessage(),
     check('final')
           .not().isEmpty().withMessage(mensajeValidacion)
            .isString().withMessage(mensajeVal),

        validarCampos
      
      
    ], 
    postNotas);

router.put('/add/:id', putNotas);

router.delete('/delete/:id', deleteNotas);

router.get('/obtener/:id', getAllNotas);


module.exports = router;