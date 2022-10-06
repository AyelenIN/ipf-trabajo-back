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
     check('Informations.*.Name')
        .not().isEmpty().withMessage(mensajeValidacion)
        .isString().withMessage(mensajeVal),
     check('Informations.*.surname')
        .not().isEmpty().withMessage(mensajeValidacion)
         .isString().withMessage(mensajeVal),
     check('Informations.*.phone')
        .not().isEmpty().withMessage(mensajeValidacion)
        .isString().withMessage(mensajeVal),
     check('Informations.*.dni')
        .not().isEmpty().withMessage(mensajeValidacion)
         .isString().withMessage(mensajeVal),
     check('Informations.*.Birthday')
        .not().isEmpty().withMessage(mensajeValidacion)
          .isString().withMessage(mensajeVal),
     check('Informations.*.Nacionality')
        .not().isEmpty().withMessage(mensajeValidacion)
           .isString().withMessage(mensajeVal),
     check('Informations.*.Sex')
        .not().isEmpty().withMessage(mensajeValidacion)
              .isString().withMessage(mensajeVal),
     check('Informations.*.Home')
        .not().isEmpty().withMessage(mensajeValidacion)
             .isString().withMessage(mensajeVal),
        validarCampos
    ], 
    postProfiles);

router.put('/add', putProfiles);

router.delete('/delete', deleteProfiles);

module.exports = router;