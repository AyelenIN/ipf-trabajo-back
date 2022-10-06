const { connect } = require('mongoose');
// require('dotenv').config()
const {URI_MONGODB} = require('../config/variables')

const conectarDB = async () => {
    try {
        connect(URI_MONGODB);
        console.log('Base de datos conectada');
    } catch (err) {
        console.log(err);
    }
}


module.exports = conectarDB;