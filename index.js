"use strict"; //usar el modo "stric"

const express = require('express')
const app = express() //Variable 'app' que llama a express

app.get('/', function (req, res) {
  res.send('Mi primer server corriendo en http://localhost:3000')
})

app.listen(3000) //Escucha en el puuerto 3000
