//Aquí van a estar nuestras rutas
var express = require('express');
var router = express.Router();

/* GET home page. render coge y pinta lo que yo le indique, primero coge el fichero donde voy a pintar y después lo que le quiero pasar*/
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
