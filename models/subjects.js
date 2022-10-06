const  {mongoose, Schema} = require('mongoose')

const subjectsSchema = new mongoose.Schema({
    DocentTitular: {
        type: Schema.Types.ObjectId,
        ref: 'profile'
    },
    anio : {
        type: Date,
        required: true
    },
    NombreMateria : {
        type: String,
        required: true

    },
    notas: [

        {
            nombreyapellido: {
                type: Schema.Types.ObjectId,
                ref: 'profile'
            },
            parcial1: {
                type: Date,
                required: true
            },
            parcial2: {
                type: Date,
                required: true
            },
            recuperatorio: {
                type: Date,
                required: true
            },





        }
    ]
 
})

module.exports = Subject = mongoose.model('subject', subjectsSchema)