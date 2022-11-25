const Profiles = require("../models/Profiles");
const Users = require("../models/User");
const bcrypt = require('bcryptjs');
const auth = require("../middlewares/auth");
const ctrlProfiles = {};

ctrlProfiles.getProfiles = ( auth, async (req, res) => {
   
    console.log(req.body)
    try {

        const profile = await Profiles.findOne({user : req.user.id}).populate('user',  ['username','email'])
        
        if(!profile) return res.status(400).json({msg:  'NO existe tal usuario'})
        
        res.json(profile)

    } catch (error) {
        console.log(error.message)
        res.status(500).send('Server Error')
    }
 });

 ctrlProfiles.postProfiles = ('/type', '/alumno','/administrativo', async (req, res) => {

 

    // const {user, type, Name, surname, phone, dni, Birthday, Nacionality, Home} = req.body;
    const {user, Name, surname, phone, dni,Birthday, Nacionality,Sex, Home,type, alumno, administrativo} = req.body

     //construimos el profile object
    //  const profileFields = {}
    //  profileFields.user = req.user._id
    // if(user) profileFields.user = user
    // if(type) profileFields.type = type
    // if(Name) profileFields.Name = Name
    // if(surname) profileFields.surname = surname
    // if(phone) profileFields.phone = phone
    // if(dni) profileFields.dni = dni
    // if(Birthday) profileFields.Birthday = Birthday
    // if(Nacionality) profileFields.Nacionality = Nacionality
    // if(Home) profileFields.Home = Home

     try {
          
        // let profile = await Profiles.findOne({ user: req.user})  

        // if(profile){ //update or...
            
        //     profile = await Profiles.findOneAndUpdate(
        //         {user: req.user}, 
        //         {$set: profileFields }, 
        //         {new: true}
        //     )
            
        //     console.log('actualizado con exito')
        //     return res.json(profile)

        // }
        
        //

        // profile = new Profiles(profileFields) //...create
        const profile = new Profiles({user, Name, surname, phone, dni,Birthday, Nacionality,Sex, Home, type, alumno, administrativo}) //...create

        await profile.save()

        console.log('creado con exito')

        return res.json(profile)
        
    } catch (err) {
        console.error(err.message)
        res.status(500).send('server error')
    }


 })

 ctrlProfiles.putProfiles = (req, res) => {
    return res.json({
       msg: 'PUT'
    });
 };

 ctrlProfiles.deleteProfiles = async (req, res) => { 
   const {id} = req.params 
   try {
   await Profiles.findByIdAndDelete(id, {new:true})
   res.json({
      msg: "Se elimino correctamente"
   })

   } catch(error){
      res.json({
         msg: "No se pudo eliminar"
      })
      

   }
 };

 module.exports = ctrlProfiles;
 
