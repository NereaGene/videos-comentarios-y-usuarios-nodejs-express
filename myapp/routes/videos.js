var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next){
    var objetoJSON={propiedad:'valor'};
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(objetoJSON));
});

router.get('/', function (req, res, next){
    res.send('Lista_videos');
    var videos=[{
        titulo:"Video 1",
        comentarios:"texto",
        url:"la que sea",
        Visualizaciones:"1",
        usuario:"Usuario 1", 
        fecha: new Date()
    },{
        titulo:"Video 2",
        comentarios:"texto2",
        url:"la que sea2",
        Visualizaciones:"1",
        usuario:"Usuario 2", 
        fecha: new Date()
    }];
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(Lista_videos));
});

router.post('/', function (req, res, next){
    var addVideo
    res.send('Añadir video');
});

router.get('/:id/', function (req, res, next){
   var video={
        etiqueta:"nombre",
        usuario:"pepe",
        fecha:new Date(),
        video:"bunny"
    };
    res.setHeader('Content-Type', 'application/json');
     res.send(JSON.stringify(video));
});

router.post('/:id/', function (req, res, next){
    res.send('Modificar video ' + req.params.id);
});

router.get('/delete/:id/', function (req, res, next){
    res.send('Borrar video ' + req.params.id);
});

router.post('/upload/', function (req, res, next){
    res.send('Subir video ');
});

module.exports = router;