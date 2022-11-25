const router = require('express').Router();
const { check } = require('express-validator');
const {
    getAsistencia,
    getAllAsistencia,
    postAsistencia,
    putAsistencia,
    deleteAsistencia,
  
} = require('../../controllers/asistencias_controllers');

const validarCampos = require('../../helpers/validarCampos');

const mensajeValidacion = 'Todos los campos son obligatorios';
const mensajeVal = 'Revise los campos y vuelva a intentarlo';

//end point
router.get('/obtener', getAsistencia);

router.post('/create', 
     [
     check('Profile')
      .not().isEmpty().withMessage(mensajeValidacion)
      .isString().withMessage(mensajeVal),
     check('type')
        .not().isEmpty().withMessage(mensajeValidacion)
        .isString().withMessage(mensajeVal),
     check('fecha')
        .not().isEmpty().withMessage(mensajeValidacion)
         .isString().withMessage(mensajeVal),
     check('asistio')
         .not().isEmpty().withMessage(mensajeValidacion)
          .isString().withMessage(mensajeVal),
        validarCampos
      
      
    ], 
    postAsistencia);

router.put('/add/:id', putAsistencia);

router.delete('/delete/:id', deleteAsistencia);

router.get('/obtener/:id', getAllAsistencia);


module.exports = router;