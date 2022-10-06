const jwt = require('jsonwebtoken');
require('dotenv').config();

/**
 * Función para generar token
 * @param {*} payload Object 
 */


const generartoken = (payload) => jwt.sign(payload, process.env.SECRET);

const payload = {
    id: 52552 
}

const token = generartoken(payload)

module.exports = {generartoken};