const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');
const conectarDB = require('./database/connection');


// Initialiaciones
require('dotenv').config();
conectarDB();
const app = express()

// Configs
const { port } = require('./config/variables');


// Middlewares
app.use(helmet());
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Rutas
app.use('/api/users', require('./routes/api/users.routes'));
app.use('/api/profiles', require('./routes/api/profiles.routes'));
app.use('/api/subjects', require('./routes/api/subjects.routes'));
app.use('/api/post', require('./routes/api/post.routes'));


// Archivos estáticos
app.listen(port, () => console.log(`Servidor corriendo en http://localhost:${port}`));

