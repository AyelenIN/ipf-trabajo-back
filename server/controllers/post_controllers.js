const Post = require('../models/Post')

const ctrlPost = {};

ctrlPost.getPost= async (req, res) => {
    const datos = await Post.find({}).populate('user')
    return res.json({
        mensaje: "Posteos Encontrados",
        encontrados: datos
    })

}

ctrlPost.postPost = async (req, res) => {
    const {
        user,
        type,
        titulo,
        contenido
    } = req.body

    const newPost = new Post({
        user,
        type,
        titulo,
        contenido
    })

    const aviso = await newPost.save()

    return res.json({
        mensaje: "Posteos guardados",
        encontrados: aviso
    })


}

ctrlPost.putPost = async (req, res) => {
    const {
        id
    } = req.params
    const {
        user,
        type,
        fecha,
        titulo,
        contenido
    } = req.body
    const update = {}

    if (user) {
        update.type = type
    }
    if (type) {
        update.type = type
    }
    if (fecha) {
        update.fecha = fecha
    }
    if (titulo) {
        update.titulo = titulo
    }
    if (contenido) {
        update.contenido = contenido
    }
    if (update.user ||update.type ||  update.fecha || update.titulo || update.contenido) {
        try {
            const aviso = await Post.findByIdAndUpdate(id, update, {
                new: true
            })
            return res.json({
                mensaje: "Mensaje actualizado",
                aviso
            })


        } catch (error) {
            res.json({
                mensaje: "Error al actualizar mensaje"
            })
        }
    }


}

ctrlPost.deletePost = async (req, res) => {
    const {
        id
    } = req.params
    try {
        await Post.findByIdAndDelete(id, {
            new: true
        })
        res.json({
            mensaje: "Se elimino el Post"
        })
    } catch (error) {
        res.json({
            mensaje: "Error al eliminar"

        })
    }
}

ctrlPost.getAllPost = async (req, res) => {
    const {
        id
    } = req.params

    try {
        const aviso1 = await Post.findOne({
            _id: id
        })
        res.json(aviso1)
    } catch (error) {
        res.json({
            mensaje: "Error al encontrar el Post"
        })

    }
}

module.exports = ctrlPost;
