const { permittedCrossDomainPolicies } = require("helmet");
require('dotenv').config()

module.exports = {
    port: process.env.PORT,
    SECRET: process.env.SECRET,
    URI_MONGODB: process.env.URI_MONGODB
}