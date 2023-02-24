const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');



const app = express();

app.use(bodyParser.json());

const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://nariz_ltrc:33971820d@webmanejo.qklt5sw.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Conectado a MongoDB Atlas!');
    })
    .catch((error) => {
        console.log('No se pudo conectar a MongoDB Atlas!');
        console.error(error);
    });




app.listen(8000, () => {
  console.log('Servidor web iniciado en el puerto 8000');
});
