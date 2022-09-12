require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const fileupload = require('express-fileupload');
const apiRoutes = require('./src/routes/routes');

mongoose.connect(process.env.DATABASE, async (err) => {
  if (err) throw err.message;
  console.log(`Database connected on ${process.env.DATABASE}`);
});
mongoose.Promise = global.Promise;
mongoose.connection.on('error', (error) => {
  console.log("Error: ", error.message);
});

const server = express();

server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(fileupload());

server.use(express.static(__dirname+'/public'));

server.use('/', apiRoutes);

server.listen(process.env.PORT, () => {
  console.log(`Rodando no endereço ${process.env.BASE}`);
});