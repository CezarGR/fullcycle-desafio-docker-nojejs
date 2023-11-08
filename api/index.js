require("dotenv").config()
const express = require('express');
const server = express();

const port = process.env.API_PORT;
const peopleRouter = require('./src/routes/peopleRouter');

server.use(peopleRouter)
server.listen(port,  () => { console.log('API UP....'); })
