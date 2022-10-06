const {mongoose, Schema}  = require('mongoose')

const UserSchema = new mongoose.Schema({
   // _id: Schema.Types.ObjectId,
    username : {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true
    }
 
})

module.exports = User = mongoose.model('user', UserSchema)