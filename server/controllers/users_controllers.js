const User = require('../models/User');
const bcrypt = require('bcryptjs');
const auth = require('../middlewares/auth')
const Profiles = require('../models/Profiles');
const {generartoken} = require ('../helpers/generarJwt');
//const generarJWT = require('../helpers/generarJwt')

const ctrlUser = {};

// POST -> Ctrl para Login de usuario
ctrlUser.login = async (req, res) => {

   const { email, password } = req.body;

   console.log(email, password)

   if (!email || !password) {
      return res.status(400).json({
         msg: 'Error de autenticación'
      })
   };


   // Busqueda del usuario segun las credenciales recibidas
   const user = await User.findOne({email});
   const profile = await Profiles.findOne ({ user:user._id});

   // if (!user.isActive) {
   //    return res.status(400).json({
   //       msg: 'Error al autenticarse, verifique las credenciales'
   //    })
   // };

   // Generación del token de autenticación

   console.log (user)
  const token = await generartoken({uid: user._id});

   return res.json({
      user,
      token,
      profile
   });

 }

 //Ruta get para todos los usuarios
ctrlUser.getAllUsers = async (req, res) => {

   //Creamos una funcion asincrona la cual va a esperar a que la bd nos traiga todos los tados del modelo
   const datos = await User.find({})
   //Aqui retornamos un mensaje en formato json el cual nos traera todos los datos encoontrados
   return res.json({
      mensaje: "usuarios enontrados",
      encontrados: datos
   })
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





ctrlUser.putUsers = async (req, res) => {
   const {id}= req.params
   const {username, email, password} = req.body
   const update = {}
   if (username){
      update.username=username;
   }
   if (email){
      update.email=email;
   }
   if (password){
      update.password= password;
   }
   if(
      update.username || update.email || update.password
   ){
      try { 
         const user= await User.findByIdAndUpdate(id, {new:true})
         res.json({
            msg: "Se actualizo el usuario"
         })
         
      } catch (error) {
         res.json({
            msg: "No se pudo actualizar"
         })

         
      }
   }
 
};
ctrlUser.deleteUsers = async (req, res) => {
   const {id} = req.params
   try {
      await User.findByIdAndDelete(id,{new: true})
      res.json({
         msg: "Usuario eliminado correctamente"
      })
      
   } catch (error) {
      res.json({
         msg: "No se pudo eliminar el Usuario"
      })
      
   }
  

};

//Ruta para traer 1 usuario
ctrlUser.getUsers =('/', auth, async (req, res) => {
   //Tomamos el id del usuario que queremos traer y lo asignamos a una constante
   // const {
   //    id
   // } = req.params

   try {
      //Traemos el usuario el cual tenga dicho id que trajimos antes
      const user1 = await User.findById(
         req.user.id
      ).select('-password')
      //Respondemos con un mensaje json que nos muestra el usuario
      res.json(user1)
   } catch (error) {
      //En caso de error nos manda este mensaje en formato json
      res.json({
         mensaje: "Error al encontrar el usuario"
      })

   }

})


module.exports = ctrlUser;