const {mongoose, Schema}  = require('mongoose')

const ProfileSchema = new mongoose.Schema({
    //_id: Schema.Types.ObjectId,
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    type : [{type: String, required: true}], //Administrador , docentes, alumnos

    Informations:[
        {
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
                required: true
            },
            Birthday: {
                type: Date,
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
           
        }
    ],
   


 
})

module.exports = Profile = mongoose.model('profile', ProfileSchema)