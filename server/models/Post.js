const  {mongoose, Schema} = require('mongoose')

const PostSchema = new mongoose.Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    type : {type: String, required: true}, //Administrador , docentes

    fecha: {
        type: Date,
        default:Date.now
        
    },
    titulo: {
        type: String,
        required: true,
        
    },
    contenido: {
        type: String,
        required: true
    }
 
})

module.exports = Post = mongoose.model('post', PostSchema)