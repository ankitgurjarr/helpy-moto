var express = require('express');
var app = express();
app.get('/', function (req, res) {
	  res.send('Hello Helpy Moto');
});
app.listen(3000, function () {
	  console.log('Aplicación de pruebas escuchando en el puerto 3000!');
});
