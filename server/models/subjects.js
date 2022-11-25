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
    
})

module.exports = Subject = mongoose.model('subject', subjectsSchema)