const  {mongoose, Schema} = require('mongoose')

const horariosSchema = new mongoose.Schema({
    Subject: {
        type: Schema.Types.ObjectId,
        ref: 'subject'
    },
    dia : {
        type: String,
        required: true
    },
    horariodesde : {
        type: Date,
        required: true

    },
    horariohasta : {
        type: Date,
        required: true

    },


})

module.exports = Horarios = mongoose.model('horarios', horariosSchema)