var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  var listadoJSON=[
    {
        texto:"comentario1",
        usuario:"pepe",
        fecha:new Date(),
        video:"bunny"
    },
    {
        texto:"comentario2",
        usuario:"manolito",
        fecha:new Date(),
        video:"bunny2"
    }
  ];
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(listadoJSON));
});

router.post("/",function(req,res){
       var user=req.body;
     res.send("Añadir comentario");   
});

router.get("/:id",function(req,res){
    var comentario={
        texto:"Comentario",
        usuario:"pepe",
        fecha:new Date(),
        video:"bunny"
    };
    res.setHeader('Content-Type', 'application/json');
     res.send(JSON.stringify(comentario));
});

router.post("/:id", function(req, res, next){
    res.send("Modificar comentario" + req.params.id);
});

router.get("/delete/:id", function(req, res, next){
    res.send("Borrar comentario" + req.params.id);
});

router.post("/upload",function(req,res){
    var subir_comentario = {
        texto: "vamos a poner un comentario"};
   res.setHeader('Content-Type', 'application/json');
     res.send(JSON.stringify(subir_comentario));
});

module.exports = router;