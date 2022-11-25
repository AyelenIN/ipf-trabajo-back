const router = require('express').Router();
const { check } = require('express-validator');
const {
    getHorario,
    getAllHorario,
    postHorario,
    putHorario,
    deleteHorario,
  
} = require('../../controllers/horarios_controllers');

const validarCampos = require('../../helpers/validarCampos');

const mensajeValidacion = 'Todos los campos son obligatorios';
const mensajeVal = 'Revise los campos y vuelva a intentarlo';

//end point
router.get('/obtener', getHorario);

router.post('/create', 
     [
     check('Subject')
      .not().isEmpty().withMessage(mensajeValidacion)
      .isString().withMessage(mensajeVal),
     check('dia')
        .not().isEmpty().withMessage(mensajeValidacion)
        .isString().withMessage(mensajeVal),
     check('horariodesde')
        .not().isEmpty().withMessage(mensajeValidacion)
         .isString().withMessage(mensajeVal),
     check('horariohasta')
        .not().isEmpty().withMessage(mensajeValidacion)
        .isString().withMessage(mensajeVal),
        validarCampos
    ], 
    postHorario);

router.put('/add/:id', putHorario);

router.delete('/delete/:id', deleteHorario);

router.get('/obtener/:id', getAllHorario);


module.exports = router;