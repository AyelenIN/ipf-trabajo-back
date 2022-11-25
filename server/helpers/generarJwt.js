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



// const jwt = require('jsonwebtoken');
// const { SECRET } = require('../config/variables');

// const generarJWT = (payload) => {
//     return new Promise( (resolve, reject) => {
//         jwt.sign(payload, SECRET, {
//             expiresIn: '1h',
//         }, (err, token) => {
//             if(err) {
//                 reject('No se pudo generar el token: ' + err);
//             }

//             resolve(token);
//         });
//     });
// }

// module.exports = generarJWT;