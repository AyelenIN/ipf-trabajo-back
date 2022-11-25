const {mongoose, Schema}  = require('mongoose')

const ProfileSchema = new mongoose.Schema({
    //_id: Schema.Types.ObjectId,
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    Name: {
        type: String,
        required: true
     },
     surname: {
            type: String,
            required: true
     },
    phone: {
            type: String,
            required: true
     },
     dni: {
            type: String,
            required: true,
            unique: true
     },
     Birthday: {
            type: String,
            required: true
     },
        Nacionality: {
            type: String,
            required: true
     },
        Sex: {
            type: String,
            required: true
     },
        Home: {
            type: String,
            require: true
     },
     isActive: {
        type: Boolean,
        default: true,
    },
       
    type : 
        { 
            type: String,
            required: true
            
        },
    //Administrador , docentes, alumnos

    alumno:  {
        titulo:{
        type: String 
        }
    },
         
    

    administrativo: 
        {
            cargo: {
                type: String
            }
        },
    

 
})

module.exports = Profile = mongoose.model('profile', ProfileSchema)