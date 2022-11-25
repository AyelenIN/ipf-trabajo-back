const router = require('express').Router();
const { check } = require('express-validator');
const {
    getProfiles,
    postProfiles,
    putProfiles,
    deleteProfiles,
  
} = require('../../controllers/profiles_controllers');

const validarCampos = require('../../helpers/validarCampos');

const mensajeValidacion = 'Todos los campos son obligatorios';
const mensajeVal = 'Revise los campos y vuelva a intentarlo';

//end point
router.get('/obtener', getProfiles);

router.post('/create', 
     [
     check('type')
      .not().isEmpty().withMessage(mensajeValidacion)
      .isString().withMessage(mensajeVal),
     check('Name')
        .not().isEmpty().withMessage(mensajeValidacion)
        .isString().withMessage(mensajeVal),
     check('surname')
        .not().isEmpty().withMessage(mensajeValidacion)
         .isString().withMessage(mensajeVal),
     check('phone')
        .not().isEmpty().withMessage(mensajeValidacion)
        .isString().withMessage(mensajeVal),
     check('dni')
        .not().isEmpty().withMessage(mensajeValidacion)
         .isString().withMessage(mensajeVal),
     check('Birthday')
        .not().isEmpty().withMessage(mensajeValidacion)
          .isString().withMessage(mensajeVal),
     check('Nacionality')
        .not().isEmpty().withMessage(mensajeValidacion)
           .isString().withMessage(mensajeVal),
     check('Sex')
        .not().isEmpty().withMessage(mensajeValidacion)
              .isString().withMessage(mensajeVal),
      check('alumno.*.titulo')
         .not().isEmpty().withMessage()
               .isString().withMessage(),
      check('administrativo.*.cargo')
          .not().isEmpty().withMessage()
               .isString().withMessage(),
     check('Home')
        .not().isEmpty().withMessage(mensajeValidacion)
             .isString().withMessage(mensajeVal),
        validarCampos
      
      
    ], 
    postProfiles);

router.put('/add/:id', putProfiles);

router.delete('/delete/:id', deleteProfiles);

module.exports = router;