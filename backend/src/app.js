const express = require('express');
const app = express();
const authRoutes = require('./routes/auth.routes');

app.use('/api', authRoutes);



module.exports =  app;
