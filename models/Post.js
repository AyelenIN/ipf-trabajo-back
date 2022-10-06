const  mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    type : [{type: String, required: true}], //Administrador , docentes

    fecha: {
        type: Date,
        required: true,
        
    },
    titulo: {
        type: String,
        required: true,
        
    },
    Contenido: {
        type: String,
        required: true
    }
 
})

module.exports = Post = mongoose.model('post', PostSchema)