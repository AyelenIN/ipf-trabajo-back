const  {mongoose, Schema} = require('mongoose')

const notasSchema = new mongoose.Schema({
    materia: {
        type: Schema.Types.ObjectId,
        ref: 'subject'
    },
    notas: 

        {
            nombrealumno: {
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
                
            },
            final: {
                type: Date,
                required: true
            },

        }
    
 
})

module.exports = Nota = mongoose.model('notas', notasSchema)