const User = require('../models/User');
const bcrypt = require('bcryptjs');
const Profiles = require('../models/Profiles');
const generartoken = require ('../helpers/generarJwt');
//const generarJWT = require('../helpers/generarJwt')

const ctrlUser = {};

// POST -> Ctrl para Login de usuario
ctrlUser.login = async (req, res) => {

   const { email, password } = req.body;

   if (!email || !password) {
      return res.status(400).json({
         msg: 'Error de autenticación'
      })
   };


   // Busqueda del usuario segun las credenciales recibidas
   const user = await User.findOne({ email, password });

   // if (!user.isActive) {
   //    return res.status(400).json({
   //       msg: 'Error al autenticarse, verifique las credenciales'
   //    })
   // };

   // Generación del token de autenticación
  const token = await generartoken({uid: user._id});

   return res.json({
      user,
      token
   });

 }

ctrlUser.getUsers = async (req, res) => {
   try {
      const profiles = await Profiles.find().populate('user', ['name', 'avatar'])
      res.json(profiles)
  } catch (error) {
      console.log(error)
      res.status(500).send('server error')
  }
}


// POST -> Crear nuevo usuario
ctrlUser.postUsers = async (req, res) => {

   const { username, password, confirmPassword, email} = req.body;

   if (password !== confirmPassword) {
      return res.status(400).json({
         msg: 'Verifique los campos y vuelva a intentarlo'
      });
   };

   const passwordHashed = bcrypt.hashSync(password, 10);


   const nuevoUsuario = new User({
      username,
      password: passwordHashed,
      email,
      
   });


   try {
      const usuarioCreado = await nuevoUsuario.save();

      return res.json({
         usuarioCreado
      });
   } catch (error) {
      console.log(error.message);
      return res.status(400).json({
         msg: 'Error al crear el usuario'
      });
   }
};





ctrlUser.putUsers = (req, res) => {
   return res.json({
      msg: 'PUT'
   });
};
ctrlUser.deleteUsers = (req, res) => {
   return res.json({
      msg: 'DELETE'
   });
};

module.exports = ctrlUser;