const  {mongoose, Schema} = require('mongoose')

const asistenciasSchema = new mongoose.Schema({
    Profile: {
        type: Schema.Types.ObjectId,
        ref: 'profile'
    },
    type : [{type: String, required: true}], //Administrador , docentes, alumnos
    fecha : {
        type: Date,
        required: true
    },
    descripcion : {
        type: String,
        required: true

    },
   


})

module.exports = Asistencia = mongoose.model('asistencias', asistenciasSchema)