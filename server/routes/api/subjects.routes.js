const router = require('express').Router();
const { check } = require('express-validator');
const {
    getSubjects,
    getAllSubjects,
    postSubjects,
    putSubjects,
    deleteSubjects,
  
} = require('../../controllers/subjects_controllers');

const validarCampos = require('../../helpers/validarCampos');

const mensajeValidacion = 'Todos los campos son obligatorios';
const mensajeVal = 'Revise los campos y vuelva a intentarlo';

//end point
router.get('/obtener', getSubjects);

router.post('/create', 
     [
     check('DocentTitular')
      .not().isEmpty().withMessage(mensajeValidacion)
      .isString().withMessage(mensajeVal),
     check('anio')
        .not().isEmpty().withMessage(mensajeValidacion)
        .isString().withMessage(mensajeVal),
     check('NombreMateria')
        .not().isEmpty().withMessage(mensajeValidacion)
         .isString().withMessage(mensajeVal),
        validarCampos
      
      
    ], 
    postSubjects);

router.put('/add/:id', putSubjects);

router.delete('/delete/:id', deleteSubjects);

router.get('/obtener/:id', getAllSubjects);


module.exports = router;